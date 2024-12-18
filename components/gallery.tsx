import * as React from "react"
import Image from "next/image"

import { BlurFade } from "~/components/magicui/blur-fade"

export const Gallery = () => {
  const images = Array.from({ length: 9 }, (_, i) => ({
    url: `https://picsum.photos/seed/${i + 1}/${i % 2 === 0 ? "800/600" : "600/800"}`,
    isLandscape: i % 2 === 0,
  }))

  return (
    <section className="space-y-4 md:space-y-8 lg:space-y-12">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">แกลลอรี่</h2>
        <p className="mx-auto max-w-lg text-lg text-muted-foreground">
          รวมภาพความประทับใจจากการเดินทางของลูกค้าที่ไว้วางใจให้เราดูแล
          ทุกช่วงเวลาแห่งความสุขที่เราได้มีส่วนร่วมสร้างขึ้น
        </p>
      </div>

      <div className="columns-2 gap-4 sm:columns-3">
        {images.map(({ url, isLandscape }, idx) => (
          <BlurFade key={url} delay={0.25 + idx * 0.05} inView>
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
