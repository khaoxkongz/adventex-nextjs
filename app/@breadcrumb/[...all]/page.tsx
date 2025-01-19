import * as React from "react"
import { Component, Home } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

interface BreadcrumbSlotProps {
  params: Promise<{ all: string[] }>
}

export default async function BreadcrumbSlot(props: BreadcrumbSlotProps) {
  const params = await props.params

  const breadcrumbItems: React.ReactElement[] = []
  let breadcrumbPage: React.ReactElement = <></>

  for (let i = 0; i < params.all.length; i++) {
    let route = params.all[i]
    const href = `/${params.all.at(0)}/${route}`

    switch (route) {
      case "tours":
        route = "แพ็คเกจทัวร์"
        break
      case "blogs":
        route = "บทความ"
        break
      case "about":
        route = "เกี่ยวกับเรา"
        break
      case "contact":
        route = "ติดต่อเรา"
        break
      case "":
        break
    }

    if (i === params.all.length - 1) {
      breadcrumbPage = (
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{route}</BreadcrumbPage>
        </BreadcrumbItem>
      )
    } else {
      breadcrumbItems.push(
        <React.Fragment key={href}>
          <BreadcrumbItem>
            <BreadcrumbLink href={href} className="inline-flex items-center gap-1.5">
              <Component size={16} strokeWidth={2} aria-hidden="true" />
              {route}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="border-grid border-b">
      <div className="container-wrapper">
        <div className="container py-4 xl:py-6 2xl:py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="inline-flex items-center gap-1.5">
                  <Home size={16} strokeWidth={2} aria-hidden="true" />
                  หน้าแรก
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbItems}
              <BreadcrumbSeparator />
              {breadcrumbPage}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}
