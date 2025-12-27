'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, Music, Trophy, ShoppingBag, Snowflake } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const events = [
  {
    id: 'gold-country-fair',
    name: 'Gold Country Fair',
    date: 'September 12-15, 2025',
    time: '10:00 AM - 10:00 PM',
    location: 'Gold Country Fairgrounds',
    description: 'Annual county fair featuring livestock shows, carnival rides, live entertainment, and local food vendors.',
    category: 'Festival',
    image: '/images/events/event-1.jpg',
    featured: true,
    color: '#B8860B',
  },
  {
    id: 'old-town-art-walk',
    name: 'Old Town Art Walk',
    date: 'First Friday of Every Month',
    time: '5:00 PM - 8:00 PM',
    location: 'Old Town Auburn',
    description: 'Monthly celebration of local art featuring gallery openings, live music, and wine tastings throughout historic Old Town.',
    category: 'Arts & Culture',
    image: '/images/events/event-2.jpg',
    featured: true,
    color: '#8B6914',
  },
  {
    id: 'western-states-endurance-run',
    name: 'Western States Endurance Run',
    date: 'June 28-29, 2025',
    time: '5:00 AM Start',
    location: 'Squaw Valley to Auburn',
    description: 'The world\'s oldest 100-mile trail race, finishing at Placer High School. A legendary endurance event.',
    category: 'Sports',
    image: '/images/events/event-3.jpg',
    featured: true,
    color: '#5A6754',
  },
  {
    id: 'auburn-farmers-market',
    name: 'Auburn Farmers Market',
    date: 'Every Saturday',
    time: '8:00 AM - 12:00 PM',
    location: 'Old Town Auburn',
    description: 'Year-round farmers market featuring fresh produce, artisan goods, baked items, and live music.',
    category: 'Market',
    image: '/images/events/event-4.jpg',
    featured: false,
    color: '#6F7F68',
  },
  {
    id: 'auburn-symphony',
    name: 'Auburn Symphony Season Opener',
    date: 'October 18, 2025',
    time: '7:30 PM',
    location: 'Auburn Performing Arts Center',
    description: 'The Auburn Symphony Orchestra opens its new season with a celebration of classical masterworks.',
    category: 'Performing Arts',
    image: '/images/seasonal/fall-1.jpg',
    featured: false,
    color: '#B8860B',
  },
  {
    id: 'holiday-lights',
    name: 'Holiday Lights in Old Town',
    date: 'December 6, 2025',
    time: '5:00 PM - 9:00 PM',
    location: 'Old Town Auburn',
    description: 'Annual tree lighting ceremony with carolers, hot cocoa, Santa visits, and holiday shopping.',
    category: 'Holiday',
    image: '/images/seasonal/winter-1.jpg',
    featured: false,
    color: '#C9A24A',
  },
];

const categories = [
  { id: 'all', label: 'All Events', icon: Sparkles },
  { id: 'festival', label: 'Festival', icon: Music },
  { id: 'sports', label: 'Sports', icon: Trophy },
  { id: 'market', label: 'Market', icon: ShoppingBag },
  { id: 'holiday', label: 'Holiday', icon: Snowflake },
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
    <section ref={ref} className="relative h-[60vh] min-h-[450px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/events/event-1.jpg"
          alt="Events in Auburn California"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Film Grain */}
      <div className="film-grain-overlay" />

      {/* Floating Date Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-32 right-8 md:right-16 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20">
          <Calendar className="w-8 h-8 text-[#E2C58F] mx-auto mb-2" />
          <div className="text-white text-center">
            <div className="text-3xl font-serif">2025</div>
            <div className="text-xs uppercase tracking-widest text-white/70">Events Calendar</div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-end pb-16 md:pb-20"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-3 text-[#E2C58F] text-xs font-medium tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-[#C9A24A] to-transparent" />
              What&apos;s Happening
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Events & </span>
              <span className="font-semibold text-[#E2C58F]">Festivals</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              From world-famous endurance races to charming small-town celebrations,
              there&apos;s always something happening in Auburn.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function FeaturedEvents() {
  const featuredEvents = events.filter((e) => e.featured);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Don&apos;t Miss</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)]">
            Featured Events
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {featuredEvents.map((event, index) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Link href={`/events/${event.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-block px-3 py-1.5 text-xs font-medium text-white rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: `${event.color}CC` }}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="absolute top-4 right-4">
                    <span className="text-4xl font-serif font-light text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-[#E2C58F] text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-white mb-3 group-hover:text-[#E2C58F] transition-colors">
                      {event.name}
                    </h3>

                    <p className="text-sm text-white/70 line-clamp-2 mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function AllEvents() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all'
    ? events
    : events.filter((e) => e.category.toLowerCase() === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        {/* Header with Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="section-label--left mb-4 block text-[#C9A24A]">Browse All</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
                Upcoming Events
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C9A24A] text-white'
                        : 'bg-white border border-[var(--color-neutral-200)] text-[var(--color-text-secondary)] hover:border-[#C9A24A] hover:text-[#C9A24A]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Events List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {filteredEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              className="group bg-white rounded-sm overflow-hidden border border-[var(--color-neutral-200)] hover:border-transparent hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-72 lg:w-80 aspect-video md:aspect-auto relative overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.category}
                    </span>
                    <span className="text-sm font-medium" style={{ color: event.color }}>
                      {event.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)] mb-3 group-hover:text-[#B8860B] transition-colors">
                    <Link href={`/events/${event.id}`}>
                      {event.name}
                    </Link>
                  </h3>

                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="hidden lg:flex items-center px-8">
                  <Link
                    href={`/events/${event.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#B8860B] hover:text-[#8B6914] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/events/calendar"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
          >
            View Full Calendar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

function SubmitEventCTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[#C9A24A]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[#C9A24A]/5 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <div className="w-16 h-16 rounded-full bg-[#C9A24A]/20 flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-[#C9A24A]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Have an Event to Share?
          </h2>

          <p className="text-lg text-white/70 mb-10">
            Submit your Auburn-area event and reach thousands of visitors and locals.
            We&apos;d love to help spread the word.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit-event"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
            >
              Submit an Event
            </Link>
            <Link
              href="/events/calendar"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              View Full Calendar
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedEvents />
        <AllEvents />
        <SubmitEventCTA />
      </main>
      <Footer />
    </>
  );
}
