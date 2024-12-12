import * as React from "react"
import Image from "next/image"
import { Clock, Star, Users } from "lucide-react"

import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { SparklesText } from "~/components/magicui/sparkles-text"

const tours = [
  {
    id: 1,
    title: "ชื่อแพ็คเกจทัวร์",
    description: "รายละเอียดเพิ่มเติม",
    image: "/images/tours/ADWINTER2024.webp",
    price: 2499,
    rating: 4.8,
    duration: "10 days",
    groupSize: "12 max",
    featured: true,
  },
  {
    id: 2,
    title: "ชื่อแพ็คเกจทัวร์",
    description: "รายละเอียดเพิ่มเติม",
    image: "/images/tours/ADWINTER2025.webp",
    price: 3299,
    rating: 4.9,
    duration: "12 days",
    groupSize: "10 max",
    featured: true,
  },
  {
    id: 3,
    title: "ชื่อแพ็คเกจทัวร์",
    description: "รายละเอียดเพิ่มเติม",
    image: "/images/tours/ADSUMMER2025.png",
    price: 1999,
    rating: 4.7,
    duration: "8 days",
    groupSize: "15 max",
    featured: true,
  },
]

export const FeaturedTours = () => {
  return (
    <section>
      <div className="mb-8 grid gap-8 text-center">
        <SparklesText
          text="แพ็คเกจทัวร์ท่องเที่ยวยอดฮิต"
          className="text-6xl font-medium leading-none"
        />
        <p className="mx-auto max-w-2xl text-muted-foreground">
          สำหรับนักท่องเที่ยวที่ต้องการสัมผัสวัฒนธรรมและประสบการณ์ที่หลากหลาย
          จีนมีเมืองที่มีความหลากหลายทางวัฒนธรรมและสถาปัตยกรรม
          ที่จะทำให้คุณมีประสบการณ์ที่ยิ่งใหญ่และทรงพลัง
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className="group overflow-hidden shadow-none transition-shadow hover:shadow-lg"
          >
            <div className="relative">
              <Image
                src={tour.image}
                alt={tour.title}
                width={600}
                height={400}
                className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute right-4 top-4">ยอดฮิต</Badge>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{tour.title}</CardTitle>
              <CardDescription>{tour.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center">
                  <Star className="mr-1 size-4 text-yellow-400" />
                  <span>{tour.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 size-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 size-4" />
                  <span>{tour.groupSize}</span>
                </div>
              </div>
              <p className="text-xl font-bold sm:text-2xl">
                ฿{tour.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /คน
                </span>
              </p>
            </CardContent>

            <CardFooter>
              <Button className="w-full">จองแพ็คเกจ</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
