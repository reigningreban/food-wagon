import {
  faChevronRight,
  faClock,
  faStar,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '~/components/ui/Button'
import { restaurants, type Restaurant } from '~/data/restaurants'

const featuredRestaurants = restaurants
  .filter((restaurant) => restaurant.featured)
  .slice(0, 8)

export function FeaturedRestaurants() {
  return (
    <div className="contain pb-20">
      <h4 className="text-headline-4 text-center font-bold text-[#212121]">
        Featured Restaurants
      </h4>
      <div className="my-22 grid grid-cols-4 gap-x-4 gap-y-16">
        {featuredRestaurants.map((restaurant, index) => (
          <Restaurant key={index} {...restaurant} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          size={'contain'}
          className="group drop-shadow-yellow-gradient-start/20 gradient-btn px-12 py-4 text-lg font-bold drop-shadow-2xl"
        >
          View All
          <FontAwesomeIcon
            icon={faChevronRight}
            className="transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:scale-110"
          />
        </Button>
      </div>
    </div>
  )
}

function Restaurant({
  image,
  discount,
  fastDelivery,
  open,
  name,
  starCount,
}: Restaurant) {
  return (
    <div>
      <div
        className="mb-6 flex h-72 w-full items-start gap-2 rounded-2xl bg-cover bg-center bg-no-repeat p-6"
        style={{ backgroundImage: `url(${image})` }}
      >
        {discount && (
          <div className="bg-tertiary flex items-center gap-2 rounded-lg px-4 py-2 text-white">
            <FontAwesomeIcon icon={faTag} />
            <p className="headline-6 font-bold">{`${discount.discountPercent}% off`}</p>
          </div>
        )}
        {fastDelivery && (
          <div className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 text-white">
            <FontAwesomeIcon icon={faClock} />
            <p className="headline-6 font-bold">Fast</p>
          </div>
        )}
      </div>
      <div className="mb-8 flex items-center gap-6">
        <div className="size-16 rounded-lg bg-red-500"></div>
        <div className="mb-1 flex flex-col">
          <p className="headline-6 font-bold text-gray-800">{name}</p>
          <div className="text-primary text-headline-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} />
            <span>{starCount}</span>
          </div>
        </div>
      </div>
      <div className="text-headline-6 font-bold">
        {open ? (
          <div className="bg-success/20 text-success inline-block rounded-lg px-4 py-2">
            Open Now
          </div>
        ) : (
          <div className="bg-tertiary/20 text-tertiary inline-block rounded-lg px-4 py-2">
            Open Tomorrow
          </div>
        )}
      </div>
    </div>
  )
}
