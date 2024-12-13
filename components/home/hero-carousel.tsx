"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { cn } from "~/lib/utils"
import { AspectRatio } from "~/components/ui/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel"
import tourSingleHero from "~/assets/images/tour-single-hero.png"
import tourThxHero from "~/assets/images/tour-thx-hero.png"
import tourTravelHero from "~/assets/images/tour-travel-hero.png"

const slides = [
  {
    id: 1,
    image: tourSingleHero,
    alt: "Special promotion banner with worldwide landmarks including Eiffel Tower, Statue of Liberty, and airplane on red background",
  },
  {
    id: 2,
    image: tourTravelHero,
    alt: "Thank you banner showcasing collage of happy travelers and tour groups at various destinations",
  },
  {
    id: 3,
    image: tourThxHero,
    alt: "Travel promotion banner featuring young diverse travelers with 0% installment payment offer",
  },
  {
    id: 4,
    image: tourSingleHero,
    alt: "Special promotion banner with worldwide landmarks including Eiffel Tower, Statue of Liberty, and airplane on red background",
  },
  {
    id: 5,
    image: tourTravelHero,
    alt: "Thank you banner showcasing collage of happy travelers and tour groups at various destinations",
  },
  {
    id: 6,
    image: tourThxHero,
    alt: "Travel promotion banner featuring young diverse travelers with 0% installment payment offer",
  },
]

export const HeroCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const handleScrollTo = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
        className="overflow-hidden rounded-lg"
      >
        <CarouselContent>
          {slides.map(({ image, alt, id }) => (
            <CarouselItem key={id}>
              <AspectRatio ratio={3 / 1} className="overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                  loading={id === 1 ? "eager" : "lazy"}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 left-1/2 flex w-32 -translate-x-1/2 justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleScrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                current === i ? "w-8 bg-white" : "w-2 bg-white/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
