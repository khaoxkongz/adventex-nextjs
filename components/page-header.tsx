import * as React from "react"

import { cn } from "~/lib/utils"

export const PageHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn("border-grid border-b", className)} {...props}>
      <div className="container-wrapper">
        <div className="container py-8 md:py-10 lg:py-12">
          <div className="flex flex-col items-start gap-1">{children}</div>
        </div>
      </div>
    </section>
  )
}

export const PageHeaderHeading = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]", className)}
      {...props}
    />
  )
}

export const PageHeaderDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("max-w-2xl text-balance text-lg font-light text-foreground", className)} {...props} />
}

export const PageActions = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex w-full items-center justify-start gap-2 pt-2", className)} {...props} />
}
