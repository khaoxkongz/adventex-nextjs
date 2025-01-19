import * as React from "react"
import type { Metadata, Viewport } from "next"

import { META_THEME_COLORS, siteConfig } from "~/config/site"
import { promptSans } from "~/lib/fonts"
import { cn } from "~/lib/utils"
import { SiteFooter } from "~/components/site-footer"
import { SiteHeader } from "~/components/site-header"
import { ThemeProvider } from "~/components/theme-provider"

import "~/styles/globals.css"

export const metadata: Metadata = {
  title: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["ทัวร์ต่างประเทศ", "ทัวร์ส่วนตัว", "ทัวร์กรุ๊ป", "ทัวร์ส่วนตัว", "ทัวร์ส่วนตัว"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

interface RootLayoutProps {
  breadcrumb: React.ReactNode
  children: React.ReactNode
}

export default function RootLayout({ breadcrumb, children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", promptSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              <div data-wrapper="" className="border-grid flex flex-1 flex-col">
                <SiteHeader />
                <main className="flex flex-1 flex-col">
                  {breadcrumb}
                  {children}
                </main>
                <SiteFooter />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
