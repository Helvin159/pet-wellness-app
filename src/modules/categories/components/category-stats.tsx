export function CategoryStats() {
  const stats = [
    { number: '5', label: 'Product Categories', description: 'Carefully organized collections' },
    { number: '50+', label: 'Essential Products', description: 'Quality items for every need' },
    { number: '100%', label: 'Pet Safe', description: 'Thoroughly tested and approved' },
    { number: '24/7', label: 'Expert Support', description: 'Always here to help' },
  ]

  return (
    <section className="py-16 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
