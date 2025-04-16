export type DealType = {
  daysLeft: number
  discountPercent: number
  storeName: string
  image: string
}

export const deals: DealType[] = [
  {
    daysLeft: 2,
    discountPercent: 50,
    storeName: "McDonald's",
    image: '/assets/images/deal1.jpg',
  },
  {
    daysLeft: 3,
    discountPercent: 30,
    storeName: 'Pizza Hut',
    image: '/assets/images/deal2.jpg',
  },
  {
    daysLeft: 5,
    discountPercent: 20,
    storeName: 'Burger King',
    image: '/assets/images/deal3.jpg',
  },
  {
    daysLeft: 1,
    discountPercent: 10,
    storeName: 'KFC',
    image: '/assets/images/deal4.jpg',
  },
]
