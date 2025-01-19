"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { cn } from "~/lib/utils"
import { AspectRatio } from "~/components/ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "~/components/ui/carousel"
import { ShineBorder } from "~/components/magicui/shine-border"
import adventexCoverHero from "~/assets/images/adventex-hero-cover.png"

const slides = [
  {
    id: 1,
    image: adventexCoverHero,
    alt: "Special promotion banner with worldwide landmarks including Eiffel Tower, Statue of Liberty, and airplane on red background",
  },
]

export const HeroCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

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
      <ShineBorder
        className="relative z-10 size-full overflow-hidden rounded-lg"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
          className="relative size-full overflow-hidden rounded-lg"
        >
          <CarouselContent>
            {slides.map(({ image, alt, id }) => (
              <CarouselItem key={id}>
                <AspectRatio ratio={3 / 1} className="size-full overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="size-full object-fill"
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
                className={cn("h-2 rounded-full transition-all", current === i ? "w-8 bg-white" : "w-2 bg-white/50")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </ShineBorder>
    </section>
  )
}
