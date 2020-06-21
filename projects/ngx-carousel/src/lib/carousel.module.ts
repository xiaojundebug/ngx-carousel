import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CarouselComponent } from './carousel/carousel.component'
import { CarouselItemComponent } from './carousel-item/carousel-item.component'

import { LazyRenderDirective } from './lazy-render.directive'

import 'hammerjs'
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { HammerConfig } from './hammer.config'

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent, LazyRenderDirective],
  imports: [CommonModule],
  exports: [CarouselComponent, CarouselItemComponent, LazyRenderDirective],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }]
})
export class CarouselModule {}
