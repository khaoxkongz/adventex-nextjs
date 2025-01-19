import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

import { cn } from "~/lib/utils"
import { AspectRatio } from "~/components/ui/aspect-ratio"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card"

interface Author {
  name: string
  avatar: string
}

interface Blog {
  id: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  readTime: string
  publishDate: string
  author: Author
}

interface BlogCardProps extends React.ComponentProps<typeof Card> {
  blog: Blog
}

export const BlogCard = ({ blog, className, ...props }: BlogCardProps) => {
  const formattedThaiDate = (date: string) => {
    return new Intl.DateTimeFormat("th-TH", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date))
  }

  return (
    <Card className={cn("overflow-hidden transition-shadow hover:shadow-lg", className)} {...props}>
      <div className="grid gap-6 md:grid-cols-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={600}
            height={600}
            className="absolute inset-0 size-full object-cover"
          />
        </AspectRatio>

        <div className="flex flex-col space-y-4 p-6">
          <CardHeader className="p-0">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary">{blog.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 size-4" />
                {blog.readTime}
              </div>
            </div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
          </CardHeader>

          <CardContent className="p-0">
            <p className="text-muted-foreground">{blog.excerpt}</p>
            <div className="flex items-center gap-3">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={60}
                height={60}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{blog.author.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 size-4" />
                  {formattedThaiDate(blog.publishDate)}
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-0">
            <Button asChild size="sm" variant="destructive">
              <Link href={`/blogs/${blog.id}`}>อ่านเพิ่มเติม</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
