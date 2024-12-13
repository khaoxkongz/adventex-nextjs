"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { cn } from "~/lib/utils"

export const LinkItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ href, children, ...props }, ref) => {
  const pathname = usePathname()

  return (
    <li>
      <a
        ref={ref}
        href={href}
        className={cn(
          "block cursor-pointer select-none px-4 py-2 leading-none transition-colors",
          pathname === href ? "text-primary" : "hover:text-primary"
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  )
})
LinkItem.displayName = "LinkItem"
