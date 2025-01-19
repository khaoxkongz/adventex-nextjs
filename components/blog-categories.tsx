import * as React from "react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"

const categories = [
  { id: "all", name: "บทความทั้งหมด" },
  { id: "travel", name: "เรื่องราวการเดินทาง" },
  { id: "learning", name: "เคล็ดลับการเรียน" },
  { id: "culture", name: "วัฒนธรรมจีน" },
  { id: "news", name: "ข่าวสารและกิจกรรม" },
]

interface BlogCategoriesProps extends React.ComponentProps<"div"> {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export const BlogCategories = ({ selectedCategory, onSelectCategory, className, ...props }: BlogCategoriesProps) => {
  return (
    <div className={cn("space-y-4 rounded border p-6", className)} {...props}>
      <h2 className="font-semibold">หมวดหมู่</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start rounded shadow-none"
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
