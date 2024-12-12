import * as React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "",
}

interface BlogsProps {
  readonly children: React.ReactNode
}

export default function BlogsLayout({ children }: BlogsProps) {
  return <React.Fragment>{children}</React.Fragment>
}
