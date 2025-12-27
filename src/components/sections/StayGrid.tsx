'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

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
    image: '/images/stay-powers-mansion.jpg',
    rating: 4.9,
    href: '/stay/powers-mansion',
  },
  {
    id: 'holiday-inn',
    name: 'Holiday Inn Auburn',
    type: 'Hotel',
    image: '/images/stay-holiday-inn.jpg',
    rating: 4.5,
    href: '/stay/holiday-inn',
  },
  {
    id: 'lincoln-way',
    name: 'Lincoln Way Inn',
    type: 'Boutique Inn',
    image: '/images/stay-lincoln-way.jpg',
    rating: 4.8,
    href: '/stay/lincoln-way',
  },
  {
    id: 'auburn-cottage',
    name: 'Auburn Cottage Retreat',
    type: 'Vacation Rental',
    image: '/images/stay-cottage.jpg',
    rating: 4.7,
    href: '/stay/auburn-cottage',
  },
  {
    id: 'best-western',
    name: 'Best Western Golden Key',
    type: 'Hotel',
    image: '/images/stay-best-western.jpg',
    rating: 4.4,
    href: '/stay/best-western',
  },
  {
    id: 'lake-clementine',
    name: 'Lake Clementine Cabins',
    type: 'Rustic Cabins',
    image: '/images/stay-cabins.jpg',
    rating: 4.6,
    href: '/stay/lake-clementine',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const;

export default function StayGrid() {
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
          <Link
            href="/stay"
            className="group inline-flex items-center gap-2 mt-6 md:mt-0 text-stone-900 font-medium hover:text-amber-700 transition-colors"
          >
            <span>View all stays</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
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
        </motion.div>
      </div>
    </section>
  );
}
