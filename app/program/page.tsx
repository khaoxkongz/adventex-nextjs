"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CalendarDays, Filter, Globe2, GraduationCap, LayoutGrid, List, MapPin } from "lucide-react"

import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Label } from "~/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { Slider } from "~/components/ui/slider"

export type LayoutType = "grid" | "list"

export type ProgramType = "short" | "long"

export type Season = "spring" | "summer" | "autumn" | "winter"

export interface Program {
  id: string
  title: string
  period: string
  startDate: string
  endDate: string
  price: number
  image: string
  highlights: string[]
  type: ProgramType
  university: "HIT" | "HNU"
  season: Season
}

export interface FilterState {
  priceRange: {
    min: number
    max: number
  }
  type: ProgramType | "all"
  university: string
  season: Season | "all"
}

export default function ProgramCards() {
  const [layout, setLayout] = useState<LayoutType>("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [programs] = useState<Program[]>([
    {
      id: "1",
      title: "แคมป์เรียนภาษาจีน ประจำฤดูหนาว",
      period: "4 สัปดาห์",
      startDate: "2024-12-21",
      endDate: "2025-01-18",
      price: 55900,
      image: "/images/dev/ADWINTER3W2024.webp",
      type: "short",
      university: "HIT",
      season: "winter",
      highlights: [
        "เรียนภาษาจีนกับมหาวิทยาลัย Top 10",
        "สัมผัสเทศกาลน้ำแข็งและหิมะนานาชาติ",
        "ท่องเที่ยว 10 สถานที่เด่นเมืองฮาร์บิน",
      ],
    },
    {
      id: "2",
      title: "แคมป์เรียนภาษาจีน ประจำฤดูใบไม้ร่วง",
      period: "2 สัปดาห์",
      startDate: "2024-10-12",
      endDate: "2024-10-26",
      price: 46900,
      image: "/images/dev/ADWINTER3W2024.webp",
      type: "short",
      university: "HNU",
      season: "autumn",
      highlights: ["มหาวิทยาลัยใหญ่ในโลกตะวันออก", "เปิดประสบการณ์ที่ประเทศจีน", "เที่ยวสถานที่สำคัญเมืองฮาร์บิน"],
    },
    {
      id: "3",
      title: "เรียนภาษาจีน 2 สัปดาห์ HIT",
      period: "2 สัปดาห์",
      startDate: "2025-01-15",
      endDate: "2025-01-29",
      price: 39990,
      image: "/images/dev/ADWINTER3W2024.webp",
      type: "long",
      university: "HIT",
      season: "spring",
      highlights: ["เรียนกับมหาวิทยาลัย Top 10 ของจีน", "ฝึกภาษาจีนครบ 4 ทักษะ", "รับประกาศนียบัตรจากมหาวิทยาลัย"],
    },
  ])

  const [filters, setFilters] = useState<FilterState>({
    priceRange: {
      min: 0,
      max: 100000,
    },
    type: "all",
    university: "all",
    season: "all",
  })

  const [filteredPrograms, setFilteredPrograms] = useState(programs)
  const [sortBy, setSortBy] = useState<"price" | "date">("price")

  const itemsPerPage = layout === "grid" ? 9 : 5
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredPrograms.length)
  const currentItems = filteredPrograms.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [layout])

  useEffect(() => {
    const sorted = [...filteredPrograms].sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price
      } else {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      }
    })
    setFilteredPrograms(sorted)
  }, [sortBy, programs, filters])

  const applyFilters = () => {
    const filtered = programs.filter((program) => {
      if (program.price < filters.priceRange.min || program.price > filters.priceRange.max) return false
      if (filters.type !== "all" && program.type !== filters.type) return false
      if (filters.university !== "all" && program.university !== filters.university) return false
      if (filters.season !== "all" && program.season !== filters.season) return false
      return true
    })
    setFilteredPrograms(filtered)
    setCurrentPage(1)
  }

  const getGridClass = () => {
    return layout === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
  }

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return `${start.toLocaleDateString("th-TH", options)} - ${end.toLocaleDateString("th-TH", options)}`
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ค้นหาแพ็คเกจ</h1>
          <p className="text-muted-foreground">พบทั้งหมด {filteredPrograms.length} ทัวร์</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
            <Select value={sortBy} onValueChange={(value: "price" | "date") => setSortBy(value)}>
              <SelectTrigger className="sm:w-[140px]">
                <SelectValue placeholder="เรียงตาม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">ราคา</SelectItem>
                <SelectItem value="date">ช่วงเวลา</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="ml-auto flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>ตัวกรอง</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">ช่วงราคา</h3>
                    <div className="pt-4">
                      <Slider
                        min={0}
                        max={100000}
                        step={1000}
                        value={[filters.priceRange.min, filters.priceRange.max]}
                        onValueChange={([min, max]) =>
                          setFilters((prev) => ({
                            ...prev,
                            priceRange: { min, max },
                          }))
                        }
                      />
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm">฿{filters.priceRange.min.toLocaleString()}</span>
                        <span className="text-sm">฿{filters.priceRange.max.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">ประเภทโปรแกรม</h3>
                    <Select
                      value={filters.type}
                      onValueChange={(value: any) => setFilters((prev) => ({ ...prev, type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกประเภท" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">ทั้งหมด</SelectItem>
                        <SelectItem value="short">เรียนระยะสั้น</SelectItem>
                        <SelectItem value="long">เรียนระยะยาว</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">มหาวิทยาลัย</h3>
                    <Select
                      value={filters.university}
                      onValueChange={(value) => setFilters((prev) => ({ ...prev, university: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกมหาวิทยาลัย" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">ทั้งหมด</SelectItem>
                        <SelectItem value="HIT">HIT</SelectItem>
                        <SelectItem value="HNU">HNU</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">ฤดูกาล</h3>
                    <Select
                      value={filters.season}
                      onValueChange={(value: Season | "all") => setFilters((prev) => ({ ...prev, season: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกฤดูกาล" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">ทั้งหมด</SelectItem>
                        <SelectItem value="spring">ฤดูใบไม้ผลิ</SelectItem>
                        <SelectItem value="summer">ฤดูร้อน</SelectItem>
                        <SelectItem value="autumn">ฤดูใบไม้ร่วง</SelectItem>
                        <SelectItem value="winter">ฤดูหนาว</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <SheetFooter>
                  <Button onClick={applyFilters}>ยืนยันการกรอง</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setLayout("grid")}
              className={layout === "grid" ? "bg-primary text-primary-foreground" : ""}
            >
              <LayoutGrid className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setLayout("list")}
              className={layout === "list" ? "bg-primary text-primary-foreground" : ""}
            >
              <List className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          แสดงผลลัพธ์ {startIndex + 1} - {endIndex} จากทั้งหมด {filteredPrograms.length} รายการ
        </p>
      </div>

      <div className={`grid gap-6 ${getGridClass()}`}>
        {currentItems.map((program) => (
          <Card key={program.id} className={`flex ${layout === "list" ? "flex-row" : "flex-col"}`}>
            <div className={`relative ${layout === "list" ? "w-1/3" : "w-full"}`}>
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                width={600}
                height={400}
                className="size-full rounded-t-lg object-cover"
              />
            </div>
            <div className={`flex flex-col ${layout === "list" ? "w-2/3" : "w-full"}`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{program.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" />
                  {formatDateRange(program.startDate, program.endDate)}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {idx === 0 ? (
                          <GraduationCap className="mt-1 size-4 text-primary" />
                        ) : idx === 1 ? (
                          <Globe2 className="mt-1 size-4 text-primary" />
                        ) : (
                          <MapPin className="mt-1 size-4 text-primary" />
                        )}
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{program.period}</span>
                </div>
                <Badge variant="secondary" className="text-lg font-bold">
                  ฿{program.price.toLocaleString()}
                </Badge>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (totalPages > 7) {
                  if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
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
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
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
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}
