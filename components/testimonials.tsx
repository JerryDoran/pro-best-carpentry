import { testimonials } from '@/site-data/data';
import { RiDoubleQuotesL } from 'react-icons/ri';

export default function Testimonials() {
  return (
    <section className='bg-neutral-100 pb-6 pt-12'>
      <h1 className='text-3xl font-bold md:text-4xl text-center'>
        Customer Testimonials
      </h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto mt-10 p-4 '>
        {testimonials.map((item) => {
          return (
            <div
              key={item.name}
              className='rounded-md bg-white shadow-md h-[400px] w-auto row-span-4 grid grid-rows-subgrid gap-4 p-4'
            >
              <RiDoubleQuotesL size='40' color='#abaeae' />
              <div className='max-w-xl text-balance text-neutral-500'>
                <p className='prose'>{item.review}</p>
              </div>
              <div className='flex flex-col'>
                <h2 className='prose text-sm'>by {item.name}</h2>

                <p className='prose text-sm italic'>{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
