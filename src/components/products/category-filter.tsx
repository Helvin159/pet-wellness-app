'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

const categories = [
  { value: '', label: 'All Products' },
  { value: 'training-cleanup', label: 'Training & Cleanup' },
  { value: 'waste-management', label: 'Waste Management' },
  { value: 'health-wellness', label: 'Health & Wellness' },
  { value: 'feeding-essentials', label: 'Feeding Essentials' },
  { value: 'safety-comfort', label: 'Safety & Comfort' }
];

interface CategoryFilterProps {
  selectedCategory?: string;
}

export function CategoryFilter({ selectedCategory }: CategoryFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    return params.toString();
  };

  return (
    <div className='space-y-2'>
      {categories.map((category) => (
        <Link
          key={category.value}
          href={`${pathname}?${createQueryString(category.value)}`}
          className='block'
        >
          <Button
            variant={selectedCategory === category.value ? 'default' : 'ghost'}
            className={cn(
              'w-full justify-start text-left',
              selectedCategory === category.value &&
                'bg-primary text-primary-foreground'
            )}
          >
            {category.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
