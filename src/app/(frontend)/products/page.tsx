import { Suspense } from 'react'
import { ProductGrid } from '@/modules/products/components/product-grid'
import { CategoryFilter } from '@/modules/products/components/category-filter'
import { ProductSearch } from '@/modules/products/components/product-search'
import { Card } from '@/components/ui/card'

interface ProductsPageProps {
  searchParams: {
    category?: string
    search?: string
  }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-balance mb-4">Pet Wellness Essentials</h1>
        <p className="text-muted-foreground text-lg">
          Quality products for your pet's health and comfort
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters */}
        <aside className="lg:w-64 space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Search Products</h2>
            <ProductSearch />
          </Card>

          <Card className="p-6">
            <h2 className="font-semibold mb-4">Categories</h2>
            <CategoryFilter selectedCategory={searchParams.category} />
          </Card>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid category={searchParams.category} search={searchParams.search} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="p-4">
          <div className="aspect-square bg-muted rounded-lg mb-4 animate-pulse" />
          <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
          <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
        </Card>
      ))}
    </div>
  )
}
