export default function Transition() {
  return (
    <div className='relative bg-transition-img bg-center bg-cover bg-no-repeat lg:bg-fixed'>
      <div className='absolute inset-0 bg-black opacity-40 h-[100%] w-[100%]' />
      <section className='h-[100%] w-[100%] flex flex-col items-center justify-center gap-6 relative text-white z-10 p-4 py-32'>
        <h1 className='text-2xl md:text-4xl font-bold mt-8 text-center'>
          Trust Your Home With Professional Quality Work
        </h1>

        <div className='w-70 text-lg rounded-md bg-white/50 text-neutral-800 py-2 px-2 font-bold mt-6'>
          <p className='text-center'>
            Hire a trusted professional contractor in the Youngstown, Ohio area
          </p>
        </div>
      </section>
    </div>
  );
}
