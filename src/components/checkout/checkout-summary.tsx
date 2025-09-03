'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';
import { useCart } from '@/src/contexts/cart-context';
import Image from 'next/image';

export function CheckoutSummary() {
  const { state } = useCart();

  const shipping = state.total > 50 ? 0 : 5.99;
  const tax = state.total * 0.08;
  const finalTotal = state.total + shipping + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Order Items */}
        <div className='space-y-3'>
          {state.items.map((item) => (
            <div key={item.id} className='flex gap-3'>
              <div className='w-12 h-12 relative rounded bg-muted'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  className='object-cover rounded'
                />
              </div>
              <div className='flex-1'>
                <p className='text-sm font-medium'>{item.name}</p>
                <p className='text-xs text-muted-foreground'>
                  Qty: {item.quantity}
                </p>
              </div>
              <p className='text-sm font-medium'>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <Separator />

        {/* Pricing Breakdown */}
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span>Subtotal</span>
            <span>${state.total.toFixed(2)}</span>
          </div>

          <div className='flex justify-between'>
            <span>Shipping</span>
            <span>
              {shipping === 0 ? (
                <span className='text-green-600'>FREE</span>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </span>
          </div>

          <div className='flex justify-between'>
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className='flex justify-between text-lg font-semibold'>
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
