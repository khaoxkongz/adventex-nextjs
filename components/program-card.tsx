"use client"

import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Globe2, GraduationCap, MapPin } from "lucide-react"

import { Program } from "~/types/program"
import { usePrograms } from "~/hooks/use-programs"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  const { layout } = usePrograms()

  return (
    <Card className={`flex justify-between ${layout === "list" ? "flex-row" : "flex-col"}`}>
      <div className={`relative ${layout === "list" ? "w-1/3" : "w-full"}`}>
        <Image
          src={program.coverImage || "/placeholder.svg"}
          alt={program.title}
          width={600}
          height={400}
          className="size-full rounded-t-lg object-cover"
        />
      </div>
      <div className={`flex flex-col ${layout === "list" ? "w-2/3" : "w-full"}`}>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">{program.title}</CardTitle>
          <div className="flex items-center gap-2 text-center text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{program.location}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <CardDescription className="line-clamp-4 text-base">{program.description}</CardDescription>
          {layout === "list" && program.highlights.length > 0 ? (
            <div className="space-y-4">
              <p>ประเด็นสำคัญ:</p>
              <div className="space-y-2">
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    {idx === 0 ? (
                      <GraduationCap className="mt-1 size-4 text-primary" />
                    ) : idx === 1 ? (
                      <Globe2 className="mt-1 size-4 text-primary" />
                    ) : (
                      <MapPin className="mt-1 size-4 text-primary" />
                    )}
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="flex items-center justify-between p-0">
          <div className="flex size-full items-center justify-center gap-2 border p-4">
            <CalendarDays className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{program.period}</span>
          </div>
          <Button className="size-full rounded-none" asChild>
            <Link href={`/tours/study/${program.id}`}>ดูเพิ่มเติม</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
