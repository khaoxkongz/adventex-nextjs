import * as React from "react"

import { cn } from "~/lib/utils"
import { NavigationMenuLink } from "~/components/ui/navigation-menu"

type ListItemRef = React.ComponentRef<"a">

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
}

export const ListItem = React.forwardRef<ListItemRef, ListItemProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
