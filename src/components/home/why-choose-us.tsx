import { Shield, Heart, Truck, Award, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Vet Approved',
    description:
      'All products are recommended and approved by veterinary professionals'
  },
  {
    icon: Heart,
    title: 'Pet Parent Tested',
    description:
      'Real pet parents test and review every product before we sell it'
  },
  {
    icon: Truck,
    title: 'Fast & Free Shipping',
    description: 'Free shipping on orders over $50, with fast 2-3 day delivery'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description:
      "30-day money-back guarantee on all products - your pet's satisfaction is guaranteed"
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Our pet care experts are available around the clock to help you'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of pet parents sharing tips and experiences'
  }
];

export function WhyChooseUs() {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-balance'>
            Why Pet Parents Choose Us
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            We're more than just a pet store - we're your partner in providing
            the best care for your furry family.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='text-center hover:shadow-lg transition-shadow duration-200'
            >
              <CardContent className='p-6'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <feature.icon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold text-lg mb-2'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground text-pretty'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
