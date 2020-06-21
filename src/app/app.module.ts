import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CarouselModule } from '@ciri/ngx-carousel'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
