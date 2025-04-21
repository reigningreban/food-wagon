import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Install() {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <div className="gradient-bg absolute bottom-0 z-[2] h-[589px] w-full bg-gradient-to-bl"></div>
      <div className="absolute bottom-20 left-1/2 z-[3] -ml-[calc(0.5*7216px)] size-[7216px] rounded-full bg-[#FEEFD0]"></div>
      <div className="contain flex justify-center">
        <div className="relative z-[4] flex flex-col items-stretch pt-32">
          <Features />
          <div className="relative flex grow flex-col-reverse items-center justify-end gap-y-12 pt-12 lg:h-[700px] lg:flex-row">
            <Screenshots />
            <div className="max-w-96">
              <h2 className="gradient-bg mb-4 bg-clip-text text-5xl font-bold text-transparent">
                Install the app
              </h2>
              <p className="mb-10 font-light text-[#827E7E]">
                It's never been easier to order food. Look for the finest
                discounts and you'll be lost in a world of delectable food.
              </p>
              <div className="text-no-wrap flex flex-wrap justify-stretch gap-2">
                <button className="group flex cursor-pointer items-center gap-2 rounded-md bg-white px-3 py-2 drop-shadow-2xl drop-shadow-[#FFAE00]/30 hover:drop-shadow-xl hover:drop-shadow-[#FFAE00]/20">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="text-tertiary group-hover:scale-105"
                    size="2x"
                  />
                  <span className="block text-start">
                    <span className="block text-xs leading-[90%] text-[#616161]">
                      GET IT ON
                    </span>
                    <span className="block text-xl leading-[90%] text-[#212121]">
                      Google Play
                    </span>
                  </span>
                </button>
                <button className="group flex cursor-pointer items-center gap-2 rounded-md bg-white px-3 py-2 drop-shadow-2xl drop-shadow-[#FFAE00]/30 hover:drop-shadow-xl hover:drop-shadow-[#FFAE00]/20">
                  <FontAwesomeIcon
                    icon={faApple}
                    className="text-tertiary group-hover:scale-105"
                    size="2x"
                  />
                  <span className="block text-start">
                    <span className="block text-[.7rem] leading-[90%] text-[#616161]">
                      Download on the
                    </span>
                    <span className="block text-xl leading-[90%] text-[#212121]">
                      App Store
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Screenshots() {
  return (
    <div className="bottom-0 left-0 flex self-start lg:absolute">
      <img
        src="/images/screens/Screen1.png"
        className="relative -bottom-8 left-0 w-44 lg:-bottom-24 lg:w-80"
      />
      <img
        src="/images/screens/Screen2.png"
        className="relative z-10 -ml-10 w-44 lg:w-80"
      />
    </div>
  )
}

function Features() {
  return (
    <div className="flex flex-col items-center gap-13 rounded-4xl bg-white p-6 sm:p-13 lg:flex-row">
      <div className="flex items-center gap-7">
        <img className="size-20" src="/icons/Discount.svg" />
        <div className="gradient-bg text-headline-5 bg-clip-text font-bold text-transparent">
          Daily <br /> Discounts
        </div>
      </div>
      <hr className="w-28 border-b border-[#CFCFCF] lg:h-24 lg:w-0 lg:border-r-2 lg:border-b-0" />
      <div className="flex items-center gap-7">
        <img className="size-20" src="/icons/LiveTracking.svg" />
        <div className="gradient-bg text-headline-5 bg-clip-text font-bold text-transparent">
          Live <br /> Tracking
        </div>
      </div>
      <hr className="w-28 border-b border-[#CFCFCF] lg:h-24 lg:w-0 lg:border-r-2 lg:border-b-0" />
      <div className="flex items-center gap-7">
        <img className="size-20" src="/icons/QuickDelivery.svg" />
        <div className="gradient-bg text-headline-5 bg-clip-text font-bold text-transparent">
          Quick <br /> Delivery
        </div>
      </div>
    </div>
  )
}
