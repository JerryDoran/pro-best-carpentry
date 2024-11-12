'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Building2, ChefHat, Hammer, Home, Layout } from 'lucide-react';
import kitchen from '@/assets/images/kitchen.jpg';
import kitchenTwo from '@/assets/images/kitchen-two.jpg';
import kitchenThree from '@/assets/images/kitchen-three.jpg';
import bathroom from '@/assets/images/bathroom.jpg';

type TabId =
  | 'kitchens'
  | 'bathrooms'
  | 'commercial'
  | 'interior'
  | 'exterior'
  | 'custom';

export default function Component() {
  const [activeTab, setActiveTab] = useState('kitchens');

  const tabs = [
    { id: 'kitchens', icon: ChefHat, label: 'Kitchens' },
    { id: 'bathrooms', icon: Bath, label: 'Bathrooms' },
    { id: 'commercial', icon: Building2, label: 'Commercial' },
    { id: 'interior', icon: Layout, label: 'Interior' },
    { id: 'exterior', icon: Home, label: 'Exterior' },
    { id: 'custom', icon: Hammer, label: 'Custom' },
  ];

  const tabContent: Record<
    TabId,
    Array<{ title: string; image: StaticImageData }>
  > = {
    kitchens: [
      {
        title: 'Modern Kitchen Transformation',
        image: kitchenTwo,
      },
      {
        title: 'Contemporary Kitchen Design',
        image: kitchenThree,
      },
    ],
    bathrooms: [
      {
        title: 'Luxury Bathroom Remodel',
        image: bathroom,
      },
      {
        title: 'Custom Shower Installation',
        image: bathroom,
      },
    ],
    commercial: [
      {
        title: 'Commercial Space Development',
        image: bathroom,
      },
      {
        title: 'Commercial Framing',
        image: bathroom,
      },
    ],
    interior: [
      {
        title: 'Laundry Room Renovation',
        image: bathroom,
      },
    ],
    exterior: [
      {
        title: 'Sunroom Addition',
        image: bathroom,
      },
    ],
    custom: [
      {
        title: 'Custom Tile Installation',
        image: bathroom,
      },
    ],
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Banner */}
      <div className='relative h-[300px] w-full'>
        <Image
          src={kitchen}
          alt='Modern kitchen renovation'
          className='object-cover brightness-50'
          fill
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white animate-fadeIn'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Expert Carpentry & Renovations
            </h1>
            <p className='text-xl'>
              Transforming Spaces with Precision and Care
            </p>
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className='container mx-auto py-12 px-4'>
        <div className='flex flex-wrap justify-center gap-4 mb-10'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <tab.icon className='h-4 w-4' />
              {tab.label}
            </button>
          ))}
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {tabContent[activeTab as TabId].map((item, index) => (
            <Card key={index}>
              {/* <CardHeader>
                <CardTitle className='text-lg font-semibold text-gray-600'>
                  {item.title}
                </CardTitle>
              </CardHeader> */}
              {/* <CardContent> */}
              <div className='overflow-hidden rounded-lg'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className='rounded-lg object-cover w-full h-[250px] transition-transform duration-300 ease-in-out hover:scale-110'
                />
              </div>
              {/* </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
