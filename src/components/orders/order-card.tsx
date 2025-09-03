import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';
import { Separator } from '@/src/components/ui/separator';
import { Calendar, MapPin, Package } from 'lucide-react';

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

interface OrderCardProps {
  order: Order;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusLabels = {
  pending: 'Pending',
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled'
};

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div>
            <h3 className='font-semibold text-lg'>Order {order.orderNumber}</h3>
            <div className='flex items-center gap-4 text-sm text-muted-foreground mt-1'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
              <div className='flex items-center gap-1'>
                <Package className='h-4 w-4' />
                {order.items.length} item{order.items.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Badge className={statusColors[order.status]}>
              {statusLabels[order.status]}
            </Badge>
            <div className='text-right'>
              <p className='font-semibold'>${order.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        {/* Order Items */}
        <div className='space-y-3'>
          {order.items.map((item, index) => (
            <div key={index} className='flex gap-3'>
              <div className='w-12 h-12 relative rounded bg-muted overflow-hidden'>
                <Image
                  src={item.product.images[0]?.url || '/placeholder.svg'}
                  alt={item.product.images[0]?.alt || item.product.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex-1'>
                <p className='font-medium text-sm'>{item.product.name}</p>
                <p className='text-xs text-muted-foreground'>
                  Qty: {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className='text-sm font-medium'>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <Separator />

        {/* Shipping Address */}
        <div className='flex items-start gap-2'>
          <MapPin className='h-4 w-4 text-muted-foreground mt-0.5' />
          <div className='text-sm'>
            <p className='font-medium'>Shipping Address</p>
            <p className='text-muted-foreground'>
              {order.shippingAddress.street}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.state} {order.shippingAddress.zipCode}
            </p>
          </div>
        </div>

        <div className='flex gap-2 pt-2'>
          <Link href={`/account/orders/${order.id}`}>
            <Button variant='outline' size='sm' className='bg-transparent'>
              View Details
            </Button>
          </Link>
          {order.status === 'delivered' && (
            <Button variant='outline' size='sm' className='bg-transparent'>
              Reorder
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
