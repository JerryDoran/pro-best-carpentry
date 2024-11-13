import Copyright from '@/components/copyright';

export default function Footer() {
  return (
    <footer className='h-24 p-4 bg-neutral-800 text-white flex justify-center items-center'>
      {/* <Image src='/images/logo.jpg' alt='Logo' height={60} width={60} /> */}
      <Copyright />
    </footer>
  );
}
