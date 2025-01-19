import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Tour } from "~/types/dev"
import { calculateDurationInDays, formatCurrency, formatDuration } from "~/lib/helper"
import { cn } from "~/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Icon } from "~/components/lucide-icon"

interface TourCardListProps extends React.ComponentProps<typeof Card> {
  tour: Tour
}

export const TourCardList = ({ tour }: TourCardListProps) => {
  return (
    <Card className="grid grid-cols-1 overflow-hidden rounded shadow-none sm:grid-cols-[auto_1fr]">
      <div className="relative bg-muted">
        <Image
          src={tour.image}
          alt={tour.title}
          className="h-auto w-full object-contain sm:h-full"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <CardHeader>
          <CardTitle className="md:text-2xl">{tour.title}</CardTitle>
          <CardDescription className="md:text-lg">{tour.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-medium md:text-lg">ประเด็นสำคัญ:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {tour.highlight.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon name={item.icon} className="size-4 text-primary md:size-6" />
                  <span className="md:text-lg">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div
            className={cn(
              "size-full",
              "px-8 py-4",
              "text-xl font-bold",
              "flex items-center justify-center gap-2",
              "text-secondary-foreground hover:bg-secondary/80",
              "whitespace-nowrap transition-colors",
              "bg-secondary"
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
