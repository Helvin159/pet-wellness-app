'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Separator } from '@/src/components/ui/separator';
import { useCart } from '@/src/contexts/cart-context';
import { useAuth } from '@/src/contexts/auth-context';
import { CreditCard, Lock } from 'lucide-react';

export function CheckoutForm() {
  const { state, dispatch } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create order in Payload CMS
      const orderData = {
        customer: user?.id,
        items: state.items.map((item) => ({
          product: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        total: state.total + (state.total > 50 ? 0 : 5.99) + state.total * 0.08,
        status: 'pending',
        shippingAddress: {
          street: (e.target as any).address.value,
          city: (e.target as any).city.value,
          state: (e.target as any).state?.value || 'N/A',
          zipCode: (e.target as any).zipCode.value,
          country: 'USA'
        },
        orderNumber: `PW-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
      };

      // In a real app, this would make an API call to create the order
      console.log('Creating order:', orderData);

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and redirect to success page
      dispatch({ type: 'CLEAR_CART' });
      window.location.href = '/checkout/success';
    } catch (error) {
      console.error('Order creation failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-muted-foreground'>Your cart is empty</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Shipping Information */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Shipping Information</h3>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' name='firstName' required />
          </div>
          <div>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input id='lastName' name='lastName' required />
          </div>
        </div>

        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            defaultValue={user?.email || ''}
            required
          />
        </div>

        <div>
          <Label htmlFor='address'>Address</Label>
          <Input id='address' name='address' required />
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div>
            <Label htmlFor='city'>City</Label>
            <Input id='city' name='city' required />
          </div>
          <div>
            <Label htmlFor='state'>State</Label>
            <Input id='state' name='state' />
          </div>
          <div>
            <Label htmlFor='zipCode'>ZIP Code</Label>
            <Input id='zipCode' name='zipCode' required />
          </div>
        </div>
      </div>

      <Separator />

      {/* Payment Information */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold flex items-center gap-2'>
          <CreditCard className='h-5 w-5' />
          Payment Information
        </h3>

        <div>
          <Label htmlFor='cardNumber'>Card Number</Label>
          <Input
            id='cardNumber'
            name='cardNumber'
            placeholder='1234 5678 9012 3456'
            required
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='expiry'>Expiry Date</Label>
            <Input id='expiry' name='expiry' placeholder='MM/YY' required />
          </div>
          <div>
            <Label htmlFor='cvv'>CVV</Label>
            <Input id='cvv' name='cvv' placeholder='123' required />
          </div>
        </div>

        <div>
          <Label htmlFor='cardName'>Name on Card</Label>
          <Input id='cardName' name='cardName' required />
        </div>
      </div>

      <Button
        type='submit'
        className='w-full'
        size='lg'
        disabled={isProcessing}
      >
        {isProcessing ? (
          'Processing...'
        ) : (
          <>
            <Lock className='h-4 w-4 mr-2' />
            Complete Order
          </>
        )}
      </Button>

      <p className='text-xs text-muted-foreground text-center'>
        Your payment information is secure and encrypted
      </p>
    </form>
  );
}
