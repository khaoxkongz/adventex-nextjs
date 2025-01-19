"use client"

import { useSearchParams } from "next/navigation"

import {
  PageHero,
  PageHeroContent,
  PageHeroDescription,
  PageHeroFooter,
  PageHeroItem,
  PageHeroText,
  PageHeroTitle,
} from "~/components/page-hero"

export const TourHero = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") as "study" | "travel"

  return (
    <PageHero>
      <PageHeroContent>
        <PageHeroItem>
          <PageHeroText>
            <PageHeroTitle>{type === "study" ? "แพ็คเกจเรียน" : "แพ็คเกจท่องเที่ยว"}</PageHeroTitle>
            <PageHeroDescription>
              {type === "study"
                ? "ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร"
                : "ค้นพบประสบการณ์การท่องเที่ยวที่น่าจดจำกับแพ็คเกจทัวร์ที่หลากหลายของเรา เราคัดสรรสถานที่ท่องเที่ยวยอดนิยมและกิจกรรมที่น่าสนใจมาให้คุณได้เลือกสรร"}
            </PageHeroDescription>
          </PageHeroText>
        </PageHeroItem>
      </PageHeroContent>
      <PageHeroFooter />
    </PageHero>
  )
}
