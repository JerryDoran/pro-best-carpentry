import Link from 'next/link';

export default function Copyright() {
  return (
    <p className='text-center text-xs'>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </p>
  );
}
