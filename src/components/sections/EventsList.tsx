'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  location: string;
  image: string;
  href: string;
}

const events: Event[] = [
  {
    id: 'farmers-market',
    title: 'Saturday Farmers Market',
    date: 'Every Saturday',
    month: 'Year',
    day: 'SAT',
    location: 'Old Town Auburn',
    image: '/images/event-farmers-market.jpg',
    href: '/events/farmers-market',
  },
  {
    id: 'gold-country-fair',
    title: 'Gold Country Fair',
    date: 'September 6-8, 2025',
    month: 'SEP',
    day: '6-8',
    location: 'Gold Country Fairgrounds',
    image: '/images/event-fair.jpg',
    href: '/events/gold-country-fair',
  },
  {
    id: 'wine-walk',
    title: 'Old Town Wine Walk',
    date: 'First Friday Monthly',
    month: 'Monthly',
    day: '1st',
    location: 'Old Town Auburn',
    image: '/images/event-wine-walk.jpg',
    href: '/events/wine-walk',
  },
  {
    id: 'western-states',
    title: 'Western States 100',
    date: 'June 28-29, 2025',
    month: 'JUN',
    day: '28',
    location: 'Placer High School',
    image: '/images/event-western-states.jpg',
    href: '/events/western-states',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const;

export default function EventsList() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
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
              Upcoming Events
            </h2>
            <p className="text-lg text-stone-600 max-w-xl">
              Festivals, markets, and gatherings that bring the community together year-round.
            </p>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 mt-6 md:mt-0 text-stone-900 font-medium hover:text-amber-700 transition-colors"
          >
            <span>View all events</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Link
                href={event.href}
                className="group flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-white rounded-sm hover:shadow-lg transition-shadow"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-20 h-20 bg-stone-900 text-white rounded-sm">
                  <span className="text-xs uppercase tracking-wider text-stone-400 md:mb-1">
                    {event.month}
                  </span>
                  <span className="text-2xl font-light ml-2 md:ml-0">{event.day}</span>
                </div>

                {/* Image */}
                <div className="relative w-full md:w-40 aspect-video md:aspect-square flex-shrink-0 overflow-hidden rounded-sm bg-stone-100">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center">
                  <ArrowRight className="w-5 h-5 text-stone-400 transition-all group-hover:text-stone-900 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
