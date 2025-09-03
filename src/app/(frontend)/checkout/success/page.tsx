import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <Card className='max-w-md mx-auto text-center'>
        <CardHeader>
          <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
            <CheckCircle className='h-8 w-8 text-green-600' />
          </div>
          <CardTitle className='text-2xl'>Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-muted-foreground'>
            Thank you for your purchase! Your order has been confirmed and will
            be shipped soon.
          </p>

          <p className='text-sm text-muted-foreground'>
            You'll receive an email confirmation with tracking information once
            your order ships.
          </p>

          <div className='space-y-2 pt-4'>
            <Link href='/products' className='block'>
              <Button className='w-full'>Continue Shopping</Button>
            </Link>
            <Link href='/' className='block'>
              <Button variant='outline' className='w-full bg-transparent'>
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
