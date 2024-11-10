import Header from '@/components/header';
import Hero from '@/components/hero';
import WhyHireMe from '@/components/why-hire-me';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className=''>
      <div className='relative bg-home-img bg-cover bg-no-repeat bg-fixed '>
        <div className='absolute inset-0 bg-black opacity-40 h-[65vh]' />
        <Hero />
      </div>
      <WhyHireMe />
    </main>
  );
}
