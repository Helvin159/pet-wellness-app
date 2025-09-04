'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface ProductImage {
  url: string
  alt: string
}

interface ProductImagesProps {
  images: ProductImage[]
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!images || images.length === 0) {
    return (
      <Card className="aspect-square bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">No image available</span>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <Card className="aspect-square overflow-hidden">
        <Image
          src={images[selectedImage]?.url || '/placeholder.svg'}
          alt={images[selectedImage]?.alt || 'Product image'}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </Card>

      {/* Thumbnail images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              title={image.alt}
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Image
                src={image.url || '/placeholder.svg'}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
