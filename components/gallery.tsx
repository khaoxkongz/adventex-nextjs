import Image from "next/image"

import { BlurFade } from "~/components/magicui/blur-fade"
import { SparklesText } from "~/components/magicui/sparkles-text"
import first from "~/assets/images/1.png"
import second from "~/assets/images/2.png"
import third from "~/assets/images/3.png"
import forth from "~/assets/images/4.png"
import fifth from "~/assets/images/5.png"
import six from "~/assets/images/6.png"
import seven from "~/assets/images/7.png"
import eight from "~/assets/images/8.png"
import nine from "~/assets/images/9.png"

const images = [
  {
    url: first,
    isLandscape: false,
  },
  {
    url: second,
    isLandscape: true,
  },
  {
    url: third,
    isLandscape: false,
  },
  {
    url: forth,
    isLandscape: true,
  },
  {
    url: fifth,
    isLandscape: false,
  },
  {
    url: six,
    isLandscape: true,
  },
  {
    url: seven,
    isLandscape: false,
  },
  {
    url: eight,
    isLandscape: true,
  },
  {
    url: nine,
    isLandscape: false,
  },
]

export const Gallery = () => {
  return (
    <section className="space-y-4 xl:space-y-8 2xl:space-y-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center xl:gap-6 2xl:gap-4">
        <SparklesText text="แกลลอรี่" className="text-4xl font-normal leading-none xl:text-6xl" />
        <p className="max-w-prose text-lg text-muted-foreground xl:text-xl">
          รวมภาพความประทับใจจากการเดินทางของลูกค้าที่ไว้วางใจให้เราดูแล
          ทุกช่วงเวลาแห่งความสุขที่เราได้มีส่วนร่วมสร้างขึ้น
        </p>
      </div>
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map(({ url, isLandscape }, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={url}
              height={isLandscape ? 600 : 800}
              width={isLandscape ? 800 : 600}
              alt={`Travel moment ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
