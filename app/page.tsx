import { CallToAction } from "~/components/call-to-action"
import { CityHighlights } from "~/components/city-highlights"
import { FeaturedTours } from "~/components/featured-tours"
import { Gallery } from "~/components/gallery"
import { HeroCarousel } from "~/components/hero-carousel"
import { SearchDestinations } from "~/components/search-destinations"
import { Testimonials } from "~/components/testimonials-copy"

export default function Home() {
  return (
    <div className="border-grid border-b">
      <div className="container-wrapper">
        <div className="container py-8">
          <div className="grid gap-8 md:gap-16 lg:gap-24">
            <HeroCarousel />
            <SearchDestinations />
            <CityHighlights />
            <FeaturedTours />
            <Testimonials />
            <Gallery />
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  )
}
