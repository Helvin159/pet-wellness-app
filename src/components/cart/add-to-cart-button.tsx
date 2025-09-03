'use client';

import { Button } from '@/src/components/ui/button';
import { useCart } from '@/src/contexts/cart-context';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  images: Array<{ url: string; alt: string }>;
  category: string;
}

interface AddToCartButtonProps {
  product: Product;
  disabled?: boolean;
  size?: 'sm' | 'default' | 'lg';
}

export function AddToCartButton({
  product,
  disabled = false,
  size = 'default'
}: AddToCartButtonProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.url || '/placeholder.svg',
        category: product.category
      }
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={disabled}
      size={size}
      className='gap-2'
    >
      {isAdded ? (
        <>
          <Check className='h-4 w-4' />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className='h-4 w-4' />
          Add to Cart
        </>
      )}
    </Button>
  );
}
