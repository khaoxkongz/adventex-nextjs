import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { DesktopNavigation } from "~/components/shared/desktop-navigation"
import { MobileNavigation } from "~/components/shared/mobile-navigation"

export const SiteHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[72px] border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/adventex-logo.png"
              width="390"
              height="80"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/adventex-logo.svg"
              width="40"
              height="40"
            />
            <Image
              src="/adventex-logo.png"
              alt="Adventex logo"
              width="390"
              height="80"
              className="size-10 md:h-[40px] md:w-[200px]"
            />
          </picture>
          <span className="sr-only">Adventex</span>
        </Link>

        {/* Desktop Navigation */}
        <React.Suspense>
          <DesktopNavigation />
        </React.Suspense>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  )
}
