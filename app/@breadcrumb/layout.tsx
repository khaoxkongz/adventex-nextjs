import * as React from "react"

interface BreadcrumbLayoutProps {
  children: React.ReactNode
}

export default function BreadcrumbLayout({ children }: BreadcrumbLayoutProps) {
  return <React.Fragment>{children}</React.Fragment>
}
