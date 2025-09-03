'use client';

import { useAuth } from '@/src/contexts/auth-context';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { OrderList } from '@/src/components/orders/order-list';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OrdersPage() {
  const { user, isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 flex items-center justify-center'>
          <div className='text-center'>Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 flex items-center justify-center'>
          <Card className='max-w-md mx-auto text-center'>
            <CardHeader>
              <CardTitle>Access Required</CardTitle>
              <CardDescription>
                Please sign in to view your orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='/login'>
                <Button>Sign In</Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <Link href='/account'>
            <Button variant='ghost' className='gap-2 mb-4'>
              <ArrowLeft className='h-4 w-4' />
              Back to Account
            </Button>
          </Link>
          <h1 className='text-3xl font-bold mb-2'>Order History</h1>
          <p className='text-muted-foreground'>
            Track and manage your Pet Wellness orders
          </p>
        </div>

        <OrderList userId={user.id} />
      </main>

      <Footer />
    </div>
  );
}
