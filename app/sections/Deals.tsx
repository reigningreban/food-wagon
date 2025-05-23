import { deals, type DealType } from '~/data/deals'

export function Deals() {
  return (
    <div className="contain grid grid-cols-1 gap-4 gap-y-12 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
      {deals.map((deal, idx) => (
        <DealItem {...deal} key={idx} />
      ))}
    </div>
  )
}

function DealItem({ image, daysLeft, discountPercent, storeName }: DealType) {
  const daysLeftText = daysLeft === 1 ? 'Day' : 'Days'
  return (
    <div>
      <div
        className="relative mb-8 flex h-76 flex-1 rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-primary absolute bottom-0 left-0 flex rounded-tr-4xl rounded-bl-2xl px-4 py-2.5 text-white">
          <p className="text-[68px] leading-12 font-bold">{discountPercent}</p>
          <p className="text-headline-6 flex flex-col justify-center leading-3">
            <span className="text-headline-5 font-bold">%</span> <br />
            off
          </p>
        </div>
      </div>
      <div className="text-lg font-bold">
        <p className="mb-3.5 text-[#424242]">{storeName}</p>
        <div className="bg-tertiary/20 text-tertiary inline-block rounded-lg px-3 py-1">{`${daysLeft} ${daysLeftText} Remaining`}</div>
      </div>
    </div>
  )
}
