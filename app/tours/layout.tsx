import * as React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "แพ็คเกจทัวร์ : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด",
}

interface ToursProps {
  readonly children: React.ReactNode
}

export default function ToursLayout({ children }: ToursProps) {
  return <React.Fragment>{children}</React.Fragment>
}
