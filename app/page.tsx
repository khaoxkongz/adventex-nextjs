import { CallToAction } from "~/components/home/call-to-action"
import { CityHighlights } from "~/components/home/city-highlights"
import { FeaturedTours } from "~/components/home/featured-tours"
import { Gallery } from "~/components/home/gallery"
import { HeroCarousel } from "~/components/home/hero-carousel"
import { SearchDestinations } from "~/components/home/search-destinations"
import { Testimonials } from "~/components/home/testimonials-copy"

export default function Home() {
  return (
    <article className="container mx-auto grid gap-8 px-4 py-8 md:gap-16 lg:gap-24">
      <HeroCarousel />
      <SearchDestinations />
      <CityHighlights />
      <FeaturedTours />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </article>
  )
}
