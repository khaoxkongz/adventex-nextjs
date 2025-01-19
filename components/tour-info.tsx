"use client"

import { StaticImageData } from "next/image"
import { Activity, MapPin } from "lucide-react"

import { Button } from "~/components/ui/button"

interface TourInfoProps {
  tourData: {
    id: string
    title: string
    description: string
    defaultPrice: number
    location: string
    images: (string | StaticImageData)[]
    highlights: string[]
    about: {
      title: string
      items: string[]
    }[]
    itinerary: {
      week: string
      title: string
      description: string
      activities: string[]
    }[]
  }
}

export const TourInfo = ({ tourData }: TourInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span>{tourData.location}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{tourData.title}</h1>
      </div>

      <div className="prose max-w-prose leading-7">
        <p>{tourData.description}</p>
      </div>

      <div className="rounded-lg border border-primary p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">ราคาเข้าร่วมโครงการ</p>
            <p className="text-3xl font-bold">{tourData.defaultPrice}.-</p>
          </div>
          <Button className="p-8 text-2xl">สมัครเรียน</Button>
        </div>
        <p className="text-sm text-muted-foreground">ราคารวมทุกอย่าง</p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-tight">ราคาค่าโครงการรวม</h3>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {tourData.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Activity className="size-4 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
