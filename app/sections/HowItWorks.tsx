type DetailType = {
  title: string
  description: string
  icon: string
}

const details: DetailType[] = [
  {
    title: 'Select location',
    description: 'Choose the location where your food will be delivered.',
    icon: '/assets/icons/MapMarker.svg',
  },
  {
    title: 'Choose order',
    description: 'Check over hundreds of menus to pick your favorite food',
    icon: '/assets/icons/Menu.svg',
  },
  {
    title: 'Pay advanced',
    description:
      "It's quick, safe, and simple. Select several methods of payment",
    icon: '/assets/icons/Invoice.svg',
  },
  {
    title: 'Enjoy meals',
    description: 'Food is made and delivered directly to your home.',
    icon: '/assets/icons/Donut.svg',
  },
]

export function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-[#FFCE69]/20 to-[#FDEDCA]/0">
      <div className="contain py-20">
        <h4 className="text-headline-4 font-bold text-tertiary mb-[72px] text-center">
          How does it work
        </h4>
        <div className="grid grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <Detail key={index} {...detail} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Detail({ icon, title, description }: DetailType) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={icon}
        alt={title}
        className="mb-10 drop-shadow-xl drop-shadow-yellow-gradient-start/35"
      />
      <h5 className="text-headline-6 font-bold text-tertiary mb-2.5">
        {title}
      </h5>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  )
}
