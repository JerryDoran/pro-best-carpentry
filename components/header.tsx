import Navigation from '@/components/navigation';
import Logo from '@/components/logo';

export default function Header() {
  return (
    <div className='bg-black flex items-center justify-between lg:px-8 px-4 pt-5'>
      <Logo />
      <Navigation />
    </div>
  );
}
