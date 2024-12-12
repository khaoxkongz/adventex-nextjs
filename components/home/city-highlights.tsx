import { SparklesText } from "~/components/magicui/sparkles-text"
import {
  BentoCard,
  BentoCardContent,
  BentoCardFooter,
  BentoCardImage,
  BentoCardLink,
  BentoCardTitle,
  BentoGrid,
} from "~/components/shared/bento-grid"

const cities = [
  {
    id: "item-1",
    name: "HARBIN",
    className: "col-span-6 col-start-1 row-span-3 row-start-1 lg:row-span-8",
    image: "/images/city/harbin.jpg",
    href: "/destinations/harbin",
  },
  {
    id: "item-2",
    name: "SHANGHAI",
    className:
      "col-span-3 col-start-1 row-span-3 row-start-4 lg:row-span-4 lg:row-start-9",
    image: "/images/city/shanghai.jpg",
    href: "/destinations/shanghai",
  },
  {
    id: "item-3",
    name: "CHENGDU",
    className:
      "col-span-3 col-start-4 row-span-3 row-start-4 lg:row-span-4 lg:row-start-9",
    image: "/images/city/chengdu.jpg",
    href: "/destinations/chengdu",
  },
  {
    id: "item-4",
    name: "BEIJING",
    className:
      "col-span-6 col-start-1 row-span-3 row-start-7 md:col-span-3 md:row-span-6 lg:col-start-7 lg:row-span-12 lg:row-start-1",
    image: "/images/city/beijing.jpg",
    href: "/destinations/beijing",
  },
  {
    id: "item-5",
    name: "GUANGZHOU",
    className:
      "col-span-3 col-start-1 row-span-3 row-start-10 md:col-start-4 md:row-start-7 lg:col-span-3 lg:col-start-10 lg:row-span-6 lg:row-start-1",
    image: "/images/city/guangzhou.jpg",
    href: "/destinations/guangzhou",
  },
  {
    id: "item-6",
    name: "CHONGQING",
    className:
      "col-span-3 col-start-4 row-span-3 row-start-10 lg:col-span-3 lg:col-start-10 lg:row-span-6 lg:row-start-7",
    image: "/images/city/chongqing.jpg",
    href: "/destinations/chongqing",
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

      <BentoGrid>
        {cities.map((city) => (
          <BentoCard key={city.id} className={city.className}>
            <BentoCardLink href={city.href}>
              <BentoCardContent>
                <BentoCardImage src={city.image} alt={city.name} />
                <BentoCardFooter>
                  <BentoCardTitle>{city.name}</BentoCardTitle>
                </BentoCardFooter>
              </BentoCardContent>
            </BentoCardLink>
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  )
}