import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { ProductCard } from '@/src/components/products/product-card';

// Mock featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Training Pads - 50 Pack',
    price: 24.99,
    images: [{ url: '/dog-training-pads-package.png', alt: 'Training Pads' }],
    category: 'training-cleanup',
    inventory: 45
  },
  {
    id: '4',
    name: 'Natural Calming Treats',
    price: 16.99,
    images: [{ url: '/natural-dog-calming-treats.png', alt: 'Calming Treats' }],
    category: 'health-wellness',
    inventory: 67
  },
  {
    id: '5',
    name: 'Orthopedic Pet Bed - Medium',
    price: 49.99,
    images: [{ url: '/orthopedic-dog-bed.png', alt: 'Pet Bed' }],
    category: 'safety-comfort',
    inventory: 15
  },
  {
    id: '3',
    name: 'Stainless Steel Food Bowl Set',
    price: 18.99,
    images: [{ url: '/stainless-steel-dog-bowls.png', alt: 'Food Bowls' }],
    category: 'feeding-essentials',
    inventory: 32
  }
];

export function FeaturedProducts() {
  return (
    <section className='py-16 lg:py-24 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-balance'>
            Featured Products
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Our most popular pet wellness essentials, trusted by thousands of
            pet parents.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className='text-center'>
          <Link href='/products'>
            <Button size='lg' variant='outline' className='bg-transparent'>
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
