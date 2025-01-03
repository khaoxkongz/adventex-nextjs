import Image from "next/image"
import { Clock, DollarSign } from "lucide-react"

import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { SparklesText } from "~/components/magicui/sparkles-text"
import { tours } from "~/data/tours"

export const FeaturedTours = () => {
  return (
    <section>
      <div className="mb-8 grid gap-8 text-center">
        <SparklesText
          text="แพ็คเกจทัวร์ท่องเที่ยวยอดฮิต"
          className="text-4xl font-medium leading-none md:text-6xl"
        />
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          สำหรับนักท่องเที่ยวที่ต้องการสัมผัสวัฒนธรรมและประสบการณ์ที่หลากหลาย
          จีนมีเมืองที่มีความหลากหลายทางวัฒนธรรมและสถาปัตยกรรม
          ที่จะทำให้คุณมีประสบการณ์ที่ยิ่งใหญ่และทรงพลัง
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tours.splice(0, 3).map((tour) => (
          <Card
            key={tour.id}
            className="group relative flex flex-col overflow-hidden rounded shadow-none transition-shadow hover:shadow-lg"
          >
            <CardHeader className="relative shrink-0 p-0">
              <Image
                src={tour.image}
                alt={tour.title}
                width={200}
                height={200}
                className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute right-4 top-4">ยอดฮิต</Badge>
            </CardHeader>

            <CardContent className="flex-1 space-y-4 p-6">
              <CardTitle className="text-xl">{tour.title}</CardTitle>
              <Separator />
              <CardDescription className="line-clamp-4 overflow-hidden text-ellipsis">
                {tour.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="mt-auto grid h-12 w-full grid-cols-2 p-0">
              <div className="flex size-full items-center justify-center bg-secondary">
                <Clock className="mr-1 size-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex size-full items-center justify-center bg-primary text-white">
                <DollarSign className="mr-1 size-4" />
                <span>{tour.prices.default} บาท</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
