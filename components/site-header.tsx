import * as React from "react"
import Link from "next/link"

import { siteConfig } from "~/config/site"
import { Button } from "~/components/ui/button"
import { CommandMenu } from "~/components/command-menu"
import { Icons } from "~/components/icons"
import { MainNav } from "~/components/main-nav"
import { MobileNav } from "~/components/mobile-nav"
import { ModeSwitcher } from "~/components/mode-switcher"

export const SiteHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <React.Suspense>
            <MainNav />
          </React.Suspense>
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-0.5">
              <Button variant="ghost" size="icon" className="size-8 px-0">
                <Link
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.line className="size-4" />
                  <span className="sr-only">Line</span>
                </Link>
              </Button>
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}