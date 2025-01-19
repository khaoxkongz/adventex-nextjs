import { IconName } from "~/components/lucide-icon"

export interface Tour {
  id: string
  tourCode: string
  title: string
  description: string
  highlight: {
    title: string
    icon: IconName
  }[]
  image: string
  prices: {
    default: number
    single?: number | undefined
    couple?: number | undefined
  }
  startDate: string
  endDate: string
}
