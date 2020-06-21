import { Directive, TemplateRef } from '@angular/core'

@Directive({
  selector: '[lazyRender]'
})
export class LazyRenderDirective {
  constructor(public content: TemplateRef<any>) {}
}
