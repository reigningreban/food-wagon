export type Discount = {
  discountPercent: number
  daysLeft: number
}
export type Restaurant = {
  id: number
  name: string
  description: string
  image: string
  starCount: number
  fastDelivery: boolean
  discount?: Discount
  featured: boolean
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'The Rustic Spoon',
    description: 'Contemporary American cuisine',
    image: '/assets/images/burger.jpg',
    starCount: 67,
    fastDelivery: true,
    discount: {
      discountPercent: 15,
      daysLeft: 3,
    },
    featured: true,
  },
  {
    id: 2,
    name: 'Saffron & Sage',
    description: 'Modern Indian fusion',
    image: '/assets/images/masala.jpg',
    starCount: 52,
    fastDelivery: false,
    discount: {
      discountPercent: 20,
      daysLeft: 2,
    },
    featured: true,
  },
  {
    id: 3,
    name: 'Olive & Thyme',
    description: 'Mediterranean kitchen',
    image: '/assets/images/greek.jpg',
    starCount: 38,
    fastDelivery: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Golden Dragon House',
    description: 'Authentic Chinese cuisine',
    image: '/assets/images/chinese.jpg',
    starCount: 61,
    fastDelivery: false,
    discount: {
      discountPercent: 25,
      daysLeft: 4,
    },
    featured: true,
  },
  {
    id: 5,
    name: 'Verde Kitchen',
    description: 'Vegetarian & Vegan',
    image: '/assets/images/veggies.jpg',
    starCount: 45,
    fastDelivery: true,
    discount: {
      discountPercent: 10,
      daysLeft: 5,
    },
    featured: false,
  },
  {
    id: 6,
    name: 'Bistro Bella',
    description: 'French cuisine',
    image: '/assets/images/bread.jpg',
    starCount: 47,
    fastDelivery: false,
    featured: true,
  },
  {
    id: 7,
    name: 'Tokyo Treats',
    description: 'Japanese & Sushi',
    image: '/assets/images/ramen.jpg',
    starCount: 68,
    fastDelivery: true,
    discount: {
      discountPercent: 15,
      daysLeft: 2,
    },
    featured: true,
  },
  {
    id: 8,
    name: 'Spice Route',
    description: 'Thai street food',
    image: '/assets/images/grills.jpg',
    starCount: 33,
    fastDelivery: false,
    featured: false,
  },
  {
    id: 9,
    name: 'Urban Plate',
    description: 'Modern American bistro',
    image: '/assets/images/street.jpg',
    starCount: 55,
    fastDelivery: true,
    discount: {
      discountPercent: 30,
      daysLeft: 1,
    },
    featured: true,
  },
  {
    id: 10,
    name: 'Pasta Paradise',
    description: 'Italian cuisine',
    image: '/assets/images/pasta.jpg',
    starCount: 42,
    fastDelivery: false,
    featured: false,
  },
  {
    id: 11,
    name: 'Seoul Kitchen',
    description: 'Korean barbecue & more',
    image: '/assets/images/bibimbap.jpg',
    starCount: 58,
    fastDelivery: true,
    discount: {
      discountPercent: 20,
      daysLeft: 3,
    },
    featured: true,
  },
  {
    id: 12,
    name: 'Mediterranean Breeze',
    description: 'Greek specialties',
    image: '/assets/images/veggies2.jpg',
    starCount: 49,
    fastDelivery: false,
    featured: false,
  },
  {
    id: 13,
    name: 'Taco Tierra',
    description: 'Authentic Mexican',
    image: '/assets/images/taco.jpg',
    starCount: 51,
    fastDelivery: true,
    featured: true,
  },
  {
    id: 14,
    name: 'Fire & Smoke BBQ',
    description: 'Smokehouse favorites',
    image: '/assets/images/gamon-steak.jpg',
    starCount: 63,
    fastDelivery: false,
    discount: {
      discountPercent: 15,
      daysLeft: 4,
    },
    featured: true,
  },
  {
    id: 15,
    name: 'Fresh Fusion',
    description: 'Asian fusion cuisine',
    image: '/assets/images/stir-fry.jpg',
    starCount: 46,
    fastDelivery: true,
    featured: false,
  },
  {
    id: 16,
    name: 'The Garden Table',
    description: 'Farm to table restaurant',
    image: '/assets/images/veggies.jpg',
    starCount: 69,
    fastDelivery: false,
    discount: {
      discountPercent: 25,
      daysLeft: 2,
    },
    featured: true,
  },
  {
    id: 17,
    name: 'Curry House',
    description: 'Traditional Indian cuisine',
    image: '/assets/images/masala.jpg',
    starCount: 54,
    fastDelivery: true,
    featured: false,
  },
  {
    id: 18,
    name: 'The Seafood Shack',
    description: 'Fresh seafood daily',
    image: '/assets/images/fish.jpg',
    starCount: 57,
    fastDelivery: false,
    discount: {
      discountPercent: 20,
      daysLeft: 3,
    },
    featured: true,
  },
  {
    id: 19,
    name: 'Noodle Nation',
    description: 'Asian noodle specialties',
    image: '/assets/images/noodles.jpg',
    starCount: 44,
    fastDelivery: true,
    featured: false,
  },
  {
    id: 20,
    name: 'The Hungry Bear',
    description: 'American comfort food',
    image: '/assets/images/steak.jpg',
    starCount: 48,
    fastDelivery: false,
    featured: true,
  },
]
