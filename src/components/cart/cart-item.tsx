'use client';

import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { useCart } from '@/src/contexts/cart-context';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
  };
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: item.id });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: item.id, quantity: newQuantity }
      });
    }
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  return (
    <div className='flex gap-4 py-4 border-b'>
      <div className='w-16 h-16 relative rounded-lg overflow-hidden bg-muted'>
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex-1 space-y-2'>
        <h4 className='font-medium text-sm leading-tight'>{item.name}</h4>
        <p className='text-sm text-muted-foreground'>
          ${item.price.toFixed(2)} each
        </p>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => updateQuantity(item.quantity - 1)}
              className='h-8 w-8 p-0'
            >
              <Minus className='h-3 w-3' />
            </Button>

            <Input
              type='number'
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(Number.parseInt(e.target.value) || 0)
              }
              className='w-16 h-8 text-center'
              min='0'
            />

            <Button
              variant='outline'
              size='sm'
              onClick={() => updateQuantity(item.quantity + 1)}
              className='h-8 w-8 p-0'
            >
              <Plus className='h-3 w-3' />
            </Button>
          </div>

          <Button
            variant='ghost'
            size='sm'
            onClick={removeItem}
            className='h-8 w-8 p-0 text-destructive hover:text-destructive'
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>

        <p className='font-semibold text-sm'>
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
