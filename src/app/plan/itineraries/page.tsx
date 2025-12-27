'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  ArrowRight, Clock, MapPin, Sun, Sunrise, Sunset, Moon,
  Coffee, Utensils, Camera, Mountain, Wine, ShoppingBag,
  Heart, TreePine, Waves, Users, Calendar
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

type Duration = 'all' | 'day' | 'weekend' | 'week';

const durationFilters = [
  { id: 'all' as const, label: 'All Itineraries' },
  { id: 'day' as const, label: 'Day Trips' },
  { id: 'weekend' as const, label: 'Weekend' },
  { id: 'week' as const, label: 'Extended Stay' },
];

const itineraries = [
  {
    id: 'perfect-day',
    title: 'The Perfect Day in Auburn',
    subtitle: 'A complete Auburn experience in one day',
    duration: 'day',
    durationText: '1 Day',
    image: '/images/feature-old-town.jpg',
    description: 'Experience the heart of Auburn with this carefully crafted day trip that combines history, nature, and culinary delights.',
    bestFor: ['First-time visitors', 'Couples', 'Photographers'],
    highlights: ['Old Town exploration', 'Trail hike', 'Farm-to-fork dining'],
    activities: [
      {
        time: 'Morning',
        icon: Sunrise,
        title: 'Historic Old Town Walk',
        description: 'Start with coffee at a local cafe, then stroll through historic Old Town Auburn. Visit the Placer County Courthouse and explore antique shops.',
        duration: '2-3 hours',
      },
      {
        time: 'Midday',
        icon: Sun,
        title: 'Confluence Trail Hike',
        description: 'Head to the No Hands Bridge trail for stunning views of the American River canyon. Choose a short or moderate loop.',
        duration: '2 hours',
      },
      {
        time: 'Afternoon',
        icon: Coffee,
        title: 'Lunch & Wine Tasting',
        description: 'Enjoy lunch at a downtown restaurant, then sample local wines at one of Auburn\'s tasting rooms.',
        duration: '2 hours',
      },
      {
        time: 'Evening',
        icon: Sunset,
        title: 'Sunset Dinner',
        description: 'Watch the sunset from a restaurant patio while enjoying farm-to-fork California cuisine.',
        duration: '2 hours',
      },
    ],
  },
  {
    id: 'gold-country-weekend',
    title: 'Gold Country Weekend',
    subtitle: 'Immerse yourself in history and nature',
    duration: 'weekend',
    durationText: '2-3 Days',
    image: '/images/seasonal/fall-1.jpg',
    description: 'The perfect balance of outdoor adventure, Gold Rush history, and culinary exploration over a leisurely weekend.',
    bestFor: ['History buffs', 'Foodies', 'Couples'],
    highlights: ['Mining history', 'Wine country', 'River views'],
    activities: [
      {
        time: 'Day 1 Morning',
        icon: Camera,
        title: 'Historic Downtown Tour',
        description: 'Guided walking tour of Old Town Auburn, including the iconic Placer County Courthouse and historic fire station.',
        duration: '3 hours',
      },
      {
        time: 'Day 1 Afternoon',
        icon: Mountain,
        title: 'Hidden Falls Regional Park',
        description: 'Explore waterfalls and oak woodlands on this popular trail system just outside town.',
        duration: '3 hours',
      },
      {
        time: 'Day 2 Morning',
        icon: Wine,
        title: 'Placer Wine Trail',
        description: 'Visit 3-4 wineries in the Auburn area, sampling local varietals and learning about foothill viticulture.',
        duration: '4 hours',
      },
      {
        time: 'Day 2 Afternoon',
        icon: ShoppingBag,
        title: 'Shopping & Galleries',
        description: 'Browse local boutiques, art galleries, and antique stores in Old Town.',
        duration: '2 hours',
      },
      {
        time: 'Day 3',
        icon: Waves,
        title: 'River Day',
        description: 'Choose your adventure: rafting, kayaking, or simply relaxing at the confluence area.',
        duration: 'Full day',
      },
    ],
  },
  {
    id: 'outdoor-adventure',
    title: 'Outdoor Adventure Week',
    subtitle: 'The ultimate active vacation',
    duration: 'week',
    durationText: '5-7 Days',
    image: '/images/OutdoorAdventures.png',
    description: 'For those who want to experience everything Auburn\'s outdoor scene has to offer, from epic trails to world-class rafting.',
    bestFor: ['Athletes', 'Trail runners', 'Adventure seekers'],
    highlights: ['Western States Trail', 'Whitewater rafting', 'Mountain biking'],
    activities: [
      {
        time: 'Day 1-2',
        icon: Mountain,
        title: 'Trail Running/Hiking',
        description: 'Explore sections of the famous Western States Trail, from the iconic No Hands Bridge to Cool.',
        duration: '2 days',
      },
      {
        time: 'Day 3',
        icon: Waves,
        title: 'Whitewater Rafting',
        description: 'Experience Class II-III rapids on the South Fork American River with a professional outfitter.',
        duration: 'Full day',
      },
      {
        time: 'Day 4',
        icon: TreePine,
        title: 'Mountain Biking',
        description: 'Ride the flowy singletrack of the Confluence area or challenge yourself on Foresthill trails.',
        duration: 'Full day',
      },
      {
        time: 'Day 5',
        icon: Camera,
        title: 'Hidden Falls & Recovery',
        description: 'Easy hike to waterfalls, followed by a spa treatment or yoga session in town.',
        duration: 'Half day',
      },
      {
        time: 'Day 6-7',
        icon: Mountain,
        title: 'Foresthill Exploration',
        description: 'Drive the scenic Foresthill Road, visit the famous Foresthill Bridge, and explore backcountry trails.',
        duration: '2 days',
      },
    ],
  },
  {
    id: 'family-fun',
    title: 'Family Adventure',
    subtitle: 'Creating memories with the kids',
    duration: 'weekend',
    durationText: '2-3 Days',
    image: '/images/seasonal/summer-1.jpg',
    description: 'Kid-friendly activities and attractions that the whole family will enjoy, from easy hikes to interactive museums.',
    bestFor: ['Families', 'Kids of all ages', 'Multi-generational'],
    highlights: ['Kid-friendly trails', 'Gold panning', 'Swimming holes'],
    activities: [
      {
        time: 'Day 1',
        icon: Mountain,
        title: 'Easy Nature Walks',
        description: 'Start with family-friendly trails at Hidden Falls or the Auburn State Recreation Area with flat, easy paths.',
        duration: '2-3 hours',
      },
      {
        time: 'Day 1 PM',
        icon: Camera,
        title: 'Gold Panning Experience',
        description: 'Try your hand at gold panning—a fun, hands-on activity that teaches Gold Rush history.',
        duration: '2 hours',
      },
      {
        time: 'Day 2',
        icon: Waves,
        title: 'River Swimming',
        description: 'Cool off at one of the family-friendly swimming spots along the American River.',
        duration: '3-4 hours',
      },
      {
        time: 'Day 2 PM',
        icon: Coffee,
        title: 'Downtown Treats',
        description: 'Ice cream, candy shops, and a visit to the old-fashioned five-and-dime store.',
        duration: '2 hours',
      },
    ],
  },
  {
    id: 'romantic-escape',
    title: 'Romantic Getaway',
    subtitle: 'Wine, dine, and unwind',
    duration: 'weekend',
    durationText: '2-3 Days',
    image: '/images/seasonal/spring-1.jpg',
    description: 'A curated experience for couples looking for romance, relaxation, and memorable moments in Gold Country.',
    bestFor: ['Couples', 'Anniversaries', 'Honeymoons'],
    highlights: ['Wine tasting', 'Spa treatments', 'Fine dining'],
    activities: [
      {
        time: 'Day 1',
        icon: Wine,
        title: 'Wine Country Tour',
        description: 'Private or self-guided tour of Placer County wineries, with picnic lunch among the vines.',
        duration: 'Full day',
      },
      {
        time: 'Day 2 Morning',
        icon: Sunrise,
        title: 'Sunrise Hike',
        description: 'Watch the sunrise over the American River canyon from a scenic overlook.',
        duration: '2 hours',
      },
      {
        time: 'Day 2 PM',
        icon: Heart,
        title: 'Couples Spa',
        description: 'Relax with couples massage and spa treatments at a local wellness center.',
        duration: '2-3 hours',
      },
      {
        time: 'Day 2 Evening',
        icon: Moon,
        title: 'Fine Dining',
        description: 'Multi-course dinner at one of Auburn\'s acclaimed farm-to-table restaurants.',
        duration: '3 hours',
      },
    ],
  },
  {
    id: 'history-deep-dive',
    title: 'Gold Rush History Trail',
    subtitle: 'Step back in time',
    duration: 'day',
    durationText: '1 Day',
    image: '/images/feature-old-town.jpg',
    description: 'Trace the footsteps of the 49ers with visits to historic sites, museums, and preserved Gold Rush-era buildings.',
    bestFor: ['History enthusiasts', 'Seniors', 'Educational trips'],
    highlights: ['Museums', 'Historic buildings', 'Walking tours'],
    activities: [
      {
        time: 'Morning',
        icon: Camera,
        title: 'Placer County Museum',
        description: 'Start at the courthouse museum with exhibits on Gold Rush history, Native American heritage, and local wildlife.',
        duration: '1.5 hours',
      },
      {
        time: 'Mid-Morning',
        icon: MapPin,
        title: 'Historic Walking Tour',
        description: 'Self-guided or docent-led tour of Old Town, seeing buildings that date back to the 1850s.',
        duration: '2 hours',
      },
      {
        time: 'Afternoon',
        icon: Mountain,
        title: 'Gold Mining Sites',
        description: 'Visit historic mining sites and learn about the techniques that shaped California history.',
        duration: '2-3 hours',
      },
      {
        time: 'Evening',
        icon: Utensils,
        title: 'Historic Dining',
        description: 'Dinner at a restaurant housed in a historic building, enjoying ambiance and stories from the past.',
        duration: '2 hours',
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/OutdoorAdventures.png"
          alt="Auburn California Itineraries"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      <div className="film-grain-overlay" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-end pb-16 md:pb-24"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <Link
              href="/plan"
              className="inline-flex items-center gap-2 text-white/70 text-sm mb-6 hover:text-[#E2C58F] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Plan Your Trip
            </Link>

            <span className="inline-flex items-center gap-3 text-[#E2C58F] text-xs font-medium tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-[#C9A24A] to-transparent" />
              Plan Your Trip
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Curated </span>
              <span className="font-semibold text-[#E2C58F]">Itineraries</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              From day trips to week-long adventures, we&apos;ve crafted the
              perfect plans for every type of traveler.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function ItineraryGrid() {
  const [activeDuration, setActiveDuration] = useState<Duration>('all');

  const filtered = activeDuration === 'all'
    ? itineraries
    : itineraries.filter(i => i.duration === activeDuration);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4">Trip Ideas</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Each itinerary is designed by locals to help you make the most of your time in Auburn.
          </p>
        </motion.div>

        {/* Duration Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {durationFilters.map((filter) => {
            const isActive = activeDuration === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveDuration(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C9A24A] text-white shadow-lg shadow-[#C9A24A]/20'
                    : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-neutral-200)] hover:border-[#C9A24A] hover:text-[#C9A24A]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Itineraries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeDuration}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((itinerary) => (
            <motion.article
              key={itinerary.id}
              variants={itemVariants}
              className="group bg-white rounded-sm border border-[var(--color-neutral-200)] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-[var(--color-text-primary)] rounded-full">
                    <Clock className="w-3 h-3" />
                    {itinerary.durationText}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl text-white mb-1">
                    {itinerary.title}
                  </h3>
                  <p className="text-sm text-white/80">{itinerary.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {itinerary.description}
                </p>

                {/* Best For */}
                <div className="mb-5">
                  <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                    Best for:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {itinerary.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[var(--color-neutral-100)] rounded text-xs text-[var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-5">
                  <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                    Highlights:
                  </span>
                  <ul className="mt-2 space-y-1">
                    {itinerary.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1 h-1 rounded-full bg-[#C9A24A]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={`/plan/itineraries/${itinerary.id}`}
                  className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] text-sm font-medium rounded-sm hover:bg-[#C9A24A] hover:text-white transition-colors"
                >
                  View Full Itinerary
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function FeaturedItinerary() {
  const featured = itineraries[0];

  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A24A]/5 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Featured
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            {featured.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {featured.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A24A]/50 via-[#C9A24A]/20 to-transparent hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {featured.activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  variants={itemVariants}
                  className="relative flex gap-6 md:gap-8"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#C9A24A]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-[#C9A24A] uppercase tracking-wider">
                        {activity.time}
                      </span>
                      <span className="text-xs text-white/50">•</span>
                      <span className="text-xs text-white/50">{activity.duration}</span>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-2">{activity.title}</h3>
                    <p className="text-sm text-white/60">{activity.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CustomItinerary() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label--left mb-4 block text-[#C9A24A]">
              <Calendar className="w-4 h-4 inline mr-2" />
              Custom Planning
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Create Your Own Adventure
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Can&apos;t find the perfect fit? Our visitor services team can help you
              create a custom itinerary based on your interests, timeline, and travel style.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Personalized recommendations based on your interests',
                'Insider tips on timing and reservations',
                'Accessibility accommodations',
                'Group and special occasion planning',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A24A] text-white rounded-sm hover:bg-[#B8860B] transition-colors"
            >
              <Users className="w-5 h-5" />
              Request Custom Itinerary
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative cards stack */}
              <div className="absolute inset-0 bg-[#C9A24A]/10 rounded-sm transform rotate-6" />
              <div className="absolute inset-0 bg-[#C9A24A]/20 rounded-sm transform rotate-3" />
              <div className="relative bg-white rounded-sm p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-[#C9A24A]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-3">
                    Your Trip, Your Way
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                    Tell us what you love, and we&apos;ll create a personalized
                    Auburn experience just for you.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Hiking', 'Wine', 'History', 'Food', 'Art'].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 border border-[var(--color-neutral-200)] rounded-full text-xs text-[var(--color-text-muted)]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label mb-6">Ready to Go?</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            Start Planning Today
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Download our free visitor guide for more detailed itineraries, maps, and insider tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan/tips"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors"
            >
              Travel Tips
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/plan/getting-here"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              Getting Here
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function ItinerariesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ItineraryGrid />
        <FeaturedItinerary />
        <CustomItinerary />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
