import {
  Phone,
  MapPin,
  Clock,
  Droplet,
  Paintbrush,
  Maximize,
  Hammer,
  Award,
  ThumbsUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function BathroomRemodelingPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>Pro Best Carpentry</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/bathroom-banner.jpg')] bg-cover bg-center py-20">
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='container mx-auto px-4 text-center text-white relative z-10'>
            <h2 className='text-4xl font-bold mb-4 animate-fadeIn'>
              Transform Your Bathroom with Pro Best Carpentry
            </h2>
            <p className='text-xl mb-8 animate-fadeIn'>
              Expert Bathroom Remodeling in Youngstown, OH
            </p>
            <Button size='lg' className='animate-fadeIn bg-black/50'>
              <Link href='/#contact'>Get Your Free Estimate</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Our Bathroom Remodeling Expertise
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader className='w-full'>
                  <CardTitle className='flex items-center text-lg'>
                    <Droplet className='mr-2' />
                    Custom Bathroom Designs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We create personalized bathroom designs that blend
                    functionality with style. From luxurious spa-like retreats
                    to efficient modern spaces, we bring your vision to life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Paintbrush className='mr-2' />
                    Quality Craftsmanship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our skilled craftsmen ensure every detail is perfect. We use
                    premium materials and advanced techniques to deliver
                    stunning, durable results that stand the test of time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Maximize className='mr-2' />
                    Space Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We maximize your bathroom&apos;s potential, no matter the
                    size. Our expert planning ensures efficient use of space,
                    ample storage, and a layout that enhances functionality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='bg-muted py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Comprehensive Bathroom Remodeling Services
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-semibold mb-4'>
                  We handle every aspect of your bathroom renovation
                </h3>
                <p className='mb-4'>
                  From initial design to final installation, Pro Best Carpentry
                  offers a full range of bathroom remodeling services,
                  including:
                </p>
                <ul className='list-disc list-inside mb-4'>
                  <li>Custom vanity design and installation</li>
                  <li>Tile selection and installation</li>
                  <li>Shower and bathtub upgrades</li>
                  <li>Lighting design and electrical work</li>
                  <li>Plumbing fixture installation</li>
                  <li>Painting and finishing touches</li>
                </ul>
              </div>
              <div className="bg-[url('/images/bathroom-one.jpg')] bg-cover bg-center h-64 md:h-full rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Why Choose Pro Best Carpentry for Your Bathroom Remodel
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Hammer className='mr-2' />
                    Experienced Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    With years of experience in bathroom remodeling, we have the
                    expertise to handle any project, from simple updates to
                    complete renovations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Award className='mr-2' />
                    Attention to Detail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our meticulous attention to detail ensures that every aspect
                    of your bathroom remodel is executed flawlessly, from tile
                    alignment to fixture installation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <ThumbsUp className='mr-2' />
                    Customer Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We&apos;re committed to your complete satisfaction. Our job
                    isn&apos;t done until you&apos;re thrilled with your new
                    bathroom and the entire remodeling experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='py-16 bg-primary text-primary-foreground'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Start Your Bathroom Transformation?
            </h2>
            <p className='text-xl mb-8'>
              Contact Pro Best Carpentry for a free estimate on your bathroom
              remodel today.
            </p>
            <Button size='lg' variant='secondary'>
              <Link href='/#contact'>Schedule Your Consultation</Link>
            </Button>
          </div>
        </section>

        {/* Contact Information */}
        <section className='bg-neutral-800 text-primary-foreground py-16'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <Phone className='mr-4' />
                <div>
                  <h3 className='font-semibold'>Phone</h3>
                  <p>(330) 550-0088</p>
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
