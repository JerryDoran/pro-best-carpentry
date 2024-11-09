'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

export default function WhyHireMe() {
  // Refs for observing sections
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      threshold: 0.6, // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the desired animation from the data attribute
          const animationType = entry.target.getAttribute('data-animation');
          if (animationType === 'slideInLeft') {
            entry.target.classList.add('animate-slideInLeft', 'opacity-100');
          } else if (animationType === 'slideInRight') {
            entry.target.classList.add('animate-slideInRight', 'opacity-100');
          }
        }
      });
    }, options);

    // Observe each section
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <section className='py-20 text-center px-4 bg-white'>
      <div className=' max-w-7xl mx-auto'>
        <div className='space-y-12'>
          {/* Feature 1 */}
          <div
            className='flex flex-col md:flex-row items-center md:text-left opacity-0 transition-opacity duration-800 ease-out'
            ref={sectionRefs[0]}
            data-animation='slideInLeft'
            key='feature-1'
          >
            <div className='md:w-1/2 md:pr-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Uncover Your Home&apos;s True Potential
              </h3>
              <p className='text-sm text-gray-700 max-w-xl'>
                Still searching for the perfect pieces to complete your home?
                Why not create custom ones? Pro Best Carpentry specializes in
                building and installing custom cabinets, bookshelves, mantles,
                bars, furniture, and more, we take on remodeling and handyman
                projects to make your vision a reality. Whatever you need, we’ll
                make it happen.
              </p>
              <p className='text-sm text-gray-700 max-w-xl mt-4'>
                Thinking about upgrading your backyard? Pro Best Carpentry also
                handles outdoor project like custom decks, planters, pergolas,
                and can even repair your porch!
              </p>
              <p className='text-sm text-gray-700 max-w-xl mt-4'>
                For a detail-oriented contractor in Youngstown, Ohio trust Pro
                Best Carpentry to bring your renovation or repair project to
                life. Call us at 330-550-0088 for a free quote today!
              </p>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'>
              <Image
                src='/images/kitchen-one.jpg'
                alt='Handyman showing tools and experience'
                width={600}
                height={300}
                className='rounded-lg shadow-md'
                priority
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className='flex flex-col md:flex-row-reverse items-center md:text-left opacity-0 transition-opacity duration-800 ease-out'
            ref={sectionRefs[1]}
            data-animation='slideInRight'
            key='feature-2'
          >
            <div className='md:w-1/2 md:pl-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Personalized services to match your home’s unique style
              </h3>
              <p className='text-sm text-gray-700 max-w-xl'>
                Your home is a reflection of your unique style, and we’re here
                to make sure it stays that way. At Pro Best Carpentry, we’re all
                about providing the work you need to keep your home looking just
                how you envision it.
              </p>
              <p className='text-sm text-gray-700 max-w-xl mt-4'>
                We know trust matters, which is why we’re always on time,
                honest, and meticulous about our work. We don’t just promise
                quality—we deliver it, and our word is our bond.
              </p>
              <p className='text-sm text-gray-700 max-w-xl mt-4'>
                A lot of our projects come through word-of-mouth, which we take
                as the highest compliment. Finding a contractor you can rely on
                isn’t always easy. But when you choose Pro Best Carpentry,
                you’re getting exceptional work at a fair price every time.
              </p>
              <p className='text-sm text-gray-700 max-w-xl mt-4'>
                Got custom ideas in mind? We’d love to bring them to life. Reach
                out to us today to chat about your project and let’s get
                started!
              </p>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'>
              <Image
                src='/images/flooring-one.jpg'
                alt='Handyman ready for a fast response'
                width={500}
                height={200}
                className='rounded-lg shadow-md w-[600px] h-[400px] object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
