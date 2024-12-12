import * as React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ติดต่อเรา : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด",
}

interface ContactProps {
  readonly children: React.ReactNode
}

export default function ContactLayout({ children }: ContactProps) {
  return <React.Fragment>{children}</React.Fragment>
}
