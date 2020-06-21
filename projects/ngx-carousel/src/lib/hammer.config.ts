import { HammerGestureConfig } from '@angular/platform-browser'

declare var Hammer: any

export class HammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      inputClass: Hammer.TouchMouseInput
    })
    return mc
  }
}
