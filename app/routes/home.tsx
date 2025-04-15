import { Header } from '~/components/Header'
import type { Route } from './+types/home'
import { Hero } from '~/sections/Hero'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'FoodWagon' },
    {
      name: 'description',
      content: 'Within a few clicks, find meals that are accessible near you',
    },
  ]
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  )
}
