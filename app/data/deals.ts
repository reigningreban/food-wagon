import { restaurants, type Discount, type Restaurant } from './restaurants'

export type DealType = {
  daysLeft: number
  discountPercent: number
  storeName: string
  image: string
}

type RestaurantWithDeal = Restaurant & {
  discount: Discount
}

export const deals: DealType[] = restaurants
  .filter((restaurant): restaurant is RestaurantWithDeal =>
    Boolean(restaurant.discount)
  )
  .slice(0, 4)
  .map(({ name, image, discount }) => ({
    storeName: name,
    image,
    daysLeft: discount.daysLeft,
    discountPercent: discount.discountPercent,
  }))
  .sort((a, b) => b.discountPercent - a.discountPercent)
