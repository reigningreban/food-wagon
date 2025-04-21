import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '~/components/ui/Button'
import { cn } from '~/lib/utils'

type CTAData = {
  title: [String, string]
  description: String
  image: string
}

const data: CTAData[] = [
  {
    title: ['Best deals', 'Crispy Sandwiches'],
    description:
      ' Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
    image: '/images/sandwich.jpg',
  },
  {
    title: ['Celebrate  parties with', 'Fried Chicken'],
    description:
      'Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.',
    image: '/images/chicken.jpg',
  },
  {
    title: ['Wanna eat hot & spicy', 'Pizza?'],
    description:
      'Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.',
    image: '/images/pizza.jpg',
  },
]

export function CTA() {
  return (
    <div>
      <div className="contain flex flex-col gap-20 py-12 lg:py-40">
        {data.map((item, index) => (
          <CTACard {...item} index={index} key={index} />
        ))}
      </div>
      <div
        className="x-y-center h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      >
        <div className="text-center">
          <h2 className="mb-12 text-4xl leading-[97.5%] font-black text-white lg:text-[57px]">
            Are you ready to order with <br /> the best deals?
          </h2>
          <Button
            variant={'plain'}
            className="group bg-tertiary hover:border-tertiary hover:bg-tertiary/90 border-3 border-transparent px-4 py-6 font-bold text-white transition-colors duration-300 ease-in-out"
          >
            <span>PROCEED TO ORDER</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-120"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

type CTACardProps = CTAData & {
  index: number
}

function CTACard({
  title: [start, end],
  description,
  image,
  index,
}: CTACardProps) {
  const isEven = index % 2 === 0
  return (
    <div
      className={cn(
        'inset-shadow flex flex-col overflow-hidden rounded-xl shadow-2xl',
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div
        className="h-60 grow bg-cover bg-center bg-no-repeat md:h-auto"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="max-w-[500px] px-8 pt-8 pb-10 lg:px-14 lg:pt-40 lg:pb-14">
        <h4 className="lg:text-headline-4 mb-5 text-4xl font-bold text-[#353535]">
          {start} <span className="text-primary">{` ${end}`}</span>
        </h4>
        <p className="mb-12 text-[#616161]/70 lg:mb-28">{description}</p>
        <Button className="group gradient-bg w-full py-6 font-bold text-white">
          <span>PROCEED TO ORDER</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:scale-110"
          />
        </Button>
      </div>
    </div>
  )
}
