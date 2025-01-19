"use client"

import * as React from "react"

import { type Tour } from "~/types/dev"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import { TourCardGrid } from "~/components/dev/card-grid"
import { TourCardList } from "~/components/dev/card-list"

interface PaginatedToursProps {
  tours: Tour[]
  viewMode: "grid" | "list"
}

export function PaginatedTours({ tours, viewMode }: PaginatedToursProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = viewMode === "grid" ? 9 : 5
  const totalPages = Math.ceil(tours.length / itemsPerPage)

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return tours.slice(startIndex, endIndex)
  }

  // Reset page when view mode changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [viewMode])

  return (
    <div className="space-y-8">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {getCurrentItems().map((tour) => (
            <TourCardGrid key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {getCurrentItems().map((tour) => (
            <TourCardList key={tour.id} tour={tour} />
          ))}
        </div>
      )}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage((p) => Math.max(1, p - 1))
              }}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {/* First Page */}
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(1)
              }}
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {/* Show ellipsis if there are many pages */}
          {currentPage > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Current page neighborhood */}
          {currentPage > 2 && currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage(currentPage)
                }}
                isActive={true}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Show ellipsis if there are many pages */}
          {currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Last Page */}
          {totalPages > 1 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage(totalPages)
                }}
                isActive={currentPage === totalPages}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
