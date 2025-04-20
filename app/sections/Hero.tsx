import {
  faBagShopping,
  faLocationDot,
  faMagnifyingGlass,
  faMotorcycle,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button, type ButtonProps } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { cn } from '~/lib/utils'

type DeliveryOption = 'delivery' | 'pickup'

export function Hero() {
  const [deliveryOption, setDeliveryOption] =
    useState<DeliveryOption>('delivery')

  return (
    <div className="flex h-[620px] flex-1 bg-[url('/images/hero-bg.png')] bg-cover bg-right-bottom">
      <div className="contain flex items-stretch justify-between">
        <div className="flex items-center">
          <div>
            <h1 className="mb-4 text-8xl font-bold text-white">
              Are you starving?
            </h1>
            <p className="mb-8 text-2xl text-[#504F4F]">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="rounded-2xl bg-white">
              <DeliveryOptions
                deliveryOption={deliveryOption}
                setDeliveryOption={setDeliveryOption}
              />
              <div className="flex gap-4 p-6">
                <div className="flex flex-grow items-center gap-1 rounded-xl bg-gray-100 px-4 py-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    className="text-deep-orange"
                  />
                  <Input
                    name="address"
                    className="border-0 font-sans text-lg placeholder:text-lg placeholder:text-gray-500 active:outline-none"
                    placeholder="Enter Your Address"
                  />
                </div>
                <Button
                  size="contain"
                  className="from-deep-orange bg-gradient-to-tr to-[#F65900] px-12 py-5 font-bold text-white"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Find Food
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[505px] flex-col justify-end">
          <img src="/images/hero-bowl.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

type OptionButtonProps = ButtonProps & {
  icon: IconDefinition
  label: string
  active: boolean
}

function OptionButton({ active, icon, label, onClick }: OptionButtonProps) {
  return (
    <Button
      variant={'plain'}
      className={cn(
        'flex h-12 w-36 cursor-pointer items-center gap-2.5 rounded-xl px-6 py-2.5 text-gray-600 transition-colors duration-300 ease-in-out',
        active && 'text-tertiary'
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className="text-lg font-bold">{label}</span>
    </Button>
  )
}

type DeliveryOptionsProps = {
  deliveryOption: DeliveryOption
  setDeliveryOption: (option: DeliveryOption) => void
}

function DeliveryOptions({
  deliveryOption,
  setDeliveryOption,
}: DeliveryOptionsProps) {
  return (
    <div className="relative flex gap-2 border-b p-6">
      <div
        className={cn(
          'bg-tertiary/30 absolute h-12 w-36 rounded-xl transition-transform duration-300 ease-in-out',
          deliveryOption === 'pickup' &&
            'translate-x-[calc(100%+(var(--spacing)*2))]'
        )}
      ></div>
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
  )
}
