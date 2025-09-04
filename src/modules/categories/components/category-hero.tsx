import { Heart, Shield, Sparkles } from 'lucide-react'

export function CategoryHero() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Curated for Pet Wellness</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Everything Your Pet Needs, <span className="text-primary">Organized by Care</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Discover our thoughtfully curated categories of essential pet products. From daily care
            to health and wellness, we've organized everything to make finding the right products
            effortless.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Vet Recommended</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Pet Parent Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
