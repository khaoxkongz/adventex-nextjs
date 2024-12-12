import * as React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { BentoCard, BentoGrid } from "~/components/magicui/bento-grid"
import { SparklesText } from "~/components/magicui/sparkles-text"

interface Bento {
  id: string
  name: string
  className: string
  background: React.ReactNode
  Icon: unknown
  description: string
  href: string
  cta: string
}

const bentos: Bento[] = [
  {
    id: "1",
    name: "HARBIN",
    className: "col-span-6 col-start-1 row-span-3 row-start-1 lg:row-span-8",
    background: (
      <Image
        src="/images/city/harbin.jpg"
        alt="HARBIN"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/destinations/harbin",
    cta: "Learn more",
  },
  {
    id: "2",
    name: "HARBIN",
    className:
      "col-span-3 col-start-1 row-span-3 row-start-4 lg:row-span-4 lg:row-start-9",
    background: (
      <Image
        src="/images/city/shanghai.jpg"
        alt="SHANGHAI"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/tours?location=shanghai",
    cta: "Learn more",
  },
  {
    id: "3",
    name: "CHENGDU",
    className:
      "col-span-3 col-start-4 row-span-3 row-start-4 lg:row-span-4 lg:row-start-9",
    background: (
      <Image
        src="/images/city/chengdu.jpg"
        alt="CHENGDU"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/tours?location=chengdu",
    cta: "Learn more",
  },
  {
    id: "4",
    name: "BEIJING",
    className:
      "col-span-6 col-start-1 row-span-3 row-start-7 md:col-span-3 md:row-span-6 lg:col-start-7 lg:row-span-12 lg:row-start-1",
    background: (
      <Image
        src="/images/city/beijing.jpg"
        alt="BEIJING"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/tours?location=beijing",
    cta: "Learn more",
  },
  {
    id: "5",
    name: "GUANGZHOU",
    className:
      "col-span-3 col-start-1 row-span-3 row-start-10 md:col-start-4 md:row-start-7 lg:col-span-3 lg:col-start-10 lg:row-span-6 lg:row-start-1",
    background: (
      <Image
        src="/images/city/guangzhou.jpg"
        alt="GUANGZHOU"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/tours?location=guangzhou",
    cta: "Learn more",
  },
  {
    id: "6",
    name: "CHONGQING",
    className:
      "col-span-3 col-start-4 row-span-3 row-start-10 lg:col-span-3 lg:col-start-10 lg:row-span-6 lg:row-start-7",
    background: (
      <Image
        src="/images/city/chongqing.jpg"
        alt="CHONGQING"
        width={400}
        height={400}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    ),
    Icon: MapPin,
    description: "",
    href: "/tours?location=chongqing",
    cta: "Learn more",
  },
]

export const CityHighlights = () => {
  return (
    <section>
      <div className="mb-8 grid gap-8 text-center">
        <SparklesText
          text="เมืองยอดนิยม"
          className="text-6xl font-medium leading-none"
        />
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          สำหรับนักท่องเที่ยวที่ต้องการสัมผัสวัฒนธรรมและประสบการณ์ที่หลากหลาย
          จีนมีเมืองที่มีความหลากหลายทางวัฒนธรรมและสถาปัตยกรรม
          ที่จะทำให้คุณมีประสบการณ์ที่ยิ่งใหญ่และทรงพลัง
        </p>
      </div>

      <BentoGrid className="grid grid-cols-6 grid-rows-12 gap-2 lg:grid-cols-12 lg:grid-rows-12">
        {bentos.map((bento) => (
          <BentoCard key={bento.id} {...bento} />
        ))}
      </BentoGrid>
    </section>
  )
}
