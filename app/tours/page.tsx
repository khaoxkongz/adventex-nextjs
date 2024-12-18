"use client"

import * as React from "react"
import { LayoutGrid, List, Search, SlidersHorizontal } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { TourCard } from "~/components/tour-card"
import { TourFilters } from "~/components/tour-filters"
import { TourHero } from "~/components/tour-hero"
import { tours } from "~/data/tours"

export default function ToursPage() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)

  const itemsPerPage = viewMode === "grid" ? 9 : 5

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  React.useEffect(() => {
    setCurrentPage(1)
  }, [viewMode, searchQuery])

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTours = filteredTours.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handlePreviousPage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePageClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: number
  ) => {
    e.preventDefault()
    setCurrentPage(page)
  }

  return (
    <React.Fragment>
      <div className="container-wrapper">
        <div className="container py-4">
          <React.Suspense>
            <TourHero />
          </React.Suspense>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container py-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-4 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">ค้นหาแพ็คเกจ</h2>
              <p className="text-sm text-muted-foreground">
                พบทั้งหมด{" "}
                <span className="font-medium text-orange-500">
                  {filteredTours.length}
                </span>{" "}
                รายการ
              </p>
            </div>
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search tours..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SlidersHorizontal className="size-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>กรองแพ็คเกจท่องเที่ยว</SheetTitle>
                      <SheetDescription>
                        กรองแพ็คเกจท่องเที่ยวตามความต้องการของคุณ
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <TourFilters />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="flex rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none transition-colors hover:bg-primary/10"
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid
                    className={cn(
                      "size-4",
                      viewMode === "grid" && "text-primary"
                    )}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none transition-colors hover:bg-primary/10"
                  onClick={() => setViewMode("list")}
                >
                  <List
                    className={cn(
                      "size-4",
                      viewMode === "list" && "text-primary"
                    )}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container py-4">
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="hidden w-64 shrink-0 md:block">
              <div className="sticky top-24 rounded-lg border p-6">
                <h2 className="mb-6 text-sm font-semibold">
                  เลือกการแสดงผลแพ็คเกจ
                </h2>
                <TourFilters />
              </div>
            </aside>

            <div className="flex-1">
              <div
                className={cn(
                  "grid gap-2",
                  viewMode === "grid"
                    ? "grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                )}
              >
                {paginatedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
                ))}
              </div>

              <div
                className={cn(
                  "mt-8 flex flex-col items-center gap-4 text-center",
                  "md:flex-row md:justify-between md:text-left"
                )}
              >
                <div className="size-full text-sm text-muted-foreground md:hidden">
                  {(currentPage - 1) * itemsPerPage + 1} -{" "}
                  {Math.min(currentPage * itemsPerPage, filteredTours.length)}{" "}
                  จาก {filteredTours.length}
                </div>
                <div className="hidden size-full text-sm text-muted-foreground md:block">
                  แสดงผลลัพธ์ {(currentPage - 1) * itemsPerPage + 1} -{" "}
                  {Math.min(currentPage * itemsPerPage, filteredTours.length)}{" "}
                  จากทั้งหมด {filteredTours.length} รายการ
                </div>
                <Pagination className="md:justify-end">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={handlePreviousPage}
                        className={cn(
                          currentPage === 1 && "pointer-events-none opacity-50"
                        )}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        const shouldShowPage =
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(currentPage - page) <= 1

                        if (!shouldShowPage) {
                          if (
                            (page === 2 && currentPage > 3) ||
                            (page === totalPages - 1 &&
                              currentPage < totalPages - 2)
                          ) {
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
                              onClick={(e) => handlePageClick(e, page)}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      }
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={handleNextPage}
                        className={cn(
                          currentPage === totalPages &&
                            "pointer-events-none opacity-50"
                        )}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
