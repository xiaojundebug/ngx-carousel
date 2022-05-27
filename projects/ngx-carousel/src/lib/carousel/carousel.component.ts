import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { BehaviorSubject, interval, Subject, Subscription, timer } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  skip,
  startWith,
  takeUntil
} from 'rxjs/operators'
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame'
import { CarouselData } from '../carousel.model'
import { CarouselItemComponent } from '../carousel-item/carousel-item.component'
import { CAROUSEL, clamp, inRange, resize } from '../../utils'

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ngx-carousel]': `true`
  },
  providers: [
    {
      provide: CAROUSEL,
      useExisting: forwardRef(() => CarouselComponent)
    }
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  /** 是否开启无缝模式 */
  @Input() loop: boolean = false
  /** 切换速度（ms） */
  @Input() speed: number = 300
  /** 自动轮播时间间隔，0 代表关闭自动轮播 */
  @Input() autoplay: number = 0
  /** 是否跟随手指滑动，设为 false 代表只在松手后进行移动判断 */
  @Input() followFinger: boolean = true
  /** 是否允许手动滑动，设为 false 代表只能通过 api 翻页 */
  @Input() allowTouchMove: boolean = true
  /** 自定义指示器 */
  @Input() indicator: TemplateRef<{ $implicit: CarouselData }>
  /** 默认激活项 */
  @Input() initialIndex: number = 0
  /** lazyRender 模式下预渲染个数，1 代表左右多渲染一个，2 代表左右多渲染两个，... */
  @Input() lazyRenderOffset: number = 0
  /** 是否缓存 lazyRender 模式下渲染过的 item，不从 dom 树中删除 */
  @Input() cache: boolean = false

  /** 索引变动时触发 */
  @Output() indexChange = new EventEmitter<number>()

  @ViewChild('track', { static: false }) track: ElementRef
  @ContentChildren(CarouselItemComponent) items: QueryList<CarouselItemComponent>

  get active() {
    return this.active$.value
  }

  get count() {
    return (this.items || []).length
  }

  get viewport() {
    return this.hostElRef.nativeElement
  }

  get width() {
    return this.viewport.offsetWidth
  }

  get canMove() {
    return this.allowTouchMove && !this.animating
  }

  get data(): CarouselData {
    return {
      active: this.active,
      count: this.count,
      offset: this.offset,
      animating: this.animating,
      atFirst: this.active === 0,
      atLast: this.active === this.count - 1
    }
  }
  active$ = new BehaviorSubject<number>(null)
  private destroy$ = new Subject()
  private intervalSub: Subscription
  private percent = 0 // 手指滑动距离所占宽度总和百分比
  private offset = 0 // 偏移量（%）
  private animating = false // 是否处于过渡效果中
  private preMirrorNode: Node // 前镜像节点
  private postMirrorNode: Node // 后镜像节点

  constructor(
    private renderer: Renderer2,
    private hostElRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.items.changes
      .pipe(takeUntil(this.destroy$), startWith(null), debounceTime(0, animationFrame))
      .subscribe(() => {
        this.init()
      })

    this.active$
      .pipe(
        takeUntil(this.destroy$),
        skip(1),
        filter(v => v !== null && inRange(v, 0, this.count - 1)),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.indexChange.emit(res)
        this.cdr.markForCheck()
      })

    // resize 功能待开发
    // resize(this.viewport)
    //   .pipe(takeUntil(this.destroy$), debounceTime(0, animationFrame))
    //   .subscribe(() => {
    //     // this.updateWidth()
    //     // this.goTo(this.active, true)
    //   })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onPanStart(e: HammerInput) {
    this.stopAutoplay()
  }

  onPanMove(e: HammerInput) {
    if (!this.canMove) {
      return
    }
    const deltaX = this.getSafeDeltaX(e.deltaX)
    this.percent = ((100 / this.count) * deltaX) / this.width

    if (this.followFinger) {
      const offset = this.percent - (100 / this.count) * this.active
      this.move(offset, true)
    }
  }

  onPanEnd(e: HammerInput) {
    if (!this.canMove) {
      return
    }
    // 轻拂或者滑动距离大于等于一个节点宽度的 50% 才进行跳转
    let newActive = this.active
    const isSwipeLeft = e.direction === Hammer.DIRECTION_LEFT && e.velocityX < -0.3
    const isSwipeRight = e.direction === Hammer.DIRECTION_RIGHT && e.velocityX > 0.3
    if (isSwipeLeft || this.percent <= -50 / this.count) {
      newActive++
    } else if (isSwipeRight || this.percent >= 50 / this.count) {
      newActive--
    }
    this.goTo(newActive)
    this.startAutoplay()
  }

  goTo(target = 0, immediate = false) {
    if (this.animating) {
      return
    }

    const active = this.getSafeActive(target)
    const realActive = this.getRealActive(active)
    this.active$.next(realActive)

    // 到达第一个或最后一个时更新镜像节点
    if (this.loop && (realActive === 0 || realActive === this.count - 1)) {
      this.handleMirrorNodes()
    }

    this.animating = true
    this.move(-(100 / this.count) * active, immediate).subscribe(() => {
      this.animating = false
      if (active === -1 || active === this.count) {
        this.goTo(realActive, true)
      }
    })
  }

  prev() {
    this.goTo(this.active - 1)
  }

  next() {
    this.goTo(this.active + 1)
  }

  private init() {
    if (this.items.length === 0) {
      return
    }
    this.items.forEach((el, index) => {
      el.index = index
      this.renderer.setStyle(el.elRef.nativeElement, 'width', `${this.width}px`)
    })
    this.goTo(this.getSafeActive(this.initialIndex, true), true)
    this.startAutoplay()
  }

  private getSafeDeltaX(deltaX) {
    const w = this.width
    return clamp(deltaX, -w, w)
  }

  private getSafeActive(active, strict = false) {
    const min = this.loop && !strict ? -1 : 0
    const max = this.loop && !strict ? this.count : this.count - 1
    return clamp(active, min, max)
  }

  // 计算真实索引
  // 由于 loop 模式下拷贝了俩节点，所以 active 有误差
  // 假设有三个节点，那么 active 非 loop 模式下为 0 ～ 2，loop 模式下为 -1 ～ 3
  private getRealActive(active) {
    return (active + this.count) % this.count
  }

  // loop 模式下首尾拷贝一个节点，模拟无缝轮播
  // 0 1 2 => 2 0 1 2 0
  // TODO: 也许能找到一个不用手动复制 dom，并且可以自动更新内容的方式
  private handleMirrorNodes() {
    const trackEl = this.track.nativeElement
    // 清理镜像节点
    try {
      this.renderer.removeChild(trackEl, this.preMirrorNode)
      this.renderer.removeChild(trackEl, this.postMirrorNode)
    } catch (e) {}

    const { first, last } = this.items
    this.preMirrorNode = last.elRef.nativeElement.cloneNode(true)
    this.postMirrorNode = first.elRef.nativeElement.cloneNode(true)

    this.renderer.addClass(this.preMirrorNode, 'pre-mirror-node')
    this.renderer.addClass(this.postMirrorNode, 'post-mirror-node')
    this.renderer.insertBefore(trackEl, this.preMirrorNode, first.elRef.nativeElement)
    this.renderer.appendChild(trackEl, this.postMirrorNode)
  }

  private move(offset, immediate = false) {
    const el = this.track.nativeElement
    const oldOffset = this.offset
    const newOffset = (this.offset = offset)

    this.renderer.setStyle(el, 'transition', immediate ? 'none' : `transform ${this.speed}ms`)
    this.renderer.setStyle(el, 'transform', `translate3d(${offset}%, 0, 0)`)

    return timer(immediate || newOffset === oldOffset ? 0 : this.speed).pipe(
      takeUntil(this.destroy$)
    )
  }

  private startAutoplay() {
    if (!this.autoplay || this.count <= 1) {
      return
    }

    this.stopAutoplay()

    this.intervalSub = interval(this.autoplay + this.speed)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const oldActive = this.active
        const newActive = this.loop ? oldActive + 1 : this.getRealActive(oldActive + 1)
        this.goTo(newActive)
      })
  }

  private stopAutoplay() {
    this.intervalSub && this.intervalSub.unsubscribe()
  }
}
