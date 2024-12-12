"use client"

import * as React from "react"

import { cn } from "~/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import {
  TourSearch,
  TourSearchControls,
  TourSearchHeader,
} from "~/components/shared/tour-search"
import { TourCard } from "~/components/tours/tour-card"
import { TourFilters } from "~/components/tours/tour-filters"
import { TourHero } from "~/components/tours/tour-hero"

const tours = [
  {
    id: "1",
    type: "study",
    tourCode: "ADWINTER2024",
    title: "เรียนจีน เที่ยวหิมะเมืองหนาว",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    image: "/images/tours/ADWINTER2024.webp",
    duration: "27 days",
    prices: {
      default: 55900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "2",
    type: "study",
    tourCode: "ADSPRING2W2025",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    image: "/images/tours/ADSPRING2W2025.png",
    duration: "14 days",
    prices: {
      default: 46900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "3",
    type: "study",
    tourCode: "ADSTUDYMAR2W2025",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    image: "/images/tours/ADSTUDYMAR2W2025.png",
    duration: "14 days",
    prices: {
      default: 39900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "4",
    type: "study",
    tourCode: "ADSPRING3W2025",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    image: "/images/tours/ADSTUDYMAR3W2025.png",
    duration: "21 days",
    prices: {
      default: 43900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "5",
    type: "study",
    tourCode: "ADSTUDYMAR3W2025",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    image: "/images/tours/ADSTUDYMAR3W2025.png",
    duration: "21 days",
    prices: {
      default: 43900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "6",
    type: "study",
    tourCode: "ADSTUDYMAR1M2025",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    image: "/images/tours/ADSTUDYMAR1M2025.png",
    duration: "30 days",
    prices: {
      default: 49900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "7",
    type: "study",
    tourCode: "ADSTUDYMAR2M2025",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    image: "/images/tours/ADSTUDYMAR2M2025.png",
    duration: "60 days",
    prices: {
      default: 59900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "8",
    type: "study",
    tourCode: "ADSTUDYMAR3M2025",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    image: "/images/tours/ADSTUDYMAR3M2025.png",
    duration: "90 days",
    prices: {
      default: 79900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "9",
    type: "study",
    tourCode: "ADSUMMER2025",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    image: "/images/tours/ADSUMMER2025.png",
    duration: "27 days",
    prices: {
      default: 53900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "10",
    type: "study",
    tourCode: "ADWINTER2025",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    image: "/images/tours/ADWINTER2025.webp",
    duration: "27 days",
    prices: {
      default: 55900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "11",
    type: "study",
    tourCode: "ADSTUDYMAR2W2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDYMAR2W2025.png",
    duration: "14 days",
    prices: {
      shared: 39900,
      single: 41900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "12",
    type: "study",
    tourCode: "ADSTUDYMAR3W2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDYMAR3W2025.png",
    duration: "21 days",
    prices: {
      shared: 41900,
      single: 45900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "13",
    type: "study",
    tourCode: "ADSTUDYMAR1M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDYMAR1M2025.png",
    duration: "30 days",
    prices: {
      shared: 47900,
      single: 50900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "14",
    type: "study",
    tourCode: "ADSTUDYMAR2M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDYMAR2M2025.png",
    duration: "60 days",
    prices: {
      shared: 62900,
      single: 65900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "15",
    type: "study",
    tourCode: "ADSTUDYMAR3M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDYMAR3M2025.png",
    duration: "90 days",
    prices: {
      shared: 79900,
      single: 89900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "16",
    type: "study",
    tourCode: "ADSTUDY1YNORMAL",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDY1YNORMAL.png",
    duration: "1 year",
    prices: {
      default: 149900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "17",
    type: "study",
    tourCode: "ADSTUDY1YHIT",
    title: "เรียนจีนระยะยาว",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDY1YHIT.png",
    duration: "1 year",
    prices: {
      default: 179900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "18",
    type: "study",
    tourCode: "ADSTUDY1TNORMAL",
    title: "เรียนภาษาจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDY1TNORMAL.png",
    duration: "1 term",
    prices: {
      shared: 89900,
      single: 109900,
    },
    location: "เมืองฮาร์บิน",
  },
  {
    id: "19",
    type: "study",
    tourCode: "ADSTUDY1THIT",
    title: "เรียนภาษาจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    image: "/images/tours/ADSTUDY1THIT.png",
    duration: "1 term",
    prices: {
      default: 99900,
    },
    location: "เมืองฮาร์บิน",
  },
]

export default function ToursPage() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)

  const itemsPerPage = viewMode === "grid" ? 9 : 5

  const filteredTours = tours.filter((tour) => {
    // Text search
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  // Reset to first page when view mode, search, or filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [viewMode, searchQuery])

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTours = filteredTours.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <article className="container mx-auto p-4">
      <React.Suspense>
        <TourHero />
      </React.Suspense>

      <TourSearch>
        <TourSearchHeader totalCount={filteredTours.length} />
        <TourSearchControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </TourSearch>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Desktop Filters */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-24 rounded-lg border bg-white p-6">
            <h2 className="mb-6 text-sm font-semibold">
              เลือกการแสดงผลแพ็คเกจ
            </h2>
            <TourFilters />
          </div>
        </aside>

        {/* Tour Grid */}
        <div className="flex-1">
          <div
            className={cn(
              "grid gap-2",
              viewMode === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            )}
          >
            {paginatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 text-center md:grid-cols-2">
              <div className="col-span-2 col-start-1 row-span-1 row-start-1 hidden text-sm text-muted-foreground md:col-span-1 md:block">
                แสดงผลลัพธ์ {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, filteredTours.length)}{" "}
                จากทั้งหมด {filteredTours.length} รายการ
              </div>
              <div className="col-span-1 col-start-1 row-span-1 row-start-1 text-sm text-muted-foreground md:hidden">
                {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, filteredTours.length)} จาก{" "}
                {filteredTours.length}
              </div>
              <Pagination className="col-span-2 col-start-1 row-span-1 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
                <PaginationContent>
                  <PaginationItem>
                    {currentPage === 1 ? (
                      <PaginationPrevious
                        href="#"
                        className="pointer-events-none opacity-50"
                      />
                    ) : (
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }}
                      />
                    )}
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
                      // Show first page, last page, current page, and pages around current
                      const shouldShowPage =
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(currentPage - page) <= 1

                      if (!shouldShowPage) {
                        // Show ellipsis if there's a gap
                        if (page === 2 || page === totalPages - 1) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )
                        }
                        return null
                      }

                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(page)
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    }
                  )}

                  <PaginationItem>
                    {currentPage === totalPages ? (
                      <PaginationNext
                        href="#"
                        className="pointer-events-none opacity-50"
                      />
                    ) : (
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }}
                      />
                    )}
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
