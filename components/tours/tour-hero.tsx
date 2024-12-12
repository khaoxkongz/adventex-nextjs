"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"

import {
  PageHero,
  PageHeroContent,
  PageHeroDescription,
  PageHeroFooter,
  PageHeroImage,
  PageHeroItem,
  PageHeroText,
  PageHeroTitle,
} from "~/components/shared/page-hero"
import studyTourHero from "~/assets/images/study-tour-hero.png"
import travelTourHero from "~/assets/images/travel-tour-hero.png"

export const TourHero = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") as "study" | "travel"

  return (
    <PageHero>
      <PageHeroContent>
        <PageHeroItem>
          <PageHeroImage
            src={type === "study" ? studyTourHero : travelTourHero}
            alt={type === "study" ? "แพ็คเกจเรียนต่อ" : "แพ็คเกจท่องเที่ยว"}
            width={1200}
            height={600}
          />
          <PageHeroText>
            <PageHeroTitle>
              {type === "study" ? "แพ็คเกจเรียนต่อ" : "แพ็คเกจท่องเที่ยว"}
            </PageHeroTitle>
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
