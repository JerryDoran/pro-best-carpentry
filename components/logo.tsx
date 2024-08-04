import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='items-center flex'>
        <Image src='/ds-logo.png' alt='Logo' height={40} width={40} />
        <p className='font-semibold lg:text-2xl text-xl ml-2.5 text-white'>
          Doran Software
        </p>
      </div>
    </Link>
  );
}
