import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Button } from '~/components/ui/Button'
import { foodTypes } from '~/data/foodTypes'
import { handleScroll } from '~/lib/componentUtils'

export function SearchByFood() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-[#FEFAF1]">
      <div className="contain py-12">
        <div className="flex flex-col justify-between gap-y-5 md:flex-row">
          <h4 className="text-headline-4 grow text-center font-bold md:text-left">
            Search by food
          </h4>
          <div className="mb-12 flex gap-6 md:mb-22">
            <a
              className="text-primary ml-auto flex items-center gap-2 md:ml-0"
              href="#"
            >
              <span>View all</span>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </a>
            <div className="hidden gap-4 md:flex">
              <Button
                className="x-y-center bg-primary size-13 rounded-full text-white"
                onClick={() => handleScroll(scrollRef, 'left')}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button
                className="x-y-center bg-primary size-13 rounded-full text-white"
                onClick={() => handleScroll(scrollRef, 'right')}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
        <div
          className="no-scrollbar flex gap-8 overflow-x-scroll"
          ref={scrollRef}
        >
          {foodTypes.map(({ image, title }, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col items-center gap-6"
            >
              <div
                className="size-52 rounded-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <p className="text-headline-6 font-bold">{title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
