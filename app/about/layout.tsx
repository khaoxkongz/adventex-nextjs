import * as React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด",
}

interface AboutProps {
  readonly children: React.ReactNode
}

export default function AboutLayout({ children }: AboutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
