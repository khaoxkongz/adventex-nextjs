import * as React from "react"
import type { Metadata } from "next"

import { promptSans } from "~/lib/fonts"
import { cn } from "~/lib/utils"
import { SiteFooter } from "~/components/shared/site-footer"
import { SiteHeader } from "~/components/shared/site-header"

import "~/styles/globals.css"

export const metadata: Metadata = {
  title:
    "บริษัท แอดเวนท์เอ็กซ์ : ทัวร์ต่างประเทศ แพคเกจทัวร์ จัดกรุ๊ปส่วนตัวปี 2567",
  description:
    "แอดเวนท์เอ็กซ์ ผู้นำด้านบริการท่องเที่ยวครบวงจร เชี่ยวชาญการจัดทัวร์ต่างประเทศ แพคเกจทัวร์ส่วนตัว ทั้งแบบกรุ๊ปและส่วนตัว พร้อมบริการที่พัก ตั๋วเครื่องบิน วีซ่า และกิจกรรมท่องเที่ยวที่หลากหลาย ด้วยประสบการณ์กว่า 10 ปี",
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
          promptSans.variable
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
