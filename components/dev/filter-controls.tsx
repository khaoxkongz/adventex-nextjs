import * as React from "react"
import { Filter, LayoutGrid, LayoutList } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Sheet, SheetTrigger } from "~/components/ui/sheet"
import { TabsList, TabsTrigger } from "~/components/ui/tabs"

interface FilterControlsProps {
  onOpenFilterSheet: () => void
}

export function FilterControls({ onOpenFilterSheet }: FilterControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
        <Select defaultValue="s1">
          <SelectTrigger className="sm:w-[140px]">
            <SelectValue placeholder="เรียงตาม" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="s1">ราคา</SelectItem>
            <SelectItem value="s2">ช่วงเวลา</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm text-muted-foreground">กรอง</Label>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" onClick={onOpenFilterSheet}>
              <Filter size={16} />
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm text-muted-foreground">โหมด</Label>
        <TabsList className="grid h-9 grid-cols-2 -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
          <TabsTrigger
            value="tab-1"
            className={cn(
              "relative overflow-hidden rounded-none border border-border py-2",
              "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e",
              "data-[state=active]:bg-muted/50 data-[state=active]:text-primary data-[state=active]:after:bg-primary"
            )}
          >
            <LayoutGrid size={16} strokeWidth={2} aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className={cn(
              "relative overflow-hidden rounded-none border border-border py-2",
              "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e",
              "data-[state=active]:bg-muted/50 data-[state=active]:text-primary data-[state=active]:after:bg-primary"
            )}
          >
            <LayoutList size={16} strokeWidth={2} aria-hidden="true" />
          </TabsTrigger>
        </TabsList>
      </div>
    </div>
  )
}
