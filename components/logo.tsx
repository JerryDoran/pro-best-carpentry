import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='items-center flex pb-4'>
        <Image src='/images/logo.jpg' alt='Logo' height={60} width={60} />
        <p className='font-semibold lg:text-2xl text-xl ml-2.5 text-gray-800'>
          Pro Best Carpentry
        </p>
      </div>
    </Link>
  );
}
