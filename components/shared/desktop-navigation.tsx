"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { cn } from "~/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"

interface TravelItem {
  id: string
  title: string
  href: string
  description: string
}

const travelItems: TravelItem[] = [
  {
    id: "harbin",
    title: "เมืองฮาร์บิน",
    href: "/tours?type=travel&location=harbin",
    description:
      "สัมผัสเทศกาลน้ำแข็งที่ใหญ่ที่สุดในโลก ชมสถาปัตยกรรมรัสเซียโบราณ และลิ้มรสอาหารเหนือแท้ๆ ของจีน",
  },
  {
    id: "xian",
    title: "เมืองเซี่ยงไฮ้",
    href: "/tours?type=travel&location=xian",
    description:
      "เยือนมหานครทันสมัยริมแม่น้ำหวงผู่ ตื่นตากับตึกระฟ้า The Bund และสัมผัสวัฒนธรรมผสมผสานตะวันออก-ตะวันตก",
  },
  {
    id: "chengdu",
    title: "เมืองเฉิงตู",
    href: "/tours?type=travel&location=chengdu",
    description:
      "พบกับหมีแพนด้ายักษ์ในศูนย์อนุรักษ์ ลิ้มรสอาหารเสฉวนแท้ และสัมผัสวิถีชีวิตที่ผ่อนคลายของชาวเฉิงตู",
  },
  {
    id: "beijing",
    title: "เมืองปักกิ่ง",
    href: "/tours?type=travel&location=beijing",
    description:
      "สำรวจพระราชวังต้องห้าม เดินบนกำแพงเมืองจีน และสัมผัสประวัติศาสตร์อันยิ่งใหญ่ของจีนในเมืองหลวง",
  },
  {
    id: "guangzhou",
    title: "เมืองกว่างโจว",
    href: "/tours?type=travel&location=guangzhou",
    description:
      "เมืองท่าการค้าสำคัญพร้อมอาหารกวางตุ้งชื่อดัง ผสมผสานความทันสมัยกับวัฒนธรรมดั้งเดิมได้อย่างลงตัว",
  },
  {
    id: "chongqing",
    title: "เมืองฉงชิ่ง",
    href: "/tours?type=travel&location=chongqing",
    description:
      "สัมผัสมหานครบนภูเขาริมแม่น้ำแยงซี ลิ้มรสหม้อไฟฉงชิ่ง และชมวิวตึกระฟ้ายามค่ำคืนที่สวยงาม",
  },
]

export const DesktopNavigation = () => {
  const searchParams = useSearchParams()

  const type = searchParams.get("type") as "study" | "travel"

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "study" ? "text-primary" : "hover:text-primary"
            )}
          >
            <Link href="/tours?type=study">แพ็คเกจเรียนต่อ</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/tours?type=study" legacyBehavior passHref>
                  <NavigationMenuLink className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      แพ็คเกจทั้งหมด
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      ค้นพบประสบการณ์การเรียนรู้และการท่องเที่ยวในประเทศจีน
                      พร้อมแพ็คเกจที่ครอบคลุมทั้งที่พัก การเดินทาง
                      และกิจกรรมต่างๆ
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <ListItem
                title="แพ็คเกจเรียนต่อระยะสั้น"
                href="/tours?type=study&duration=short"
              >
                เรียนรู้ภาษาและวัฒนธรรมจีนผ่านหลักสูตรระยะสั้น 1-6 เดือน
                พร้อมที่พักและกิจกรรมครบครัน
              </ListItem>
              <ListItem
                title="แพ็คเกจท่องเที่ยวระยะยาว"
                href="/tours?type=study&duration=long"
              >
                หลักสูตรการศึกษาระยะยาว 1-4 ปี
                พร้อมโอกาสฝึกงานและเรียนรู้วิถีชีวิตในประเทศจีน
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "travel" ? "text-primary" : "hover:text-primary"
            )}
          >
            <Link href="/tours?type=travel">แพ็คเกจท่องเที่ยว</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {travelItems.map((item) => (
                <ListItem key={item.id} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"