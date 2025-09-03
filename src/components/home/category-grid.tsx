import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/src/components/ui/card';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Training & Cleanup',
    slug: 'training-cleanup',
    description: 'Pads, cleaners, and training essentials',
    image: '/dog-training-pads-and-cleaning-supplies.png',
    color: 'bg-green-50 hover:bg-green-100'
  },
  {
    name: 'Waste Management',
    slug: 'waste-management',
    description: 'Eco-friendly bags and disposal solutions',
    image: '/biodegradable-dog-poop-bags.png',
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description: 'Supplements and wellness products',
    image: '/natural-pet-health-supplements.png',
    color: 'bg-purple-50 hover:bg-purple-100'
  },
  {
    name: 'Feeding Essentials',
    slug: 'feeding-essentials',
    description: 'Bowls, mats, and feeding accessories',
    image: '/stainless-steel-pet-food-bowls.png',
    color: 'bg-orange-50 hover:bg-orange-100'
  },
  {
    name: 'Safety & Comfort',
    slug: 'safety-comfort',
    description: 'Beds, blankets, and comfort items',
    image: '/comfortable-orthopedic-pet-bed.png',
    color: 'bg-pink-50 hover:bg-pink-100'
  }
];

export function CategoryGrid() {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-balance'>
            Shop by Category
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Find exactly what your pet needs with our carefully curated
            categories of essential wellness products.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
            >
              <Card
                className={`group hover:shadow-lg transition-all duration-200 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <CardContent className='p-0'>
                  <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg'>
                    <Image
                      src={category.image || '/placeholder.svg'}
                      alt={category.name}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-200'
                    />
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3 className='font-semibold text-lg mb-2 group-hover:text-primary transition-colors'>
                          {category.name}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {category.description}
                        </p>
                      </div>
                      <ArrowRight className='h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all' />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
