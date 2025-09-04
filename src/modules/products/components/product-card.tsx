import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AddToCartButton } from '@/components/cart/add-to-cart-button'

interface Product {
  id: string
  name: string
  price: number
  images: Array<{ url: string; alt: string }>
  category: string
  inventory: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabels: Record<string, string> = {
    'training-cleanup': 'Training & Cleanup',
    'waste-management': 'Waste Management',
    'health-wellness': 'Health & Wellness',
    'feeding-essentials': 'Feeding Essentials',
    'safety-comfort': 'Safety & Comfort',
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <Link
          href={`/products/${product.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')}`}
        >
          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images[0]?.url || '/placeholder.svg'}
              alt={product.images[0]?.alt || product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
            {product.inventory < 10 && product.inventory > 0 && (
              <Badge variant="destructive" className="absolute top-2 right-2">
                Low Stock
              </Badge>
            )}
            {product.inventory === 0 && (
              <Badge variant="secondary" className="absolute top-2 right-2">
                Out of Stock
              </Badge>
            )}
          </div>
        </Link>

        <div className="space-y-2">
          <Badge variant="outline" className="text-xs">
            {categoryLabels[product.category] || product.category}
          </Badge>

          <Link
            href={`/products/${product.name
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '')}`}
          >
            <h3 className="font-semibold text-sm leading-tight hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">${product.price}</span>

            <AddToCartButton product={product} disabled={product.inventory === 0} size="sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
