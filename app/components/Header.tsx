import {
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button } from '~/components/ui/Button'
import { MenuButton } from './MenuButton'
import { cn } from '~/lib/utils'

export function Header() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-screen border-b-1 bg-white text-gray-800',
        expanded && 'rounded-b-lg'
      )}
    >
      <div
        className={cn(
          'contain flex flex-col items-center justify-between overflow-hidden py-5 transition-all duration-300 ease-in-out lg:max-h-40 lg:flex-row',
          expanded ? 'max-h-60' : 'max-h-[78px]'
        )}
      >
        <div className="mb-5 flex w-full justify-between lg:mb-0 lg:w-auto">
          <img src="/logo.svg" className="" />
          <MenuButton isExpanded={expanded} toggleExpanded={toggleExpanded} />
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm md:text-base">
          <b>Deliver to:</b>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary mr-2"
            />
            <div className="mr-1">Current Location</div>
            <div className="font-bold">Mohammadpur Bus Stand, Dhaka</div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-7">
          <Button variant={'plain'}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-primary font-bold"
            />
            <span className="font-bold">Search Food</span>
          </Button>
          <Button
            variant="plain"
            size="contain"
            className="shadow-yellow-gradient-start/50 inset-shadow-primary/20 bg-white px-6 py-3 shadow-lg inset-shadow-sm hover:shadow-xl active:shadow-2xs lg:mb-0"
          >
            <FontAwesomeIcon icon={faUser} className="text-primary" />
            <span className="yellow-gradient bg-clip-text font-bold text-transparent">
              Login
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
