import type { RefObject } from 'react'

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
