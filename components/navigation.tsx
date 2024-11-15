'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useMedia } from 'react-use';

import NavItem from '@/components/nav-item';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

import Image from 'next/image';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];
const mobileRoutes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/',
    label: 'Remodeling',
    remServices: [
      { href: '/carpentry', label: 'Fine Carpentry' },
      { href: '/kitchen', label: 'Kitchen Remodeling' },
      { href: '/bathroom', label: 'Bathroom Remodeling' },
      { href: '/custom', label: 'Custom Renovations' },
    ],
  },

  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia('(max-width: 1024px)', false);

  function onClick(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant='outline'
            size='sm'
            className='font-normal bg-transparent hover:bg-gray-900 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition group'
          >
            {/* h4 w4 can now be called size-4 */}
            <Menu className='size-5 text-gray-900 group-hover:text-white' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='px-2 bg-neutral-100 border-none z-50 '
        >
          <nav className='flex flex-col gap-y-2 pt-6'>
            {mobileRoutes.map((route) => {
              if (route.label === 'Remodeling') {
                return (
                  <>
                    <span
                      className='text-sm ml-4 uppercase py-2 text-gray-500 underline'
                      key={route.label}
                    >
                      {route.label}
                    </span>
                    {route.remServices?.map((service) => (
                      <Button
                        variant={
                          route.href === pathname ? 'secondary' : 'ghost'
                        }
                        onClick={() => onClick(service.href)}
                        key={service.label}
                        className='ml-10 justify-start  hover:bg-neutral-200 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition text-neutral-800 uppercase'
                      >
                        {service.label}
                      </Button>
                    ))}
                  </>
                );
              }
              return (
                <Button
                  key={route.href}
                  variant={route.href === pathname ? 'secondary' : 'ghost'}
                  onClick={() => onClick(route.href)}
                  className='justify-start  hover:bg-neutral-200 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition text-neutral-800 uppercase'
                >
                  {route.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className='hidden lg:flex items-center gap-x-4 overflow-x-auto pb-2'>
      {routes.map((route) => (
        <NavItem
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
}
