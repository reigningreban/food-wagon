import { deals, type DealType } from '~/data/deals'

export function Deals() {
  return (
    <div className="grid grid-cols-4 gap-4 contain py-20">
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
        className="h-76 flex flex-1 relative bg-cover bg-no-repeat bg-center rounded-2xl mb-8"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img className="rounded-2xl w-full" src={image} /> */}
        <div className="bg-primary px-4 py-2.5 rounded-tr-4xl rounded-bl-2xl flex absolute bottom-0 left-0 text-white">
          <p className="text-[68px] font-bold leading-12">{discountPercent}</p>
          <p className="text-headline-6 flex flex-col justify-center leading-3">
            <span className="text-headline-5 font-bold">%</span> <br />
            off
          </p>
        </div>
      </div>
      <div className="text-headline-6 font-bold">
        <p className="text-[#424242] mb-3.5">{storeName}</p>
        <div className="bg-tertiary/20 text-tertiary px-4 py-2 inline-block rounded-xl">{`${daysLeft} ${daysLeftText} Remaining`}</div>
      </div>
    </div>
  )
}
