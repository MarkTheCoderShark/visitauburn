'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  type: string;
  image: string;
  rating: number;
  href: string;
}

const properties: Property[] = [
  {
    id: 'powers-mansion',
    name: 'Powers Mansion Inn',
    type: 'Historic Bed & Breakfast',
    image: 'https://powers-mansion.allhotelscalifornia.com/data/Pictures/700x500w/3706/370636/370636000/picture-auburn-power-s-mansion-1.JPEG',
    rating: 4.9,
    href: '/stay/powers-mansion',
  },
  {
    id: 'holiday-inn',
    name: 'Holiday Inn Auburn',
    type: 'Hotel',
    image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-auburn-4393712163-4x3?wid=733',
    rating: 4.5,
    href: '/stay/holiday-inn',
  },
  {
    id: 'best-western-plus',
    name: 'Best Western Plus Auburn Inn',
    type: 'Hotel',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPNhMb-ed64TOltlsTEVaLHG7pTn85SubOUANwQ=s1360-w1360-h1020',
    rating: 4.6,
    href: '/stay/best-western-plus',
  },
  {
    id: 'auburn-cottage',
    name: 'Auburn Cottage Retreat',
    type: 'Vacation Rental',
    image: '/images/auburn-cottage.jpg',
    rating: 4.7,
    href: '/stay/auburn-cottage',
  },
  {
    id: 'lake-clementine',
    name: 'Lake Clementine Cabins',
    type: 'Rustic Cabins',
    image: '/images/lake-clementine-cabin.jpg',
    rating: 4.6,
    href: '/stay/lake-clementine',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const;

export default function StayGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
              Places to Stay
            </h2>
            <p className="text-lg text-stone-600 max-w-xl">
              From historic inns to modern hotels, find the perfect home base for your Auburn adventure.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="/stay"
              className="group inline-flex items-center gap-2 text-stone-900 font-medium hover:text-amber-700 transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="relative -mx-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-6 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[340px]"
              >
                <Link href={property.href} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-stone-100 mb-4">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-stone-900 group-hover:text-amber-700 transition-colors">
                        {property.name}
                      </h3>
                      <p className="text-sm text-stone-500">{property.type}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-stone-700">{property.rating}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
