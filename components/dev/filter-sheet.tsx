import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { Tour } from "~/types/dev"
import { Accordion, AccordionContent, AccordionItem } from "~/components/ui/accordion"
import { Checkbox } from "~/components/ui/checkbox"
import { ScrollArea } from "~/components/ui/scroll-area"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "~/components/ui/sheet"
import { PriceRange } from "~/components/dev/price-range"

interface FilterSheetProps {
  tours: Tour[]
}

export function FilterSheet({ tours }: FilterSheetProps) {
  return (
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
              {["Harbin Normal University", "Harbin Institute of Technology"].map((university, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`university-${index + 1}`} />
                  <label
                    htmlFor={`university-${index + 1}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {university}
                  </label>
                </div>
              ))}
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
  )
}
