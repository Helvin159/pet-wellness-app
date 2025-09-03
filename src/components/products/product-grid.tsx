import { ProductCard } from './product-card';
import { Card } from '@/src/components/ui/card';

interface Product {
  id: string;
  name: string;
  price: number;
  images: Array<{ url: string; alt: string }>;
  category: string;
  inventory: number;
}

interface ProductGridProps {
  category?: string;
  search?: string;
}

// Mock products data - in real app, this would fetch from Payload CMS
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Training Pads - 50 Pack',
    price: 24.99,
    images: [{ url: '/dog-training-pads.png', alt: 'Training Pads' }],
    category: 'training-cleanup',
    inventory: 45
  },
  {
    id: '2',
    name: 'Biodegradable Poop Bags - 200 Count',
    price: 12.99,
    images: [{ url: '/biodegradable-poop-bags.png', alt: 'Poop Bags' }],
    category: 'waste-management',
    inventory: 120
  },
  {
    id: '3',
    name: 'Stainless Steel Food Bowl Set',
    price: 18.99,
    images: [{ url: '/stainless-steel-dog-bowls.png', alt: 'Food Bowls' }],
    category: 'feeding-essentials',
    inventory: 32
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
    id: '6',
    name: 'Enzyme Cleaner Spray',
    price: 14.99,
    images: [{ url: '/pet-enzyme-cleaner-spray.png', alt: 'Enzyme Cleaner' }],
    category: 'training-cleanup',
    inventory: 89
  }
];

export function ProductGrid({ category, search }: ProductGridProps) {
  // Filter products based on category and search
  let filteredProducts = mockProducts;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <Card className='p-12 text-center'>
        <h3 className='text-lg font-semibold mb-2'>No products found</h3>
        <p className='text-muted-foreground'>
          Try adjusting your search or filter criteria
        </p>
      </Card>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
