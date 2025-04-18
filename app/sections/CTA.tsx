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
    image: '/assets/images/sandwich.jpg',
  },
  {
    title: ['Celebrate  parties with', 'Fried Chicken'],
    description:
      'Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.',
    image: '/assets/images/chicken.jpg',
  },
  {
    title: ['Wanna eat hot & spicy', 'Pizza?'],
    description:
      'Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.',
    image: '/assets/images/pizza.jpg',
  },
]

export function CTA() {
  return (
    <div>
      <div className="contain flex flex-col gap-20 py-40">
        {data.map((item, index) => (
          <CTACard {...item} index={index} key={index} />
        ))}
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
  const isOdd = index % 2 !== 0
  return (
    <div
      className={cn(
        'inset-shadow flex overflow-hidden rounded-xl shadow-2xl',
        isOdd ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div className="w-[500px] px-14 pt-40 pb-14">
        <h4 className="text-headline-4 mb-5 font-bold text-[#353535]">
          {start} <span className="text-primary">{` ${end}`}</span>
        </h4>
        <p className="mb-28 text-[#616161]/70">{description}</p>
        <Button className="group gradient-btn w-full py-6 font-bold text-white">
          <span>PROCEED TO ORDER</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:scale-110"
          />
        </Button>
      </div>
      <div
        className="grow bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  )
}
