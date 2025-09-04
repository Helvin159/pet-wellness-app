import { ProductCard } from "./product-card"

interface RelatedProductsProps {
  category: string
  currentProductId: string
}

// Mock related products - in real app, this would fetch from Payload CMS
const mockRelatedProducts = [
  {
    id: "2",
    name: "Biodegradable Poop Bags - 200 Count",
    price: 12.99,
    images: [{ url: "/biodegradable-poop-bags.png", alt: "Poop Bags" }],
    category: "waste-management",
    inventory: 120,
  },
  {
    id: "6",
    name: "Enzyme Cleaner Spray",
    price: 14.99,
    images: [{ url: "/pet-enzyme-cleaner-spray.png", alt: "Enzyme Cleaner" }],
    category: "training-cleanup",
    inventory: 89,
  },
  {
    id: "7",
    name: "Waterproof Training Mat",
    price: 19.99,
    images: [{ url: "/waterproof-pet-training-mat.png", alt: "Training Mat" }],
    category: "training-cleanup",
    inventory: 34,
  },
]

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  // Filter related products by category and exclude current product
  const relatedProducts = mockRelatedProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 3)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
