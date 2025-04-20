import {
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '~/components/ui/Button'

export function Header() {
  return (
    <div className="bg-white text-gray-800">
      <div className="contain flex flex-row items-center justify-between py-5">
        <img src="/logo.svg" />
        <div className="flex items-center gap-3">
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
        <div className="flex items-center gap-7">
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
            className="shadow-yellow-gradient-start/50 inset-shadow-primary/20 bg-white px-6 py-3 shadow-lg inset-shadow-sm hover:shadow-xl active:shadow-2xs"
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
