import { MainNavItem, TourNavItem } from "~/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  tourNav: TourNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { href: "/", title: "หน้าแรก" },
    { href: "/tours?type=study", title: "แพ็คเกจเรียนต่อ" },
    { href: "/tours?type=travel", title: "แพ็คเกจท่องเที่ยว" },
    { href: "/blogs", title: "บทความ" },
    { href: "/about", title: "เกี่ยวกับเรา" },
    { href: "/contact", title: "ติดต่อเรา" },
  ],
  tourNav: [
    {
      title: "แพ็คเกจเรียนต่อ",
      items: [
        {
          title: "แพ็คเกจเรียนต่อระยะสั้น",
          href: "/tours?type=study&duration=short",
          items: [],
        },
        {
          title: "แพ็คเกจเรียนต่อระยะยาว",
          href: "/tours?type=study&duration=long",
          items: [],
        },
      ],
    },
    {
      title: "แพ็คเกจท่องเที่ยว",
      items: [
        {
          title: "เมืองเซี่ยงไฮ้",
          href: "/tours?type=travel&location=xian",
          items: [],
        },
        {
          title: "เมืองเฉิงตู",
          href: "/tours?type=travel&location=chengdu",
          items: [],
        },
        {
          title: "เมืองปักกิ่ง",
          href: "/tours?type=travel&location=beijing",
          items: [],
        },
        {
          title: "เมืองกว่างโจว",
          href: "/tours?type=travel&location=guangzhou",
          items: [],
        },
        {
          title: "เมืองฉงชิ่ง",
          href: "/tours?type=travel&location=chongqing",
          items: [],
        },
      ],
    },
    {
      title: "บทความ",
      items: [
        { title: "เรื่องราวการเดินทาง", href: "/blogs/travel", items: [] },
        { title: "เคล็ดลับการเรียน", href: "/blogs/study", items: [] },
        { title: "วัฒนธรรมจีน", href: "/blogs/culture", items: [] },
        { title: "ข่าวสารและกิจกรรม", href: "/blogs/news", items: [] },
      ],
    },
    {
      title: "เกี่ยวกับเรา",
      items: [
        { title: "ข้อกำหนดและเงื่อนไข", href: "/about/terms", items: [] },
        { title: "นโยบายความเป็นส่วนตัว", href: "/about/privacy", items: [] },
        { title: "การจัดการ Cookies", href: "/about/cookies", items: [] },
      ],
    },
  ],
}
