import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { CartSheet } from '@/src/components/cart/cart-sheet';
import { UserMenu } from '@/src/components/auth/user-menu';
import { Heart, Menu, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
              <Heart className='h-5 w-5 text-primary-foreground' />
            </div>
            <span className='font-bold text-lg'>Pet Wellness</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Products
            </Link>
            <Link
              href='/categories'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Categories
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='sm' className='hidden sm:flex gap-2'>
              <Search className='h-4 w-4' />
              Search
            </Button>

            <CartSheet />

            <UserMenu />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='sm' className='md:hidden'>
                  <Menu className='h-4 w-4' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right'>
                <nav className='flex flex-col gap-4 mt-8'>
                  <Link
                    href='/'
                    className='text-lg font-medium hover:text-primary transition-colors'
                  >
                    Home
                  </Link>
                  <Link
                    href='/products'
                    className='text-lg font-medium hover:text-primary transition-colors'
                  >
                    Products
                  </Link>
                  <Link
                    href='/categories'
                    className='text-lg font-medium hover:text-primary transition-colors'
                  >
                    Categories
                  </Link>
                  <Link
                    href='/about'
                    className='text-lg font-medium hover:text-primary transition-colors'
                  >
                    About
                  </Link>
                  <Link
                    href='/contact'
                    className='text-lg font-medium hover:text-primary transition-colors'
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
