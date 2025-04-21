import { Header } from '~/components/Header'
import type { Route } from './+types/home'
import { Hero } from '~/sections/Hero'
import { Deals } from '~/sections/Deals'
import { HowItWorks } from '~/sections/HowItWorks'
import { PopularItems } from '~/sections/PopularItems'
import { FeaturedRestaurants } from '~/sections/Featured'
import { CTA } from '~/sections/CTA'
import { SearchByFood } from '~/sections/SearchByFood'
import Install from '~/sections/Install'
import { Footer } from '~/components/Footer'

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
      <div className="lg:block">
        <Header />
        <Hero />
        <Deals />
        <HowItWorks />
        <PopularItems />
        <FeaturedRestaurants />
        <SearchByFood />
        <Install />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
