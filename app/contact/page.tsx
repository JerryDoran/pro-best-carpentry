import { Phone, MapPin, Clock, Mail, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <main>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/contact.jpg')] bg-cover bg-center py-20">
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='container mx-auto px-4 text-center text-white relative z-10'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 animate-fadeIn'>
              Contact Pro Best Carpentry
            </h2>
            <p className='text-xl mb-8 animate-fadeIn'>
              Home Remodeling Contractor in Youngstown, OH
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <p className='text-xl mb-8 text-gray-500'>
                We offer a wide range of services. From custom woodwork,
                kitchens, and bathrooms, to more involved home renovations. We
                have been helping homeowners transform their houses into their
                perfect living space.
              </p>
              <p className='text-xl mb-8 text-gray-500'>
                Count on us to do the same to your home. Call today to speak
                with an experienced local contractor in the Youngstown, Ohio
                area.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='bg-muted py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Contact Info
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <MapPin className='mr-2' />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Youngstown, OH, United States</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Phone className='mr-2' />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>(330) 550-0088</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Mail className='mr-2' />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>ProBestCarpentry@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Clock className='mr-2' />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Mon-Sun: 9am-5pm</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <DollarSign className='mr-2' />
                    Price Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Call for a free estimate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='py-16 bg-primary text-primary-foreground'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Start Your Home Transformation?
            </h2>
            <p className='text-xl mb-8'>
              Contact Pro Best Carpentry for a free estimate on your home
              remodeling project today.
            </p>
            <Button size='lg' variant='secondary'>
              <Link href='tel:+13305500088'>Call (330) 550-0088</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
