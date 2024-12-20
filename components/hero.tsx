import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='relative min-h-[65vh] bg-home-img bg-center bg-cover bg-no-repeat lg:bg-fixed'>
        <div className='absolute inset-0 bg-black opacity-40 h-[100%] w-[100%]' />
        <section className='flex flex-col items-center justify-center gap-6 relative text-white z-10 p-4'>
          <h1 className='opacity-0 animate-fadeIn text-4xl md:text-7xl font-bold mt-8 text-center'>
            Pro Best Carpentry
          </h1>
          <p className='opacity-0 animate-fadeIn delay-200 mt-4 text-lg md:text-2xl text-center max-w-4xl mx-auto shadow-md'>
            I can handle all of your construction / carpentry needs. I offer
            high quality work at affordable prices.
          </p>
          <p className='opacity-0 animate-fadeIn delay-300 mt-2 text-base md:text-xl text-center max-w-4xl mx-auto'>
            From custom woodwork to home renovations, my expertise covers every
            corner of your home.
          </p>
          <div className='opacity-0 animate-fadeIn delay-500 w-70 text-xl rounded-md bg-white/50 text-neutral-800 py-6 px-6 font-bold mt-6'>
            Call Now{' '}
            <span className='text-base font-medium'> 330-550-0088</span>
          </div>
        </section>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-5 w-full text-white animate-fadeIn delay-500 opacity-0'>
        <Link
          href='/carpentry'
          className='flex-1 bg-neutral-400 h-[200px] flex justify-center items-center p-6 relative overflow-hidden link'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom text-center'>
            Fine Carpentry
          </h2>
        </Link>
        <Link
          href='/kitchen'
          className='flex-1 bg-neutral-500 h-[200px] flex justify-center items-center p-6 relative overflow-hidden link'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom text-center'>
            Kitchen Remodeling
          </h2>
        </Link>
        <Link
          href='/bathroom'
          className='flex-1 bg-neutral-600 h-[200px] flex justify-center items-center p-6 relative overflow-hidden link'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom text-center'>
            Bathroom Remodeling
          </h2>
        </Link>
        <Link
          href='/custom'
          className='flex-1 bg-neutral-700 h-[200px] flex justify-center items-center p-6 relative overflow-hidden link'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom text-center'>
            Custom Renovations
          </h2>
        </Link>
        <Link
          href='/projects'
          className='flex-1 bg-neutral-800 h-[200px] flex justify-center items-center p-6 relative overflow-hidden link'
        >
          <h2 className='text-white text-base uppercase relative z-10 text-custom text-center'>
            My Projects
          </h2>
        </Link>
      </div>
    </>
  );
}
