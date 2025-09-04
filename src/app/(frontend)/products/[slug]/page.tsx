import { notFound } from 'next/navigation'
import { ProductImages } from '@/modules/products/components/product-images'
import { AddToCartButton } from '@/components/cart/add-to-cart-button'
import { RelatedProducts } from '@/modules/products/components/related-products'
import { Badge } from '@/components/ui/badge'

interface ProductPageProps {
  params: {
    slug: string
  }
}

// Mock product data - in real app, this would fetch from Payload CMS
async function getProduct(slug: string) {
  // This would be replaced with actual Payload CMS API call
  const mockProduct = {
    id: '1',
    name: 'Premium Training Pads - 50 Pack',
    description:
      'Ultra-absorbent training pads with leak-proof backing. Perfect for house training puppies or senior dogs who need extra support.',
    price: 24.99,
    category: 'training-cleanup',
    images: [
      {
        url: '/dog-training-pads-package.png',
        alt: 'Premium Training Pads Package',
      },
    ],
    inventory: 45,
    featured: true,
    status: 'active',
  }

  return slug === 'premium-training-pads' ? mockProduct : null
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params?.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <ProductImages images={product.images} />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </Badge>
            <h1 className="text-3xl font-bold text-balance mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mb-4">${product.price}</p>
          </div>

          <div className="prose prose-sm max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}
            </span>
          </div>

          <AddToCartButton product={product} disabled={product.inventory === 0} />
        </div>
      </div>

      {/* Related Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </section>
    </div>
  )
}
