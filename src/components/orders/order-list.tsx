'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { OrderCard } from './order-card';
import Link from 'next/link';
import { Package, ShoppingBag } from 'lucide-react';

interface Order {
  id: string;
  orderNumber: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  items: Array<{
    product: {
      id: string;
      name: string;
      images: Array<{ url: string; alt: string }>;
    };
    quantity: number;
    price: number;
  }>;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

interface OrderListProps {
  userId: string;
}

export function OrderList({ userId }: OrderListProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  const fetchOrders = async () => {
    try {
      // Mock orders data - in real app, this would fetch from Payload CMS
      const mockOrders: Order[] = [
        {
          id: '1',
          orderNumber: 'PW-2024-001',
          total: 67.97,
          status: 'delivered',
          createdAt: '2024-01-15T10:30:00Z',
          items: [
            {
              product: {
                id: '1',
                name: 'Premium Training Pads - 50 Pack',
                images: [
                  {
                    url: '/dog-training-pads-package.png',
                    alt: 'Training Pads'
                  }
                ]
              },
              quantity: 2,
              price: 24.99
            },
            {
              product: {
                id: '3',
                name: 'Stainless Steel Food Bowl Set',
                images: [
                  { url: '/stainless-steel-dog-bowls.png', alt: 'Food Bowls' }
                ]
              },
              quantity: 1,
              price: 18.99
            }
          ],
          shippingAddress: {
            street: '123 Pet Street',
            city: 'Animal City',
            state: 'AC',
            zipCode: '12345',
            country: 'USA'
          }
        },
        {
          id: '2',
          orderNumber: 'PW-2024-002',
          total: 32.98,
          status: 'shipped',
          createdAt: '2024-01-20T14:15:00Z',
          items: [
            {
              product: {
                id: '4',
                name: 'Natural Calming Treats',
                images: [
                  {
                    url: '/natural-dog-calming-treats.png',
                    alt: 'Calming Treats'
                  }
                ]
              },
              quantity: 1,
              price: 16.99
            },
            {
              product: {
                id: '6',
                name: 'Enzyme Cleaner Spray',
                images: [
                  {
                    url: '/pet-enzyme-cleaner-spray.png',
                    alt: 'Enzyme Cleaner'
                  }
                ]
              },
              quantity: 1,
              price: 14.99
            }
          ],
          shippingAddress: {
            street: '123 Pet Street',
            city: 'Animal City',
            state: 'AC',
            zipCode: '12345',
            country: 'USA'
          }
        }
      ];

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setOrders(mockOrders);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className='space-y-4'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardContent className='p-6'>
              <div className='animate-pulse space-y-4'>
                <div className='h-4 bg-muted rounded w-1/4' />
                <div className='h-4 bg-muted rounded w-1/2' />
                <div className='h-4 bg-muted rounded w-1/3' />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <Card className='text-center py-12'>
        <CardContent>
          <Package className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
          <CardTitle className='mb-2'>No orders yet</CardTitle>
          <CardDescription className='mb-6'>
            Start shopping to see your orders here
          </CardDescription>
          <Link href='/products'>
            <Button className='gap-2'>
              <ShoppingBag className='h-4 w-4' />
              Start Shopping
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className='space-y-6'>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
