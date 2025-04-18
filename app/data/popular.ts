export type PopularItem = {
  id: number
  name: string
  image: string
  price: number
  restaurantId: number
}

export const popularItems: PopularItem[] = [
  {
    id: 1,
    name: 'Cheeseburger',
    image: '/assets/images/cheeseburger.jpg',
    price: 8.99,
    restaurantId: 1,
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    image: '/assets/images/margherita-pizza.jpg',
    price: 12.5,
    restaurantId: 2,
  },
  {
    id: 3,
    name: 'Sushi Platter',
    image: '/assets/images/sushi-platter.jpg',
    price: 18.75,
    restaurantId: 3,
  },
  {
    id: 4,
    name: 'Pasta Carbonara',
    image: '/assets/images/pasta-carbonara.jpg',
    price: 14.2,
    restaurantId: 4,
  },
  {
    id: 5,
    name: 'Tacos',
    image: '/assets/images/tacos.jpg',
    price: 9.5,
    restaurantId: 5,
  },
  {
    id: 6,
    name: 'Caesar Salad',
    image: '/assets/images/caesar-salad.jpg',
    price: 7.25,
    restaurantId: 1,
  },
  {
    id: 7,
    name: 'BBQ Ribs',
    image: '/assets/images/bbq-ribs.jpg',
    price: 16.8,
    restaurantId: 2,
  },
  {
    id: 8,
    name: 'Pad Thai',
    image: '/assets/images/pad-thai.jpg',
    price: 13.4,
    restaurantId: 3,
  },
  {
    id: 9,
    name: 'Chicken Wings',
    image: '/assets/images/chicken-wings.jpg',
    price: 10.99,
    restaurantId: 4,
  },
  {
    id: 10,
    name: 'Ice Cream Sundae',
    image: '/assets/images/ice-cream-sundae.jpg',
    price: 5.75,
    restaurantId: 5,
  },
]
