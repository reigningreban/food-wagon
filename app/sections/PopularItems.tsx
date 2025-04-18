import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Button } from '~/components/ui/Button'
import { popularItems, type PopularItem } from '~/data/popular'
import { restaurants } from '~/data/restaurants'

export function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth
      const clientWidth = scrollRef.current.clientWidth
      const scrollLeft = scrollRef.current.scrollLeft
      const scrollOffset = direction === 'left' ? -clientWidth : clientWidth
      if (
        (direction === 'left' && scrollLeft > 0) ||
        (direction === 'right' && scrollLeft < scrollWidth - clientWidth)
      ) {
        scrollTo(scrollOffset)
      }
    }
  }

  return (
    <div className="relative">
      <div className="contain py-20 z-10">
        <h4 className="text-headline-4 font-bold text-[#212121] mb-[72px] text-center">
          Popular items
        </h4>
        <div className="overflow-x-scroll flex w-full gap-4" ref={scrollRef}>
          {popularItems.map((detail, index) => (
            <Item key={index} {...detail} />
          ))}
        </div>
      </div>
      <Controls
        onClickForward={() => handleScroll('right')}
        onClickBackward={() => handleScroll('left')}
      />
    </div>
  )
}

type ControlProps = {
  onClickForward: () => void
  onClickBackward: () => void
}

function Controls({ onClickForward, onClickBackward }: ControlProps) {
  return (
    <div className="absolute top-1/2 left-0 right-0 flex justify-between mx-16">
      <ControlButton onClick={onClickBackward} icon={faChevronLeft} />
      <ControlButton onClick={onClickForward} icon={faChevronRight} />
    </div>
  )
}

type ControlButtonProps = {
  onClick: () => void
  icon: IconDefinition
}

function ControlButton({ icon, ...params }: ControlButtonProps) {
  return (
    <Button
      {...params}
      className="bg-[#FFB20E] stroke-1 stroke-[#FAAA01] drop-shadow-2xl drop-shadow-[#DE9700]/30 rounded-full size-12 x-y-center shadow-lg"
    >
      <FontAwesomeIcon icon={icon} className="text-white" size="xl" />
    </Button>
  )
}

function Item({ name, image, restaurantId, price }: PopularItem) {
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  return (
    <div className="items-center text-center w-72 shrink-0">
      <div
        className="aspect-square flex flex-1 w-full bg-cover bg-no-repeat bg-center rounded-2xl mb-4"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col text-left gap-2 mb-4">
        <p className="text-headline-6 font-bold">{name}</p>
        <div className="text-primary flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="">{restaurant?.name}</span>
        </div>
        <p className="text-theme-900">{`$ ${price}`}</p>
      </div>
      <Button className="w-full py-6 bg-tertiary">Order Now</Button>
    </div>
  )
}
