import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Hammer,
  Home,
  Building2,
  Ruler,
  PaintBucket,
  Wrench,
} from 'lucide-react';
import { ReactNode } from 'react';
import aboutBanner from '@/assests/images/about-banner.webp';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='relative w-full h-64 md:h-96'>
        <Image
          src={aboutBanner}
          alt='Carpentry workshop banner'
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white text-center animate-fadeIn'>
            Expert Carpentry Solutions
          </h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        <header className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>About Our Services</h2>
          <p className='text-xl text-muted-foreground'>
            Expert craftsmanship for all your residential and commercial needs
          </p>
        </header>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6'>Our Expertise</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ExperienceCard
              icon={<Home className='h-6 w-6' />}
              title='Residential Services'
              description='From kitchen renovations to custom built-ins, we bring quality craftsmanship to your home.'
            />
            <ExperienceCard
              icon={<Building2 className='h-6 w-6' />}
              title='Commercial Projects'
              description='We offer professional carpentry solutions for businesses, offices, and retail spaces.'
            />
            <ExperienceCard
              icon={<Hammer className='h-6 w-6' />}
              title='Structural Work'
              description='Expert framing and structural repairs to ensure the integrity of your building.'
            />
            <ExperienceCard
              icon={<Ruler className='h-6 w-6' />}
              title='Finish Carpentry'
              description='Precision and attention to detail in all our finish work, from trim to custom cabinetry.'
            />
            <ExperienceCard
              icon={<PaintBucket className='h-6 w-6' />}
              title='Comprehensive Renovations'
              description='Full-service bathroom and kitchen renovations to transform your space.'
            />
            <ExperienceCard
              icon={<Wrench className='h-6 w-6' />}
              title='Diverse Skillset'
              description='From drywall and flooring to tile work, we handle all aspects of your project.'
            />
          </div>
        </section>

        <section className='bg-muted p-8 rounded-lg'>
          <h2 className='text-2xl font-semibold mb-6'>
            Our Commitment to Quality
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We take pride in our work, ensuring every project is completed
                  with the highest standards of craftsmanship. Our attention to
                  detail and passion for carpentry shines through in every nail,
                  joint, and finish.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your satisfaction is our top priority. We work closely with
                  our clients to understand their vision and deliver results
                  that exceed expectations. Our team is committed to clear
                  communication and reliability throughout the project.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='mt-12 text-center'>
          <h2 className='text-2xl font-semibold mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='mb-6'>
            Contact us today for a free consultation and let's bring your
            carpentry dreams to life!
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Badge variant='secondary' className='text-lg py-2 px-4'>
              Residential
            </Badge>
            <Badge variant='secondary' className='text-lg py-2 px-4'>
              Commercial
            </Badge>
            <Badge variant='secondary' className='text-lg py-2 px-4'>
              Licensed & Insured
            </Badge>
          </div>
        </section>
      </div>
    </div>
  );
}

type ExperienceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ExperienceCard({ icon, title, description }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
