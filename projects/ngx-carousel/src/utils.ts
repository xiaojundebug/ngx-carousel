import { Observable } from 'rxjs'
import ResizeObserver from 'resize-observer-polyfill'
import { InjectionToken } from '@angular/core'

/**
 * 监听元素大小变动
 * @param target 被监听元素
 */
export const resize = (target: Element): Observable<any> => {
  return new Observable(observer => {
    const ro = new ResizeObserver(entries => {
      observer.next(entries)
    })

    ro.observe(target)

    return () => {
      ro.disconnect()
    }
  })
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function inRange(number: number, start: number, end: number) {
  return number >= start && number <= end
}

export const CAROUSEL = new InjectionToken<string>('CarouselToken')
