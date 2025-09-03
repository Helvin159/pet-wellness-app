'use client';

import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { useCart } from '@/src/contexts/cart-context';
import { CartItem } from './cart-item';
import { ShoppingCart } from 'lucide-react';

export function CartItemsList() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className='text-center py-12'>
        <ShoppingCart className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
        <h3 className='text-lg font-semibold mb-2'>Your cart is empty</h3>
        <p className='text-muted-foreground mb-4'>
          Add some pet wellness essentials to get started
        </p>
        <Link href='/products'>
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='space-y-0'>
      {state.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
