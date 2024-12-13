import * as React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "บทความท่องเที่ยว : รีวิวสถานที่ท่องเที่ยวทั่วโลก : ทัวร์ต่างประเทศปี 2567",
}

interface BlogsProps {
  readonly children: React.ReactNode
}

export default function BlogsLayout({ children }: BlogsProps) {
  return <React.Fragment>{children}</React.Fragment>
}
