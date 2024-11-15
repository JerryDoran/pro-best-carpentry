import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Hammer,
  Home,
  Building2,
  Ruler,
  PaintBucket,
  Wrench,
  Drill,
  Cog,
} from 'lucide-react';
import { ReactNode } from 'react';
import granite from '@/assets/images/granite.jpeg';
import kitchen from '@/assets/images/kitchen.jpg';
import office from '@/assets/images/office.jpg';
import framings from '@/assets/images/framings.jpg';
import outdoor from '@/assets/images/outdoor.jpg';
import bathroom from '@/assets/images/bathroom.jpg';
import general from '@/assets/images/general.jpg';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='relative w-full h-64 md:h-96'>
        <Image
          src={granite}
          alt='Carpentry workshop banner'
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white text-center animate-fadeIn'>
            Our Carpentry Services
          </h1>
        </div>
      </div>

      <main className='container mx-auto px-4 py-8'>
        <section className='mb-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Expert Craftsmanship for Every Project
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            From residential renovations to commercial builds, our skilled team
            delivers quality carpentry services tailored to your needs.
          </p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <ServiceCard
            icon={<Home className='h-6 w-6' />}
            title='Residential Services'
            description='Transform your home with our expert residential carpentry services.'
            services={[
              'Kitchen Renovations',
              'Bathroom Remodels',
              'Custom Built-ins',
              'Deck Construction',
            ]}
            image={kitchen}
          />
          <ServiceCard
            icon={<Building2 className='h-6 w-6' />}
            title='Commercial Projects'
            description='Elevate your business space with our professional commercial carpentry.'
            services={[
              'Office Renovations',
              'Retail Fixtures',
              'Restaurant Build-outs',
              'Industrial Carpentry',
            ]}
            image={office}
          />
          <ServiceCard
            icon={<Hammer className='h-6 w-6' />}
            title='Structural Work'
            description='Ensure the integrity of your building with our structural carpentry expertise.'
            services={[
              'Framing',
              'Structural Repairs',
              'Beam Installation',
              'Load-bearing Modifications',
            ]}
            image={framings}
          />
          <ServiceCard
            icon={<Ruler className='h-6 w-6' />}
            title='Outdoor Renovations'
            description='Add the perfect finishing touch to your outdoor space with our detail-oriented work.'
            services={['Decks', 'Porches', 'Garages', 'Siding']}
            image={outdoor}
          />
          <ServiceCard
            icon={<PaintBucket className='h-6 w-6' />}
            title='Comprehensive Renovations'
            description='Experience full-service renovations that bring your vision to life.'
            services={[
              'Full Kitchen Remodels',
              'Bathroom Transformations',
              'Basement Finishing',
              'Attic Conversions',
            ]}
            image={bathroom}
          />
          <ServiceCard
            icon={<Wrench className='h-6 w-6' />}
            title='General Carpentry'
            description='From repairs to installations, we handle all your general carpentry needs.'
            services={[
              'Drywall Installation',
              'Flooring',
              'Tile Work',
              'Cabinet Installation',
            ]}
            image={general}
          />
        </section>

        <section className='bg-muted p-8 rounded-lg mb-12'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>
            Why Choose Our Services?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <FeatureCard
              icon={<Drill className='h-6 w-6' />}
              title='Skilled Craftsmen'
              description='Our team of experienced carpenters brings expertise to every project.'
            />
            <FeatureCard
              icon={<Ruler className='h-6 w-6' />}
              title='Attention to Detail'
              description='We pride ourselves on precision and fine craftsmanship in all our work.'
            />
            <FeatureCard
              icon={<Cog className='h-6 w-6' />}
              title='Quality Materials'
              description='We use only the best materials to ensure longevity and durability.'
            />
            <FeatureCard
              icon={<Hammer className='h-6 w-6' />}
              title='Timely Completion'
              description='We respect your time and strive to complete projects on schedule.'
            />
          </div>
        </section>

        <section className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='mb-6'>
            Contact us today for a free consultation and let&apos;s bring your
            carpentry dreams to life!
          </p>
          <Button size='lg' className='mb-6'>
            <Link href='/#contact'>Get a Free Quote</Link>
            
          </Button>
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
      </main>
    </div>
  );
}

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  services: string[];
  image: StaticImageData;
};

function ServiceCard({
  icon,
  title,
  description,
  services,
  image,
}: ServiceCardProps) {
  return (
    <Card className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
      <div className='relative h-[200px]'>
        <Image src={image} alt={title} layout='fill' objectFit='cover' />
      </div>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-xl'>
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='list-disc list-inside space-y-1'>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-xl'>
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
