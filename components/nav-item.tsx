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
        'w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white/90 focus:bg-white/20 transition text-md',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
