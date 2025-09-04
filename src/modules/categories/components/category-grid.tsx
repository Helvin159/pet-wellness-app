import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Package, Heart, Shield, Utensils, Home } from 'lucide-react'

const categories = [
  {
    name: 'Training & Cleanup',
    slug: 'training-cleanup',
    description:
      'Essential training pads, cleaners, and house-training supplies to keep your home fresh and your pet learning.',
    image: '/dog-training-pads-and-cleaning-supplies.png',
    icon: Package,
    productCount: '12+ products',
    color: 'bg-green-50 hover:bg-green-100 dark:bg-green-950/20 dark:hover:bg-green-950/30',
    borderColor: 'border-green-200 dark:border-green-800',
    features: [
      'Absorbent Training Pads',
      'Odor Control',
      'Eco-Friendly Options',
      'Quick-Dry Technology',
    ],
  },
  {
    name: 'Waste Management',
    slug: 'waste-management',
    description:
      'Biodegradable bags and innovative disposal solutions that are kind to your pet and the environment.',
    image: '/biodegradable-dog-poop-bags.png',
    icon: Shield,
    productCount: '8+ products',
    color: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:hover:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'Biodegradable Materials',
      'Leak-Proof Design',
      'Easy Dispensing',
      'Scented Options',
    ],
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description:
      "Premium supplements and wellness products to support your pet's vitality and long-term health.",
    image: '/natural-pet-health-supplements.png',
    icon: Heart,
    productCount: '15+ products',
    color: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/20 dark:hover:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-800',
    features: ['Natural Ingredients', 'Vet Formulated', 'Joint Support', 'Immune Boosters'],
  },
  {
    name: 'Feeding Essentials',
    slug: 'feeding-essentials',
    description:
      'Durable bowls, feeding mats, and accessories designed for comfortable and hygienic meal times.',
    image: '/stainless-steel-pet-food-bowls.png',
    icon: Utensils,
    productCount: '10+ products',
    color: 'bg-orange-50 hover:bg-orange-100 dark:bg-orange-950/20 dark:hover:bg-orange-950/30',
    borderColor: 'border-orange-200 dark:border-orange-800',
    features: ['Stainless Steel', 'Non-Slip Base', 'Easy to Clean', 'Multiple Sizes'],
  },
  {
    name: 'Safety & Comfort',
    slug: 'safety-comfort',
    description:
      'Cozy beds, protective gear, and comfort items to create a safe and relaxing environment for your pet.',
    image: '/comfortable-orthopedic-pet-bed.png',
    icon: Home,
    productCount: '18+ products',
    color: 'bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/20 dark:hover:bg-pink-950/30',
    borderColor: 'border-pink-200 dark:border-pink-800',
    features: ['Orthopedic Support', 'Washable Covers', 'Temperature Control', 'Anxiety Relief'],
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each category is carefully curated with products that meet our high standards for
            quality, safety, and effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.slug} href={`/products?category=${category.slug}`}>
                <Card
                  className={`group hover:shadow-xl transition-all duration-300 ${category.color} ${category.borderColor} border-2`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-2/5 aspect-[4/3] md:aspect-auto relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                        <Image
                          src={category.image || '/placeholder.svg'}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-foreground">
                            {category.productCount}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-3/5 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                              {category.name}
                            </h3>
                          </div>

                          <p className="text-muted-foreground mb-4 text-pretty">
                            {category.description}
                          </p>

                          <div className="space-y-2 mb-4">
                            {category.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">Shop Category</span>
                          <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our pet care experts are here to help you find the perfect products for your furry
              friend's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
