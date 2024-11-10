import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <section className='h-[65vh] flex flex-col items-center justify-center gap-6 relative text-white z-10 p-4'>
        <h1 className='opacity-0 animate-fadeIn text-4xl md:text-7xl font-bold mt-8 text-center'>
          Pro Best Carpentry
        </h1>
        <p className='opacity-0 animate-fadeIn delay-200 mt-4 text-lg md:text-2xl text-center max-w-4xl mx-auto shadow-md'>
          We can handle all of your construction / carpentry needs. We offer
          high quality work at affordable prices.
        </p>
        <p className='opacity-0 animate-fadeIn delay-300 mt-2 text-base md:text-lg text-center max-w-4xl mx-auto'>
          From custom woodwork to home renovations, our expertise covers every
          corner of your home.
        </p>
        <div className='opacity-0 animate-fadeIn delay-500 w-70 text-xl rounded-md bg-white/50 text-neutral-800 py-6 px-6 font-bold mt-6'>
          Call Now <span className='text-base font-medium'> 330-550-0088</span>
        </div>
      </section>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full text-white animate-fadeIn delay-700 opacity-0'>
        <Link
          href='/'
          className='flex-1 bg-neutral-300 h-[200px] flex justify-center items-center p-6 group relative overflow-hidden'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom'>
            Fine Carpentry
          </h2>
        </Link>
        <Link
          href='/'
          className='flex-1 bg-neutral-500 h-[200px] flex justify-center items-center p-6 group relative overflow-hidden'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom'>
            Kitchen Remodeling
          </h2>
        </Link>
        <Link
          href='/'
          className='flex-1 bg-neutral-700 h-[200px] flex justify-center items-center p-6 group relative overflow-hidden'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom'>
            Bathroom Remodeling
          </h2>
        </Link>
        <Link
          href='/'
          className='flex-1 bg-neutral-800 h-[200px] flex justify-center items-center p-6 group relative overflow-hidden'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom'>
            Custom Renovations
          </h2>
        </Link>
      </div>
    </div>
  );
}
