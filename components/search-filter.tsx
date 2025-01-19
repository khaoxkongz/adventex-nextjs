"use client"

import { LayoutGrid, List } from "lucide-react"

import { cn } from "~/lib/utils"
import { usePrograms } from "~/hooks/use-programs"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { FilterProgram } from "~/components/filter-program"

export function SearchFilter() {
  const { layout, setLayout, sortBy, setSortBy, filteredPrograms } = usePrograms()

  return (
    <div className="sticky top-0 z-50 bg-background shadow">
      <div className="container-wrapper">
        <div className="container">
          <div className={cn("flex flex-col gap-4 py-4", "sm:flex-row sm:items-center sm:justify-between sm:py-6")}>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
              <p className="text-sm text-muted-foreground">พบทั้งหมด {filteredPrograms.length} ทัวร์</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
                <Select value={sortBy} onValueChange={(value: "price" | "month") => setSortBy(value)}>
                  <SelectTrigger className="sm:w-[140px]">
                    <SelectValue placeholder="เรียงตาม" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">ราคา</SelectItem>
                    <SelectItem value="month">เดือน</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm text-muted-foreground">กรอง</Label>
                <FilterProgram />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm text-muted-foreground">โหมด</Label>
                <div className="flex gap-1">
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
          </div>
        </div>
      </div>
    </div>
  )
}
