import { Menu } from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

import { LinkItem } from "./link-item"

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/tours", label: "แพ็คเกจ" },
  { href: "/blogs", label: "บทความ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
]

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>เมนู</SheetTitle>
          <SheetDescription>เลือกหมวดหมู่ที่คุณสนใจ</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="mt-8 flex flex-col gap-4">
            {links.map((link) => (
              <LinkItem key={link.href} href={link.href}>
                {link.label}
              </LinkItem>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
