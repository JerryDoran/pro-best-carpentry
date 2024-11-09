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
    <Button
      asChild
      size='sm'
      variant='ghost'
      className={cn(
        'w-full lg:w-auto justify-between font-normal hover:bg-neutral-100 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-neutral-800 focus:bg-white/20 transition text-md',
        isActive ? 'bg-neutral-200 ' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
