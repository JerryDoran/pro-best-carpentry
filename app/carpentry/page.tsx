import { Phone, MapPin, Clock, Hammer, BookOpen, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function FineCarpentryPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>Pro Best Carpentry</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/carpentryBanner.jpg')] bg-cover bg-bottom py-20">
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='container mx-auto px-4 text-center text-white z-20'>
            <h2 className='text-4xl font-bold mb-4 animate-fadeIn'>
              Refine Your Home With Custom Wood Additions
            </h2>
            <p className='text-xl mb-8 animate-fadeIn'>
              Carpentry service in Youngstown, OH
            </p>
            <Button size='lg' className='animate-fadeIn bg-black/50'>
              <Link href='/#contact'>Get a Free Quote</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Our Carpentry Services
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Hammer className='mr-2' />
                    Custom Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We build custom features exactly how you envision them. From
                    molding to cabinets and bookcases, we turn your design ideas
                    into tasteful wood features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <BookOpen className='mr-2' />
                    Endless Possibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Discover the endless customization possibilities for your
                    home. We can build any wood feature you want, including
                    decks and mantels for your fireplace.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Ruler className='mr-2' />
                    Timeless Additions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Wood makes a timeless addition to any home. Our custom work
                    ensures your home stands out with unique, high-quality
                    carpentry that matches your vision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Cabinets Section */}
        <section className='bg-muted py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Custom Carpentry Work
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-semibold mb-4 prose'>
                  Get custom installs for any area of your living space
                </h3>
                <p className='mb-4 prose'>
                  From wood cabinets to built in book cases make your home look
                  great and more organized. Probest Carpentry will build and
                  install everything from:
                </p>
                <ul className='list-disc list-inside mb-4 prose'>
                  <li>Built-In Bookcases</li>
                  <li>Mantles</li>
                  <li>Molding</li>
                  <li>Benches</li>
                  <li>Desks</li>
                  <li>Banquets</li>
                </ul>
              </div>
              <div className="bg-[url('/images/tools.jpg')] bg-cover bg-center h-64 md:h-full rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='py-16'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Hire Pro Best Carpentry to build your custom wood additions
            </h2>
            <p className='text-xl mb-8'>
              Schedule a custom installation today.
            </p>
            <Button size='lg'>
              <Link href='/#contact'>Schedule Your Installation</Link>
            </Button>
          </div>
        </section>

        {/* Contact Information */}
        <section className='bg-neutral-800 text-primary-foreground py-16 mx-auto '>
          <div className='container px-4mx-auto'>
            <div className='grid md:grid-cols-3 gap-8 mx-auto'>
              <div className='flex items-center justify-center'>
                <Phone className='mr-4' />
                <div>
                  <h3 className='font-semibold'>Phone</h3>
                  <p>(330)550-0088</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <MapPin className='mr-4' />
                <div>
                  <h3 className='font-semibold'>Location</h3>
                  <p>Youngstown, Ohio</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <Clock className='mr-4' />
                <div>
                  <h3 className='font-semibold'>Hours</h3>
                  <p>Mon-Sun: 9am-5pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
