import type { RefObject } from 'react'

/**
 * Smoothly scrolls an element to a specified offset in a given direction.
 *
 * @param scrollRef - A reference to the HTML element to scroll.
 * @param offset - The distance to scroll, in pixels.
 * @param direction - The direction of the scroll, either 'horizontal' or 'vertical'.
 */

const scrollTo = (
  scrollRef: RefObject<HTMLElement | null>,
  offset: number,
  direction: 'horizontal' | 'vertical'
) => {
  if (scrollRef.current) {
    const scrollOptions: ScrollToOptions = {
      behavior: 'smooth',
    }
    if (direction === 'horizontal') {
      scrollOptions.left = offset
    } else {
      scrollOptions.top = offset
    }
    scrollRef.current.scrollBy(scrollOptions)
  }
}

/**
 * Handles horizontal scrolling of an element in a specified direction.
 *
 * @param componentRef - A reference to the HTML element to scroll.
 * @param direction - The direction of the scroll, either 'left' or 'right'.
 * @param offset - Optional. The distance to scroll, in pixels. Defaults to the element's client width.
 */
const handleHorizontalScroll = (
  componentRef: RefObject<HTMLElement | null>,
  direction: 'left' | 'right',
  offset?: number
) => {
  if (componentRef.current) {
    const scrollWidth = componentRef.current.scrollWidth
    const clientWidth = componentRef.current.clientWidth
    const scrollLeft = componentRef.current.scrollLeft

    const backwards = direction === 'left'
    const scrollOffset = (offset ?? clientWidth) * (backwards ? -1 : 1)

    if (
      (backwards && scrollLeft > 0) ||
      (direction === 'right' && scrollLeft < scrollWidth - clientWidth)
    ) {
      scrollTo(componentRef, scrollOffset, 'horizontal')
    }
  }
}

/**
 * Handles vertical scrolling of an element in a specified direction.
 *
 * @param componentRef - A reference to the HTML element to scroll.
 * @param direction - The direction of the scroll, either 'up' or 'down'.
 * @param offset - Optional. The distance to scroll, in pixels. Defaults to the element's client height.
 */
const handleVerticalScroll = (
  componentRef: RefObject<HTMLElement | null>,
  direction: 'up' | 'down',
  offset?: number
) => {
  if (componentRef.current) {
    const scrollHeight = componentRef.current.scrollHeight
    const clientHeight = componentRef.current.clientHeight
    const scrollTop = componentRef.current.scrollTop

    const backwards = direction === 'up'
    const scrollOffset = (offset ?? clientHeight) * (backwards ? -1 : 1)

    if (
      (backwards && scrollTop > 0) ||
      (direction === 'down' && scrollTop < scrollHeight - clientHeight)
    ) {
      scrollTo(componentRef, scrollOffset, 'vertical')
    }
  }
}

/**
 * Handles scrolling of an element in any direction (horizontal or vertical).
 *
 * @param componentRef - A reference to the HTML element to scroll.
 * @param direction - The direction of the scroll, either 'left', 'right', 'up', or 'down'.
 * @param offset - Optional. The distance to scroll, in pixels. Defaults to the element's client width or height.
 */
export const handleScroll = (
  componentRef: RefObject<HTMLElement | null>,
  direction: 'left' | 'right' | 'up' | 'down',
  offset?: number
) => {
  if (direction === 'left' || direction === 'right') {
    handleHorizontalScroll(componentRef, direction, offset)
  } else if (direction === 'up' || direction === 'down') {
    handleVerticalScroll(componentRef, direction, offset)
  }
}

/**
 * Arbitrary logo background generator, optionally seeded for reproducibility. Generated colors are dark to support white text.
 *
 * @param seed - Optional. A number used to seed the random color generation.
 * @returns A string representing the generated color in RGB format.
 */
export const generateLogoBg = (seed?: number): string => {
  const goldenRatioConjugate = 0.618033988749895
  const random =
    seed !== undefined
      ? (() => {
          let x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        })()
      : Math.random()

  const hue = (random + goldenRatioConjugate) % 1
  const saturation = 0.6 + random * 0.4 // Ensures saturation is between 0.6 and 1
  const lightness = 0.2 + random * 0.3 // Ensures lightness is between 0.2 and 0.5

  const hslToRgb = (h: number, s: number, l: number): string => {
    const hueToRgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    const r = hueToRgb(p, q, h + 1 / 3)
    const g = hueToRgb(p, q, h)
    const b = hueToRgb(p, q, h - 1 / 3)

    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`
  }

  return hslToRgb(hue, saturation, lightness)
}
