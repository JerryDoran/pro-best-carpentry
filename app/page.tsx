import Header from '@/components/header';
import Hero from '@/components/hero';
import WhyHireMe from '@/components/why-hire-me';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className=''>
      <Hero />
      <WhyHireMe />
    </main>
  );
}
