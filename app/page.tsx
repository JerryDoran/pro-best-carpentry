import Contact from '@/components/contact';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Transition from '@/components/transition';
import WhyHireMe from '@/components/why-hire-me';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className=''>
      <Hero />
      <WhyHireMe />
      <Transition />
      <Testimonials />
      <Contact />
    </main>
  );
}
