import {
  Phone,
  MapPin,
  Clock,
  ChefHat,
  Paintbrush,
  Ruler,
  Hammer,
  Award,
  ThumbsUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function KitchenRemodelingPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>Probest Carpentry</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/kitchen-parallax.jpg')] bg-cover bg-center py-20">
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='container mx-auto px-4 text-center text-white relative z-10'>
            <h2 className='text-4xl font-bold mb-4 animate-fadeIn'>
              Transform Your Kitchen Into a Culinary Haven
            </h2>
            <p className='text-xl mb-8 animate-fadeIn'>
              Expert Kitchen Remodeling in Youngstown, OH
            </p>
            <Button size='lg' className='animate-fadeIn bg-black/50'>
              <Link href='/#contact'>Get a Free Consultation</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Our Expertise
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader className='w-full'>
                  <CardTitle className='flex items-center'>
                    <ChefHat className='mr-2' />
                    Custom Designs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We create bespoke kitchen designs tailored to your lifestyle
                    and preferences. From modern minimalist to classic elegance,
                    we bring your vision to life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Paintbrush className='mr-2' />
                    Quality Craftsmanship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our skilled craftsmen ensure every detail is perfect. We use
                    premium materials and cutting-edge techniques to deliver
                    stunning, durable results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Ruler className='mr-2' />
                    Efficient Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We optimize your kitchen layout for maximum functionality.
                    Our expert planning ensures a smooth workflow and ample
                    storage in your new kitchen.
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
              Comprehensive Kitchen Remodels
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-semibold mb-4'>
                  We handle every aspect of your kitchen renovation
                </h3>
                <p className='mb-4'>
                  From initial planning to final installation, Probest Carpentry
                  offers a full range of services, including:
                </p>
                <ul className='list-disc list-inside mb-4'>
                  <li>Custom cabinetry design and installation</li>
                  <li>Countertop selection and fitting</li>
                  <li>Flooring installation</li>
                  <li>Lighting design and electrical work</li>
                  <li>Plumbing and appliance installation</li>
                  <li>Painting and finishing touches</li>
                </ul>
              </div>
              <div className="bg-[url('/images/cabinets.jpg')] bg-cover bg-center h-64 md:h-full rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Why Choose Probest Carpentry
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Hammer className='mr-2' />
                    Experience Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    With several years in the industry, we have the expertise to
                    handle any kitchen remodeling challenge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <Award className='mr-2' />
                    Details Matter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our attention to the finest details is one of our best
                    qualities to ensure a smooth kitchen remodel.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <ThumbsUp className='mr-2' />
                    100% Satisfaction Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We&apos;re not happy until you&apos;re thrilled with your
                    new kitchen. Our commitment to quality ensures your
                    satisfaction.
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
              Ready to Start Your Kitchen Transformation?
            </h2>
            <p className='text-xl mb-8'>
              Contact Pro Best Carpentry for a free design consultation
              today.
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
                  <p>(330)555-1234</p>
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
