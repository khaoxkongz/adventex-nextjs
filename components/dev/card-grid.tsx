import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Tour } from "~/types/dev"
import { calculateDurationInDays, formatCurrency, formatDuration } from "~/lib/helper"
import { cn } from "~/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Icon } from "~/components/lucide-icon"

interface TourCardGridProps extends React.ComponentProps<typeof Card> {
  tour: Tour
}

export const TourCardGrid = ({ tour }: TourCardGridProps) => {
  return (
    <Card className="grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded shadow-none">
      <div className="relative flex size-full items-center justify-center bg-muted">
        <Image
          src={tour.image}
          alt={tour.title}
          className="size-auto max-h-full max-w-full"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <CardHeader>
          <CardTitle>{tour.title}</CardTitle>
          <CardDescription>{tour.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-medium">ประเด็นสำคัญ:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {tour.highlight.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon name={item.icon} size="16" className="text-primary" />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex-col p-0 lg:flex-row">
          <div
            className={cn(
              "size-full",
              "px-8 py-4",
              "text-xl font-bold",
              "flex items-center justify-center gap-2",
              "bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80",
              "whitespace-nowrap"
            )}
          >
            <CalendarDays size="16" />
            <p>{formatDuration(calculateDurationInDays(tour.startDate, tour.endDate))}</p>
          </div>
          <div
            className={cn(
              "size-full",
              "px-8 py-4",
              "text-xl font-bold",
              "flex items-center justify-center gap-2",
              "whitespace-nowrap transition-colors",
              "bg-destructive text-destructive-foreground hover:bg-destructive/90"
            )}
          >
            <p>
              {formatCurrency(tour.prices.default)}
              <span className="ms-1 text-sm text-amber-300">THB</span>
            </p>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
