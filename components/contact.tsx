import roadIcon from '@/assets/icons/road-icon.png';
import phoneIcon from '@/assets/icons/phone-icon.png';
import mailIcon from '@/assets/icons/mail-icon.png';
import clockIcon from '@/assets/icons/clock-icon.png';
import priceIcon from '@/assets/icons/price-icon.png';
import googleReview from '@/assets/images/google-review.jpg';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className='pb-6 pt-12 grid md:grid-cols-2 gap-4 max-w-6xl mx-auto px-6'>
      <div>
        <h1 className='text-2xl font-semibold'>
          Home Remodeling Contractor in Youngstown, OH
        </h1>
        <p className='prose text-sm text-gray-500 mt-4'>
          We offer a wide range of services. From custom woodwork, kitchens, and
          bathrooms, to more involved home renovations. We have been helping
          homeowners transform their houses into their perfect living space.
        </p>
        <p className='prose text-sm text-gray-500 mt-4'>
          Count on us to do the same to your home. Call today to speak with an
          experienced local contractor in the Youngstown, Ohio area.
        </p>
      </div>
      <div className='bg-neutral-100 shadow-md rounded-md p-4 grid relative grid-cols-2'>
        <ul className='py-4 flex flex-col gap-4'>
          <h2 className='text-xl font-semibold'>Contact Info</h2>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={roadIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              Youngstown, OH, United States
            </a>
          </li>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={phoneIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              (330) 550-0088
            </a>
          </li>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={mailIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              ProBestCarpentry@gmail.com
            </a>
          </li>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={clockIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              Always Open
            </a>
          </li>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={priceIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              Price Range - Call for a free estimate
            </a>
          </li>
          <li className='text-sm'>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:underline'
            >
              <Image
                src={roadIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              Youngstown, OH, United States
            </a>
          </li>
        </ul>
        <div className='absolute top-10 right-5'>
          <a href='https://google.com'>
            <Image
              src={googleReview}
              alt='location icon'
              width={120}
              height={120}
              className='rounded-md'
            />
          </a>
        </div>
      </div>
    </section>
  );
}
// Price Range · $$

// 76% recommend (6 Reviews)
