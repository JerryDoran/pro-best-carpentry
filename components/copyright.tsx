import Link from 'next/link';

export default function Copyright() {
  return (
    <p className='text-center text-xs'>
      Copyright &copy; {new Date().getFullYear()} Pro Best Carpentry. All rights
      reserved.
    </p>
  );
}
