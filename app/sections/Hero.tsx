import {
  faBagShopping,
  faLocationDot,
  faMagnifyingGlass,
  faMotorcycle,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { cn } from '~/lib/utils'

type DeliveryOption = 'delivery' | 'pickup'
export function Hero() {
  const [deliveryOption, setDeliveryOption] =
    useState<DeliveryOption>('delivery')

  return (
    <div className="h-[620px] bg-[url('/assets/images/hero-bg.png')] bg-cover bg-right-bottom flex flex-1">
      <div className="contain flex justify-between items-stretch">
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-white text-8xl mb-4">
              Are you starving?
            </h1>
            <p className="mb-8 text-2xl text-[#504F4F]">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="bg-white rounded-2xl">
              <div className="p-6 border-b flex gap-2">
                <OptionButton
                  icon={faMotorcycle}
                  label="Delivery"
                  active={deliveryOption === 'delivery'}
                  onClick={() => setDeliveryOption('delivery')}
                />
                <OptionButton
                  icon={faBagShopping}
                  label="Pickup"
                  active={deliveryOption === 'pickup'}
                  onClick={() => setDeliveryOption('pickup')}
                />
              </div>
              <div className="p-6 flex gap-4">
                <div className="flex-grow rounded-xl bg-gray-100 flex items-center gap-1 px-4 py-2 ">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    className="text-deep-orange"
                  />
                  <Input
                    className="border-0 text-lg font-sans placeholder:text-gray-500 placeholder:text-lg active:outline-none"
                    placeholder="Enter Your Address"
                  />
                </div>
                <Button
                  size="contain"
                  className="bg-gradient-to-tr from-deep-orange to-[#F65900] text-white font-bold px-12 py-5"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Find Food
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end w-[505px]">
          <img src="/assets/images/hero-bowl.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

type OptionButtonProps = {
  icon: IconDefinition
  label: string
  active: boolean
  onClick: () => void
}

function OptionButton({ active, icon, label, onClick }: OptionButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl px-6 py-2.5 flex gap-2.5 items-center text-gray-600 cursor-pointer',
        active && 'text-tertiary bg-tertiary/10'
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className="text-lg font-bold">{label}</span>
    </button>
  )
}
