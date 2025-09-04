import type { Metadata } from 'next'
import { CategoryGrid } from '@/modules/categories/components/category-grid'
import { CategoryHero } from '@/modules/categories/components/category-hero'
import { CategoryStats } from '@/modules/categories/components/category-stats'

export const metadata: Metadata = {
  title: 'Pet Product Categories | Pet Wellness Essentials',
  description:
    'Browse our comprehensive collection of pet wellness products organized by category. Find training supplies, health products, feeding essentials, and more.',
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <CategoryHero />
      <CategoryStats />
      <CategoryGrid />
    </div>
  )
}
