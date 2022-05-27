import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { LazyRenderDirective } from '../lazy-render.directive'
import { CAROUSEL, inRange } from '../../utils'
import { CarouselComponent } from '../carousel/carousel.component'

@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ngx-carousel__item]': `true`
  }
})
export class CarouselItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChild(LazyRenderDirective, { static: false }) lazyContent: LazyRenderDirective

  index: number
  rendered = false

  // 这种方式不兼容 ie11，废弃掉此方案
  // @HostBinding('style')
  // get style() {
  //   return this.sanitizer.bypassSecurityTrustStyle(`
  //     width: ${this.parent.width}px;
  //   `)
  // }

  get isLazyRender() {
    return !!this.lazyContent
  }

  get shouldRender() {
    return !this.isLazyRender || this.rendered
  }

  private destroy$ = new Subject<any>()

  constructor(
    public elRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    @Inject(CAROUSEL) private parent: any // 之所以不声明具体类型是因为会警告循环引用，虽然它并未发生
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const { active$, cache, lazyRenderOffset: offset } = this.parent as CarouselComponent

    active$.pipe(takeUntil(this.destroy$)).subscribe(index => {
      this.rendered =
        (cache && this.rendered) || inRange(this.index, index - offset, index + offset)
      this.cdr.markForCheck()
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
