import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
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
import { BehaviorSubject, fromEvent, interval, Subject, Subscription, timer } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  skip,
  startWith,
  takeUntil
} from 'rxjs/operators'
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame'
import { CarouselItemComponent } from '../carousel-item/carousel-item.component'
import { CarouselData } from '../carousesl.model'
import { clamp } from '../../utils'

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ngx-carousel]': `true`
  }
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /** 是否开启无缝模式 */
  @Input() loop: boolean = false
  /** 切换速度（ms） */
  @Input() speed: number = 300
  /** 自动轮播时间间隔，0 代表关闭自动轮播 */
  @Input() autoplay: number = 0
  /** 是否跟随手指滑动 */
  @Input() followFinger: boolean = true
  /** 是否允许手动滑动，设为 false 代表只能通过 api 翻页 */
  @Input() allowTouchMove: boolean = true
  /** 自定义指示器 */
  @Input() indicator: TemplateRef<{ $implicit: CarouselData }>
  /** 默认激活项 */
  @Input() initialIndex: number = 0

  /** 索引变动时触发 */
  @Output() change = new EventEmitter<number>()

  @ViewChild('track', { static: false }) track: ElementRef
  @ContentChildren(CarouselItemComponent) items: QueryList<CarouselItemComponent>

  get count() {
    return this.items.length
  }

  get width() {
    return this.hostElRef.nativeElement.offsetWidth
  }

  get canMove() {
    return this.allowTouchMove && !this.animating
  }

  get data(): CarouselData {
    return {
      active: this.active$.value,
      count: this.count,
      offset: this.offset,
      animating: this.animating
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
    private render: Renderer2,
    private hostElRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.active$
      .pipe(
        takeUntil(this.destroy$),
        filter(v => v !== null && v >= 0 && v <= this.count - 1),
        distinctUntilChanged(),
        skip(1)
      )
      .subscribe(res => {
        this.change.emit(res)
      })

    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$), debounceTime(60, animationFrame))
      .subscribe(() => {
        this.resize()
      })

    this.items.changes
      .pipe(takeUntil(this.destroy$), startWith(null), debounceTime(60, animationFrame))
      .subscribe(() => {
        this.init()
      })
  }

  ngOnChanges(changes: SimpleChanges) {}

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
      const offset = this.percent - (100 / this.count) * this.active$.value
      this.move(offset, true)
    }
  }

  onPanEnd(e: HammerInput) {
    if (!this.canMove) {
      return
    }
    // 轻拂或者滑动距离大于等于一个节点宽度的 50% 才进行跳转
    let newActive = this.active$.value
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

  /**
   * 跳转到某一项
   * @param target 目标索引
   * @param immediate 跳转时是否不显示动画
   */
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

  /**
   * 切换到上一个
   */
  prev() {
    this.goTo(this.active$.value - 1)
  }

  /**
   * 切换到下一个
   */
  next() {
    this.goTo(this.active$.value + 1)
  }

  /**
   * 重新计算更新组件
   */
  resize() {
    this.cdr.detectChanges()
  }

  private init() {
    if (this.items.length === 0) {
      return
    }
    this.items.forEach((el, index) => (el.index = index))

    if (this.loop) {
      this.handleMirrorNodes()
    }

    setTimeout(() => {
      this.goTo(this.getSafeActive(this.initialIndex, true), true)
    }, 0)
    this.startAutoplay()
  }

  private getSafeDeltaX(deltaX) {
    return clamp(deltaX, -this.width, this.width)
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
      this.render.removeChild(trackEl, this.preMirrorNode)
      this.render.removeChild(trackEl, this.postMirrorNode)
    } catch (e) {}

    const { first, last } = this.items
    this.preMirrorNode = last.elRef.nativeElement.cloneNode(true)
    this.postMirrorNode = first.elRef.nativeElement.cloneNode(true)

    this.render.addClass(this.preMirrorNode, 'pre-mirror-node')
    this.render.addClass(this.postMirrorNode, 'post-mirror-node')
    this.render.insertBefore(trackEl, this.preMirrorNode, first.elRef.nativeElement)
    this.render.appendChild(trackEl, this.postMirrorNode)
  }

  private move(offset, immediate = false) {
    const el = this.track.nativeElement
    const oldOffset = this.offset
    const newOffset = (this.offset = offset)

    this.render.setStyle(el, 'transition', immediate ? 'none' : `transform ${this.speed}ms`)
    this.render.setStyle(el, 'transform', `translate3d(${offset}%, 0, 0)`)

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
        const oldActive = this.active$.value
        const newActive = this.loop ? oldActive + 1 : this.getRealActive(oldActive + 1)
        this.goTo(newActive)
      })
  }

  private stopAutoplay() {
    this.intervalSub && this.intervalSub.unsubscribe()
  }
}
