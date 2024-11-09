import { Phone } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa6';

export default function Social() {
  return (
    <div className='flex justify-between items-center text-white bg-gray-900 p-4 px-9'>
      <span className='text-xs flex items-center gap-2'>
        <Phone className='size-4' />
        (330)550-0088
        <span className='text-xs ml-4 hidden sm:block'>FREE ESTIMATES</span>
      </span>
      <Link
        href='https://www.facebook.com/ProBestCarpentry/'
        className='flex items-center gap-2'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebook />
        <span className='text-xs'>Follow us on facebook</span>
      </Link>
    </div>
  );
}
