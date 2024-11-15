import {
  Phone,
  MapPin,
  Clock,
  Home,
  PenToolIcon as Tool,
  Briefcase,
  Users,
  ThumbsUp,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function CustomRenovationServices() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>Pro Best Carpentry</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[url('/images/tile.jpg')] bg-cover bg-center py-20">
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='container mx-auto px-4 text-center text-white relative z-10'>
            <h2 className='text-4xl font-bold mb-4 animate-fadeIn'>
              Custom Renovation Services by Pro Best Carpentry
            </h2>
            <p className='text-xl mb-8 animate-fadeIn'>
              Transforming Homes in Youngstown, OH with Expert Craftsmanship
            </p>
            <Button size='lg' className='animate-fadeIn bg-black/50'>
              <Link href='/#contact'>Get Your Free Consultation</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Our Custom Renovation Expertise
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Home className='mr-2' />
                    Whole Home Renovations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    From top to bottom, we can transform your entire home. Our
                    comprehensive approach ensures a cohesive design and
                    seamless execution across all rooms and spaces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Tool className='mr-2' />
                    Kitchen & Bath Remodels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Elevate your most-used spaces with our expert kitchen and
                    bathroom renovations. We blend functionality with style to
                    create stunning, efficient areas tailored to your needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Briefcase className='mr-2' />
                    Custom Carpentry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our skilled craftsmen can create bespoke carpentry solutions
                    for any part of your home, from custom cabinetry to unique
                    built-ins and architectural details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='bg-muted py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Our Custom Renovation Process
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-semibold mb-4'>
                  We ensure a smooth renovation experience from start to finish
                </h3>
                <ol className='list-decimal list-inside mb-4 space-y-2'>
                  <li>Initial consultation and needs assessment</li>
                  <li>Custom design and planning</li>
                  <li>Material selection and budgeting</li>
                  <li>Project scheduling and preparation</li>
                  <li>Expert construction and installation</li>
                  <li>Quality control and final walkthrough</li>
                </ol>
              </div>
              <div className="bg-[url('/images/custom-renovation.jpg')] bg-cover bg-center h-64 md:h-full rounded-lg" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Why Choose Pro Best Carpentry for Your Custom Renovation
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Users className='mr-2' />
                    Experienced Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    Our team of skilled professionals brings years of experience
                    and expertise to every project, ensuring high-quality
                    results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <ThumbsUp className='mr-2' />
                    Customer-Centric Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We prioritize your vision and satisfaction, working closely
                    with you throughout the renovation process to exceed your
                    expectations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-lg'>
                    <Zap className='mr-2' />
                    Innovative Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='prose'>
                    We stay up-to-date with the latest trends and technologies
                    in home renovation, offering innovative solutions to enhance
                    your living space.
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
              Ready to Start Your Custom Renovation?
            </h2>
            <p className='text-xl mb-8'>
              Contact Pro Best Carpentry for a personalized consultation on your
              home transformation.
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
