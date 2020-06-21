import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import { CarouselComponent } from '../carousel/carousel.component'
import { DomSanitizer } from '@angular/platform-browser'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { LazyRenderDirective } from '../lazy-render.directive'

@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.less'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ngx-carousel__item]': `true`
  }
})
export class CarouselItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChild(LazyRenderDirective, { static: false }) lazyContent: LazyRenderDirective

  index: number
  rendered = false

  @HostBinding('style')
  get style() {
    const { width } = this.parent
    return this.sanitizer.bypassSecurityTrustStyle(`
      width: ${width}px;
    `)
  }

  get isLazyRender() {
    return !!this.lazyContent
  }

  private destroy$ = new Subject<any>()

  constructor(
    public elRef: ElementRef,
    private parent: CarouselComponent,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.parent.active$.pipe(takeUntil(this.destroy$)).subscribe(res => {
        this.rendered = this.rendered || this.index === res
      })
    }, 0)
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
