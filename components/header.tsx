import Navigation from '@/components/navigation';
import Logo from '@/components/logo';
import Social from '@/components/social';

export default function Header() {
  return (
    <div className='sticky top-0 z-10'>
      <Social />
      <div className='flex items-center justify-between lg:px-8 px-4 pt-5 bg-neutral-50'>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
