import Image from "next/image"
import Link from "next/link"

import { cn } from "~/lib/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface BentoCardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
  href: string
}

interface BentoCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface BentoCardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
}

interface BentoCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface BentoCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("grid grid-cols-6 grid-rows-12 gap-2 lg:grid-cols-12 lg:grid-rows-12", className)}>
      {children}
    </div>
  )
}
BentoGrid.displayName = "BentoGrid"

const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-card text-card-foreground", className)}>{children}</div>
  )
}
BentoCard.displayName = "BentoCard"

const BentoCardLink = ({ children, className, href }: BentoCardLinkProps) => {
  return (
    <Link href={href} className={cn(className)}>
      {children}
    </Link>
  )
}
BentoCardLink.displayName = "BentoCardLink"

const BentoCardContent = ({ children, className }: BentoCardContentProps) => {
  return (
    <div className={cn("group relative size-full", className)}>
      {children}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}
BentoCardContent.displayName = "BentoCardContent"

const BentoCardImage = ({ src, alt, className }: BentoCardImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className={cn("size-full object-cover transition-transform duration-300 group-hover:scale-105", className)}
    />
  )
}
BentoCardImage.displayName = "BentoCardImage"

const BentoCardFooter = ({ children, className }: BentoCardFooterProps) => {
  return <div className={cn("absolute inset-x-0 bottom-0 z-10 p-4 text-white", className)}>{children}</div>
}
BentoCardFooter.displayName = "BentoCardFooter"

const BentoCardTitle = ({ children, className }: BentoCardTitleProps) => {
  return <h3 className={cn("mb-1 font-semibold", className)}>{children}</h3>
}
BentoCardTitle.displayName = "BentoCardTitle"

export { BentoGrid, BentoCard, BentoCardContent, BentoCardFooter, BentoCardImage, BentoCardLink, BentoCardTitle }
