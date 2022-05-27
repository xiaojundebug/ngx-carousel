# NgxCarousel

<img alt="travis" src="https://travis-ci.org/xiaojun1994/ngx-popup.svg?branch=master">

A simple angular carousel component.

👉 [Live Demo](https://stackblitz.com/edit/ngx-carousel-demo)

## ✨ Features

- Support pc & mobile
- Support custom indicator
- Support lazy render

## 💻 Environment Support

- Only tested angular 8.3.29

## 📦 Install & Usage

```bash
npm i @ciri/ngx-carousel
# or
yarn add @ciri/ngx-carousel
```

Add it to your module:

```typescript
import { CarouselModule } from '@ciri/ngx-carousel'

@NgModule({
  // ...
  imports: [
    // ...
    CarouselModule
  ],
})
```

```html
<ngx-carousel [loop]="true">
  <ngx-carousel-item>
    <div class="demo-content" style="background: #FAF9D6">1</div>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <div class="demo-content" style="background: #F4B9C1">2</div>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <div class="demo-content" style="background: #96CDF6">3</div>
  </ngx-carousel-item>
</ngx-carousel>
```

## 🎨 Custom Indicator

```html
<style>
  .custom-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
</style>
<ngx-carousel [indicator]="indicator" [loop]="true">
  <ngx-carousel-item>
    <div class="demo-content" style="background: #FAF9D6">1</div>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <div class="demo-content" style="background: #F4B9C1">2</div>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <div class="demo-content" style="background: #96CDF6">3</div>
  </ngx-carousel-item>

  <ng-template #indicator let-data>
    <div class="custom-indicator">
      {{ data.active + 1 }} / {{ data.count }}
    </div>
  </ng-template>
</ngx-carousel>
```

## 🐷 Lazy Render

You can use `ng-template` + `lazyRender` to implement lazy loading

```html
<ngx-carousel [loop]="true">
  <ngx-carousel-item>
    <div class="demo-content" style="background: #FAF9D6">I'm not lazy</div>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <ng-template lazyRender>
      <div class="demo-content" style="background: #F4B9C1">I'm lazy</div>
    </ng-template>
  </ngx-carousel-item>

  <ngx-carousel-item>
    <ng-template lazyRender>
      <div class="demo-content" style="background: #96CDF6">I'm lazy</div>
    </ng-template>
  </ngx-carousel-item>
</ngx-carousel>
```

## 🎁 Inputs

| Name             | Type                                                        | Default | Description                                              |
| ---------------- | ----------------------------------------------------------- | ------- | -------------------------------------------------------- |
| initialIndex     | number                                                      | 0       | Initial index                                            |
| loop             | boolean                                                     | false   | Whether to enable loop                                   |
| speed            | number                                                      | 300     | Animation duration (ms)                                  |
| autoplay         | number                                                      | 0       | Autoplay interval (ms),<br />`0` means turn off autoplay |
| followFinger     | boolean                                                     | true    | If false, move only when you <br />release your finger   |
| allowTouchMove   | boolean                                                     | true    | If false, you can only use api <br />to slide            |
| indicator        | TemplateRef<{ \$implicit: [CarouselData](#-carouseldata) }> | -       | Custom indicator                                         |
| lazyRenderOffset | number                                                      | 0       | Number of pre-rendered offsets (left and right)          |
| cache            | boolean                                                     | true    | Cache rendered items                                     |

## 🐚 Outputs

| Event  | Description                          | Return value |
| ------ | ------------------------------------ | ------------ |
| change | Triggered when current slider change | index        |

## 🧩 Properties & Methods

| Name   | Type                                         | Description                                                                                            |
| ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| data   | [CarouselData](#-carouseldata)               | Some component raw data                                                                                |
| goTo   | (target: number, immediate: boolean) => void | Slide to target index, params:<br />`target`: Target index<br />`immediate`: Whether to skip animation |
| prev   | () => void                                   | Slide to prev slider                                                                                   |
| next   | () => void                                   | Slide to next slider                                                                                   |
| resize | () => void                                   | Recalculate size of sliders                                                                            |

## 🍬 CarouselData

| Name      | Description                     |
| --------- | ------------------------------- |
| active    | The index of the current slider |
| count     | Total number of sliders         |
| offset    | Carousel offset (%)             |
| animating | True if in transition           |
