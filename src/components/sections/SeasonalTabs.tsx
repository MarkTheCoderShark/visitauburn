'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Thermometer } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface Season {
  id: string;
  name: string;
  months: string;
  description: string;
  temperature: string;
  activities: Activity[];
  ctaText: string;
  ctaHref: string;
  accentColor: string;
  accentLight: string;
  bgGradient: string;
}

const seasons: Season[] = [
  {
    id: 'spring',
    name: 'Spring',
    months: 'Mar – May',
    description: 'March through May brings blooming wildflowers, rushing rivers from snowmelt, and perfect weather for outdoor adventures. The hills turn vibrant green, and the waterfalls are at their most spectacular.',
    temperature: '55°F – 75°F',
    accentColor: '#6F7F68',
    accentLight: '#E4E9E2',
    bgGradient: 'from-secondary-50 to-neutral-50',
    activities: [
      { id: 'wildflowers', title: 'Wildflower Hikes', description: 'Explore trails bursting with lupines, poppies, and native blooms.', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80', tag: 'Popular' },
      { id: 'rafting', title: 'Whitewater Rafting', description: 'Experience thrilling rapids on the American River at peak flow.', image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=500&q=80', tag: 'Adventure' },
      { id: 'farmers', title: 'Farmers Markets', description: 'Shop fresh spring produce from local farms every Saturday.', image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80', tag: 'Family' },
      { id: 'waterfalls', title: 'Waterfall Chasing', description: 'Visit stunning cascades powered by spring snowmelt.', image: '/images/waterfall.jpg', tag: 'Must See' },
    ],
    ctaText: 'Plan a Spring Visit',
    ctaHref: '/seasons/spring',
  },
  {
    id: 'summer',
    name: 'Summer',
    months: 'Jun – Aug',
    description: 'June through August offers warm, sunny days perfect for river swimming, evening dining on outdoor patios, and exploring trails during golden hour. Summer events fill the calendar.',
    temperature: '75°F – 95°F',
    accentColor: '#C9A24A',
    accentLight: '#F7EDDA',
    bgGradient: 'from-accent-50 to-neutral-50',
    activities: [
      { id: 'swimming', title: 'River Swimming', description: 'Cool off in the refreshing waters of the American River.', image: 'https://sacramentolove.com/wp-content/uploads/2024/05/sacramento-love-auburn-swimming-hole-north-fork-american-river_60_optimized.jpg', tag: 'Popular' },
      { id: 'concerts', title: 'Concerts in the Park', description: 'Enjoy live music under the stars at local venues.', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80', tag: 'Events' },
      { id: 'biking', title: 'Mountain Biking', description: 'Ride legendary trails with stunning canyon views.', image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=500&q=80', tag: 'Adventure' },
      { id: 'wine', title: 'Wine Tasting', description: 'Tour nearby wineries and taste Gold Country vintages.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80', tag: 'Must See' },
    ],
    ctaText: 'Plan a Summer Visit',
    ctaHref: '/seasons/summer',
  },
  {
    id: 'fall',
    name: 'Fall',
    months: 'Sep – Nov',
    description: 'September through November brings golden light, harvest festivals, and perfect hiking weather. The oak trees turn amber, and the region celebrates the grape harvest with wine events.',
    temperature: '55°F – 80°F',
    accentColor: '#B8734A',
    accentLight: '#F5E6DA',
    bgGradient: 'from-orange-50 to-neutral-50',
    activities: [
      { id: 'foliage', title: 'Fall Foliage Trails', description: 'Hike through golden oaks and colorful vineyards.', image: 'https://visit-eldorado.com/wp-content/uploads/2016/10/Jill-E-Nauman-fall-e1506646362353.jpg', tag: 'Must See' },
      { id: 'apple', title: 'Apple Hill', description: 'Visit nearby Apple Hill for U-pick orchards and fresh cider.', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&q=80', tag: 'Family' },
      { id: 'harvest', title: 'Harvest Festivals', description: 'Celebrate the season with local food and wine events.', image: 'https://www.mercurynews.com/wp-content/uploads/2018/10/SJM-L-MANDARIN-1014-02.jpg?w=620', tag: 'Popular' },
      { id: 'running', title: 'Trail Running', description: 'Run iconic trails in perfect autumn temperatures.', image: 'https://www.parks.ca.gov/pages/502/images/Windy%20Pt%202%20%203%20combined.jpg', tag: 'Adventure' },
    ],
    ctaText: 'Plan a Fall Visit',
    ctaHref: '/seasons/fall',
  },
  {
    id: 'winter',
    name: 'Winter',
    months: 'Dec – Feb',
    description: 'December through February offers mild foothill weather while snow-capped peaks rise nearby. Enjoy cozy wine bars, holiday events, and easy access to world-class skiing.',
    temperature: '40°F – 55°F',
    accentColor: '#5A6B7A',
    accentLight: '#E4E8EC',
    bgGradient: 'from-slate-50 to-neutral-50',
    activities: [
      { id: 'cozy', title: 'Cozy Dining', description: 'Warm up with comfort food and local wines by the fire.', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&q=80', tag: 'Popular' },
      { id: 'snow', title: 'Ski Day Trips', description: 'Hit the slopes at nearby Lake Tahoe resorts.', image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=500&q=80', tag: 'Adventure' },
      { id: 'holiday', title: 'Holiday Events', description: 'Experience festive celebrations and light displays.', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500&q=80', tag: 'Family' },
      { id: 'trails', title: 'Winter Hiking', description: 'Explore quiet trails in mild winter weather.', image: '/images/seasonal/winter-hiking.jpg', tag: 'Must See' },
    ],
    ctaText: 'Plan a Winter Visit',
    ctaHref: '/seasons/winter',
  },
];

// Custom SVG icons for each season
const SeasonIcon = ({ season, isActive }: { season: string; isActive: boolean }) => {
  const strokeColor = isActive ? 'white' : 'currentColor';

  switch (season) {
    case 'spring':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M12 3c1.5 2 2 4 2 6s-.5 4-2 6c-1.5-2-2-4-2-6s.5-4 2-6z" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 14.5v6" />
          <path d="M9 18l3 2.5L15 18" />
        </svg>
      );
    case 'summer':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case 'fall':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case 'winter':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M12 2v20M2 12h20" />
          <path d="M12 2L9 5M12 2l3 3M12 22l-3-3M12 22l3-3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3" />
          <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
      );
    default:
      return null;
  }
};

export default function SeasonalTabs() {
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-700 bg-gradient-to-br ${activeSeason.bgGradient}`}>
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase mb-4 transition-colors duration-500"
            style={{ color: activeSeason.accentColor }}
          >
            <span className="w-8 h-px" style={{ background: activeSeason.accentColor }} />
            Year-Round Adventure
            <span className="w-8 h-px" style={{ background: activeSeason.accentColor }} />
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-stone-900 mb-4">
            Every Season Shines
          </h2>
          <p className="text-body-lg text-stone-600 max-w-2xl mx-auto">
            Auburn offers year-round adventure with mild winters and warm summers.
            Discover what each season has to offer.
          </p>
        </motion.div>

        {/* Season Navigation - Editorial Style */}
        <nav aria-label="Select a season" className="relative mb-16">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-px bg-stone-200 hidden md:block" />

          <ul className="flex justify-center items-stretch gap-2 md:gap-0" role="tablist">
            {seasons.map((season) => {
              const isActive = activeSeason.id === season.id;
              return (
                <li key={season.id} role="presentation">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${season.id}`}
                    onClick={() => setActiveSeason(season)}
                    className="group relative flex flex-col items-center gap-2 px-4 md:px-8 py-4 transition-all duration-300"
                  >
                    {/* Icon Circle */}
                    <motion.div
                      className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        background: isActive ? season.accentColor : 'white',
                        borderColor: isActive ? season.accentColor : '#e5e5e5',
                        color: isActive ? 'white' : '#888',
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive
                          ? '0 8px 24px rgba(0,0,0,0.15)'
                          : '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <SeasonIcon season={season.id} isActive={isActive} />
                    </motion.div>

                    {/* Label */}
                    <span
                      className="font-display text-sm md:text-base font-medium transition-colors duration-300"
                      style={{ color: isActive ? season.accentColor : '#666' }}
                    >
                      {season.name}
                    </span>

                    {/* Months - Desktop only */}
                    <span
                      className="hidden md:block text-[10px] tracking-wider uppercase transition-all duration-300"
                      style={{
                        color: isActive ? season.accentColor : '#999',
                        opacity: isActive ? 1 : 0.7,
                      }}
                    >
                      {season.months}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            id={`panel-${activeSeason.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeSeason.id}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Season Info Card - Left Column */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-stone-100 lg:sticky lg:top-32"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500"
                      style={{ background: activeSeason.accentLight }}
                    >
                      <div style={{ color: activeSeason.accentColor }}>
                        <SeasonIcon season={activeSeason.id} isActive={false} />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-stone-900">
                      {activeSeason.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-body-md text-stone-600 leading-relaxed mb-6">
                    {activeSeason.description}
                  </p>

                  {/* Temperature */}
                  <div className="flex items-center gap-3 pt-6 border-t border-stone-100">
                    <Thermometer
                      className="w-4 h-4 transition-colors duration-500"
                      style={{ color: activeSeason.accentColor }}
                    />
                    <span className="text-sm text-stone-500">
                      Average: <strong className="text-stone-800">{activeSeason.temperature}</strong>
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={activeSeason.ctaHref}
                    className="group mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
                    style={{ background: activeSeason.accentColor }}
                  >
                    <span>{activeSeason.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Activity Cards Grid - Right Column */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {activeSeason.activities.map((activity, index) => (
                    <motion.article
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                      className="group bg-white rounded-xl overflow-hidden shadow-subtle border border-stone-100 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                    >
                      <Link href={`/activities/${activity.id}`} className="block">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={activity.image}
                            alt={activity.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h4 className="font-display text-lg font-semibold text-stone-900 mb-1.5 group-hover:text-accent-600 transition-colors">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-stone-500 leading-relaxed mb-3">
                            {activity.description}
                          </p>

                          {/* Tag */}
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase transition-colors duration-500"
                            style={{
                              background: activeSeason.accentLight,
                              color: activeSeason.accentColor,
                            }}
                          >
                            {activity.tag}
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
