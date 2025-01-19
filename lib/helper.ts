export const calculateDurationInDays = (startDate: string, endDate: string) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export const formatDuration = (days: number) => {
  switch (true) {
    case days >= 365:
      return "1 ปี"
    case days >= 120:
      return "1 เทอม"
    case days >= 90:
      return "3 เดือน"
    case days >= 60:
      return "2 เดือน"
    case days >= 30:
      return "1 เดือน"
    case days >= 21:
      return "3 สัปดาห์"
    case days >= 14:
      return "2 สัปดาห์"
    case days >= 7:
      return "1 สัปดาห์"
    default:
      return `${days} วัน`
  }
}

export const formatCurrency = (price: number) => {
  return price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
