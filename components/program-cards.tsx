"use client"

import * as React from "react"
import { getGridClass } from "~/utils/formatters"

import { cn } from "~/lib/utils"
import { usePrograms } from "~/hooks/use-programs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import { ProgramCard } from "~/components/program-card"

export function ProgramCards() {
  const { layout, currentPage, filteredPrograms } = usePrograms()

  const itemsPerPage = layout === "grid" ? 9 : 5

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredPrograms.length)
  const currentItems = filteredPrograms.slice(startIndex, endIndex)

  return (
    <div className="container-wrapper">
      <div className="container py-4 xl:py-6 2xl:py-4">
        <div className={`grid gap-6 ${getGridClass(layout as "grid" | "list")}`}>
          {currentItems.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <ProgramCardsPagination />
      </div>
    </div>
  )
}

function ProgramCardsPagination() {
  const { layout, currentPage, setCurrentPage, filteredPrograms } = usePrograms()

  const itemsPerPage = layout === "grid" ? 9 : 5
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)

  return (
    <div
      className={cn("mt-8 flex flex-col items-center gap-4 text-center", "md:flex-row md:justify-between md:text-left")}
    >
      <div className="size-full text-sm text-muted-foreground md:hidden">
        {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredPrograms.length)} จาก{" "}
        {filteredPrograms.length}
      </div>
      <div className="hidden size-full text-sm text-muted-foreground md:block">
        แสดงผลลัพธ์ {(currentPage - 1) * itemsPerPage + 1} -{" "}
        {Math.min(currentPage * itemsPerPage, filteredPrograms.length)} จากทั้งหมด {filteredPrograms.length} รายการ
      </div>
      <Pagination className="md:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(Math.max(currentPage - 1, 1))
              }}
              className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
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
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }}
              className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
