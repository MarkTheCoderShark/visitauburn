'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  image: string;
}

interface Season {
  id: string;
  name: string;
  activities: Activity[];
  ctaText: string;
  ctaHref: string;
}

const seasons: Season[] = [
  {
    id: 'spring',
    name: 'Spring',
    activities: [
      { id: 'wildflowers', title: 'Wildflower Hikes', image: '/images/spring-wildflowers.jpg' },
      { id: 'rafting', title: 'Spring Rafting', image: '/images/spring-rafting.jpg' },
      { id: 'wine', title: 'Wine Tasting', image: '/images/spring-wine.jpg' },
      { id: 'biking', title: 'Mountain Biking', image: '/images/spring-biking.jpg' },
      { id: 'farmers', title: 'Farmers Markets', image: '/images/spring-farmers.jpg' },
    ],
    ctaText: 'Plan a Spring Visit',
    ctaHref: '/seasons/spring',
  },
  {
    id: 'summer',
    name: 'Summer',
    activities: [
      { id: 'swimming', title: 'River Swimming', image: '/images/summer-swimming.jpg' },
      { id: 'concerts', title: 'Outdoor Concerts', image: '/images/summer-concerts.jpg' },
      { id: 'hiking', title: 'Morning Hikes', image: '/images/summer-hiking.jpg' },
      { id: 'breweries', title: 'Craft Breweries', image: '/images/summer-breweries.jpg' },
      { id: 'camping', title: 'Nearby Camping', image: '/images/summer-camping.jpg' },
      { id: 'trail-running', title: 'Trail Running', image: '/images/summer-trails.jpg' },
    ],
    ctaText: 'Plan a Summer Visit',
    ctaHref: '/seasons/summer',
  },
  {
    id: 'fall',
    name: 'Fall',
    activities: [
      { id: 'foliage', title: 'Fall Foliage', image: '/images/fall-foliage.jpg' },
      { id: 'apple', title: 'Apple Hill Day Trip', image: '/images/fall-apple.jpg' },
      { id: 'harvest', title: 'Harvest Festivals', image: '/images/fall-harvest.jpg' },
      { id: 'kayaking', title: 'River Kayaking', image: '/images/fall-kayaking.jpg' },
      { id: 'dining', title: 'Farm-to-Fork Dining', image: '/images/fall-dining.jpg' },
    ],
    ctaText: 'Plan a Fall Visit',
    ctaHref: '/seasons/fall',
  },
  {
    id: 'winter',
    name: 'Winter',
    activities: [
      { id: 'snow', title: 'Day Trips to Snow', image: '/images/winter-snow.jpg' },
      { id: 'holiday', title: 'Holiday Events', image: '/images/winter-holiday.jpg' },
      { id: 'trails', title: 'Winter Trail Walks', image: '/images/winter-trails.jpg' },
      { id: 'cozy', title: 'Cozy Cafes', image: '/images/winter-cafes.jpg' },
    ],
    ctaText: 'Plan a Winter Visit',
    ctaHref: '/seasons/winter',
  },
];

export default function SeasonalTabs() {
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Every Season Shines
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Auburn offers year-round adventure with mild winters and warm summers.
            Discover what each season has to offer.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-sm p-1 shadow-sm">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season)}
                className={`px-6 py-3 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeSeason.id === season.id
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {season.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {activeSeason.activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-stone-200">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-sm font-medium text-white">{activity.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={activeSeason.ctaHref}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-medium rounded-sm hover:bg-stone-800 transition-colors"
              >
                <span>{activeSeason.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
