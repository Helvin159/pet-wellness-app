import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryGrid } from '@/components/home/category-grid'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Newsletter } from '@/components/home/newsletter'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <WhyChooseUs />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
