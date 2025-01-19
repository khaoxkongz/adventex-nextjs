import * as React from "react"
import Link from "next/link"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Filter, LayoutGrid, LayoutList, Plus } from "lucide-react"

import { cn } from "~/lib/utils"
import { Accordion, AccordionContent, AccordionItem } from "~/components/ui/accordion"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { TourCardGrid } from "~/components/dev/card-grid"
import { TourCardList } from "~/components/dev/card-list"
import { PriceRange } from "~/components/dev/price-range"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header"
import { tours } from "~/data/dev"

export default function DevPage() {
  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderHeading>DevPage</PageHeaderHeading>
        <PageHeaderDescription>This page is for development purposes only.</PageHeaderDescription>
        <PageActions>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/tours">Tours</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/blogs">Blogs</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <Tabs defaultValue="tab-1">
        <div className="sticky top-0 z-50 bg-background shadow">
          <div className="container-wrapper">
            <div className="container">
              <div className={cn("flex flex-col gap-4 py-4", "sm:flex-row sm:items-center sm:justify-between sm:py-6")}>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
                  <p className="text-sm text-muted-foreground">พบทั้งหมด 3 ทัวร์</p>
                </div>
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
                        <Button variant="outline" size="icon">
                          <Filter size={16} />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                          <SheetTitle>กรองแพ็คเกจทัวร์เรียนต่อ</SheetTitle>
                          <SheetDescription>กรองแพ็คเกจทัวร์เรียนต่อตามความต้องการของคุณ</SheetDescription>
                        </SheetHeader>
                        <PriceRange
                          items={tours.map((tour) => ({
                            price: tour.prices.default,
                          }))}
                        />
                        <Accordion type="multiple" className="w-full" defaultValue={["1"]}>
                          <AccordionItem value="1" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                กิจกรรม
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="activity-1" />
                                  <label
                                    htmlFor="activity-1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    เรียนต่อระยะสั้น
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="activity-2" />
                                  <label
                                    htmlFor="activity-2"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    เรียนต่อระยะยาว
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="2" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                มหาวิทยาลัย
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                {["Harbin Normal University", "Harbin Institute of Technology"].map(
                                  (university, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <Checkbox id={`university-${index + 1}`} />
                                      <label
                                        htmlFor={`university-${index + 1}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                      >
                                        {university}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="3" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                เดือน
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <ScrollArea className="h-[200px] pr-4">
                                <div className="space-y-4">
                                  {[
                                    "มกราคม",
                                    "กุมภาพันธ์",
                                    "มีนาคม",
                                    "เมษายน",
                                    "พฤษภาคม",
                                    "มิถุนายน",
                                    "กรกฎาคม",
                                    "สิงหาคม",
                                    "กันยายน",
                                    "ตุลาคม",
                                    "พฤศจิกายน",
                                    "ธันวาคม",
                                  ].map((month, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <Checkbox id={`month-${index + 1}`} />
                                      <label
                                        htmlFor={`month-${index + 1}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                      >
                                        {month}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </SheetContent>
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
              </div>
            </div>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container py-4 sm:py-6">
            <TabsContent value="tab-1">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {tours.map((tour) => (
                  <TourCardGrid key={tour.id} tour={tour} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tab-2">
              <div className="grid gap-4">
                {tours.map((tour) => (
                  <TourCardList key={tour.id} tour={tour} />
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </React.Fragment>
  )
}
