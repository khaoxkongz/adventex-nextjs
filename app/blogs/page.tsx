"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { BlogCard } from "~/components/blog-card"
import { BlogCategories } from "~/components/blog-categories"
import { blogs } from "~/data/blogs"

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || blog.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <React.Fragment>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-8">
            <section className="space-y-4 md:space-y-8 lg:space-y-12">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold">เรื่องราวและข้อมูลเชิงลึกการท่องเที่ยว</h1>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                  ค้นพบเคล็ดลับการท่องเที่ยว ข้อมูลเชิงลึกทางวัฒนธรรม และคู่มือแนะนำโดยละเอียด
                  เพื่อช่วยคุณวางแผนการผจญภัยครั้งต่อไป
                </p>
              </div>
              <div className="relative mx-auto max-w-lg">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="ค้นหาบทความ..."
                  className="pl-9 shadow-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-8">
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="relative lg:col-span-1">
              <div className="sticky inset-x-0 top-24">
                <BlogCategories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
              </div>
            </aside>

            <div className="space-y-8 lg:col-span-3">
              <div className="grid gap-8">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} className="rounded shadow-none" />
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  โหลดบทความเพิ่มเติม
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}
