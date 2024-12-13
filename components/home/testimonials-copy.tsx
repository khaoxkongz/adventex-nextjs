import Image from "next/image"

import { cn } from "~/lib/utils"
import { Marquee } from "~/components/magicui/marquee"
import { SparklesText } from "~/components/magicui/sparkles-text"

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahc",
    body: "ทริปที่ Adventex จัดให้ที่เชียงใหม่เยี่ยมมาก! ได้เรียนรู้การทำอาหารไทย ไปวัดพระธาตุดอยสุเทพ และพักโรงแรมบูติกที่สวยงาม ประทับใจมากค่ะ",
    img: "https://avatar.vercel.sh/sarahc",
  },
  {
    name: "David Wilson",
    username: "@davidw",
    body: "ประทับใจกับทริปดำน้ำที่เกาะเต่ามาก น้ำทะเลใสมาก เห็นปะการังสวยๆ และปลาหลากสี ไกด์ดูแลดีมาก แนะนำเลยครับ",
    img: "https://avatar.vercel.sh/davidw",
  },
  {
    name: "Emma Thompson",
    username: "@emmat",
    body: "เที่ยวภูเก็ตกับ Adventex คุ้มค่ามาก! ได้ไปเกาะพีพี ทะเลสวย อาหารอร่อย ที่พักสะดวกสบาย การบริการประทับใจ",
    img: "https://avatar.vercel.sh/emmat",
  },
  {
    name: "Michael Lee",
    username: "@michaell",
    body: "ทริปเที่ยวอยุธยาสุดประทับใจ ได้เรียนรู้ประวัติศาสตร์ ชมวัดโบราณ และลองทานอาหารไทยโบราณ ไกด์มีความรู้มาก",
    img: "https://avatar.vercel.sh/michaell",
  },
  {
    name: "Lisa Wang",
    username: "@lisaw",
    body: "ประทับใจทริปเขาใหญ่มาก ได้ดูสัตว์ป่า เดินป่า พักรีสอร์ทหรู อากาศดี วิวสวย อาหารอร่อย แนะนำเลยค่ะ",
    img: "https://avatar.vercel.sh/lisaw",
  },
  {
    name: "Tom Anderson",
    username: "@toma",
    body: "ทริปล่องแก่งที่เชียงรายสนุกมาก! ตื่นเต้น ท้าทาย แต่ปลอดภัย ทีมงานมืออาชีพ วิวแม่น้ำกกสวยมาก คุ้มค่าที่สุด",
    img: "https://avatar.vercel.sh/toma",
  },
  {
    name: "Jessica Kim",
    username: "@jessicak",
    body: "ทริปดำน้ำที่หมู่เกาะสิมิลันสุดยอดมาก น้ำทะเลใสเหมือนกระจก ปะการังสวยมาก เห็นเต่าทะเลด้วย ประทับใจสุดๆ",
    img: "https://avatar.vercel.sh/jessicak",
  },
  {
    name: "Ryan Zhang",
    username: "@ryanz",
    body: "เที่ยวเชียงรายกับ Adventex ได้ไปวัดร่องขุ่น ไร่ชา และภูชี้ฟ้า วิวสวยมาก อากาศดี อาหารเหนืออร่อย ประทับใจ",
    img: "https://avatar.vercel.sh/ryanz",
  },
  {
    name: "Sophie Martin",
    username: "@sophiem",
    body: "ทริปเกาะสมุยดีมาก ได้ไปเกาะนางยวน ดำน้ำ ทานซีฟู้ดสด พักรีสอร์ทริมหาด บริการประทับใจมากค่ะ",
    img: "https://avatar.vercel.sh/sophiem",
  },
  {
    name: "James Park",
    username: "@jamesp",
    body: "ประทับใจทริปกาญจนบุรี ได้ล่องแพ เที่ยวน้ำตก ขี่ช้าง พักแพริมน้ำ บรรยากาศดีมาก ทีมงานใส่ใจทุกรายละเอียด",
    img: "https://avatar.vercel.sh/jamesp",
  },
  {
    name: "Anna Garcia",
    username: "@annag",
    body: "ทริปหัวหินสุดคุ้ม ได้เที่ยวตลาดน้ำ สวนน้ำ ขี่ม้าชายหาด พักโรงแรมวิวทะเล อาหารทะเลสดอร่อย แนะนำ",
    img: "https://avatar.vercel.sh/annag",
  },
  {
    name: "Kevin Liu",
    username: "@kevinl",
    body: "เที่ยวเกาะช้างกับ Adventex ประทับใจมาก ดำน้ำดูปะการัง เล่นน้ำตก พักบังกะโลริมทะเล บริการดีเยี่ยม",
    img: "https://avatar.vercel.sh/kevinl",
  },
]

const firstRow = reviews.slice(0, 6)
const secondRow = reviews.slice(6)

interface ReviewCardProps {
  img: string
  name: string
  username: string
  body: string
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

const Testimonials = () => {
  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <span className="text-4xl font-bold text-primary">
          สิ่งที่พวกเขาพูด
        </span>
        <SparklesText
          text="ลูกค้าของเรา พูดถึงเรายังไงบ้าง"
          className="text-pretty leading-tight"
        />
      </div>
      <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  )
}

export { Testimonials }
