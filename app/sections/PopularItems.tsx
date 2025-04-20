import {
  faChevronLeft,
  faChevronRight,
  faDollarSign,
  faLocationDot,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Button } from '~/components/ui/Button'
import { popularItems, type PopularItem } from '~/data/popular'
import { restaurants } from '~/data/restaurants'
import { handleScroll } from '~/lib/componentUtils'

export function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div className="contain z-10 pt-20">
        <h4 className="text-headline-4 mb-[72px] text-center font-bold text-[#212121]">
          Popular items
        </h4>
        <div
          className="no-scrollbar flex w-full gap-4 overflow-x-scroll pb-20"
          ref={scrollRef}
        >
          {popularItems.map((detail, index) => (
            <Item key={index} {...detail} />
          ))}
        </div>
      </div>
      <Controls
        onClickForward={() => handleScroll(scrollRef, 'right')}
        onClickBackward={() => handleScroll(scrollRef, 'left')}
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
    <div className="absolute top-1/2 right-0 left-0 mx-16 flex justify-between">
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
      className="x-y-center size-12 rounded-full bg-[#FFB20E] stroke-[#FAAA01] stroke-1 shadow-lg drop-shadow-2xl drop-shadow-[#DE9700]/30"
    >
      <FontAwesomeIcon icon={icon} className="text-white" size="xl" />
    </Button>
  )
}

function Item({ name, image, restaurantId, price }: PopularItem) {
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  return (
    <div className="w-72 shrink-0 items-center text-center">
      <div
        className="mb-4 flex aspect-square w-full flex-1 rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="mb-4 flex flex-col gap-2 text-left">
        <p className="text-headline-6 font-bold">{name}</p>
        <div className="text-primary flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="">{restaurant?.name}</span>
        </div>
        <div className="flex items-center text-gray-900">
          <FontAwesomeIcon icon={faDollarSign} size="xs" />
          <span>{price.toFixed(2)}</span>
        </div>
      </div>
      <Button className="bg-tertiary w-full py-6 drop-shadow-2xl drop-shadow-[#FD725C]/20">
        Order Now
      </Button>
    </div>
  )
}
