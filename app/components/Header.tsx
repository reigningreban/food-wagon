import {
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoImage from '~/../assets/logo.svg'
import { Button } from '~/components/ui/Button'

export function Header() {
  return (
    <div className="bg-white text-gray-800">
      <div className="contain py-5 flex flex-row justify-between items-center">
        <img src={LogoImage} />
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
        <div className="flex gap-7 items-center">
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
            className="shadow-lg hover:shadow-xl active:shadow-2xs bg-white shadow-yellow-gradient-start/50 inset-shadow-sm inset-shadow-primary/20 px-6 py-3"
          >
            <FontAwesomeIcon icon={faUser} className="text-primary" />
            <span className="font-bold yellow-gradient bg-clip-text text-transparent">
              Login
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
