import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export default function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'w-full lg:w-auto justify-between font-normal hover:bg-neutral-200 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-neutral-800 transition text-md px-4 py-2 rounded-lg',
        isActive ? 'text-indigo-700 ' : 'bg-transparent'
      )}
    >
      {label}
    </Link>
  );
}
