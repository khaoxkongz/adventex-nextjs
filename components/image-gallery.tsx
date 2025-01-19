"use client"

import * as React from "react"
import Image, { StaticImageData } from "next/image"

import { cn } from "~/lib/utils"

interface ImageGalleryProps {
  tourData: {
    id: string
    title: string
    description: string
    price: number
    location: string
    images: (string | StaticImageData)[]
    highlights: string[]
    about: {
      title: string
      items: string[]
    }[]
    itinerary: {
      week: string
      title: string
      description: string
      activities: string[]
    }[]
  }
}

export const ImageGallery = ({ tourData }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image fill src={tourData.images[selectedImage]} alt={tourData.title} className="size-full object-fill" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {tourData.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg",
              selectedImage === index && "ring-2 ring-primary"
            )}
          >
            <Image fill src={image} alt={`Gallery ${index + 1}`} className="size-full object-fill" />
          </button>
        ))}
      </div>
    </div>
  )
}
