import * as React from "react"
import type { Metadata } from "next"

import { krubSans } from "~/lib/fonts"
import { cn } from "~/lib/utils"
import { SiteFooter } from "~/components/shared/site-footer"
import { SiteHeader } from "~/components/shared/site-header"

import "~/styles/globals.css"

export const metadata: Metadata = {
  title: "",
  description: "",
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          krubSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <div data-wrapper="" className="border-border/40">
            <div className="mx-auto w-full border-border/40 min-[1800px]:max-w-screen-2xl min-[1800px]:border-x">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
