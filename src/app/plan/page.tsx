'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, MapPin, Home, Map, Lightbulb, Plane, Clock, Sun, Mountain, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const planningGuides = [
  {
    id: 'getting-here',
    title: 'Getting Here',
    description: 'From Sacramento to the Bay Area, discover the best routes and transportation options to reach Auburn.',
    href: '/plan/getting-here',
    icon: MapPin,
    color: '#5A6754',
  },
  {
    id: 'stay',
    title: 'Where to Stay',
    description: 'From boutique hotels to charming B&Bs and vacation rentals, find your perfect home base.',
    href: '/plan/stay',
    icon: Home,
    color: '#B8860B',
  },
  {
    id: 'itineraries',
    title: 'Itineraries',
    description: 'Curated trip ideas for every type of traveler, from day trips to week-long adventures.',
    href: '/plan/itineraries',
    icon: Map,
    color: '#8B6914',
  },
  {
    id: 'tips',
    title: 'Travel Tips',
    description: 'Local insights, seasonal advice, and everything you need to know before you go.',
    href: '/plan/tips',
    icon: Lightbulb,
    color: '#6F7F68',
  },
];

const quickStats = [
  { icon: Plane, label: 'From Sacramento', value: '35 min', subtext: 'via I-80 East' },
  { icon: Mountain, label: 'Elevation', value: '1,255 ft', subtext: 'Sierra Foothills' },
  { icon: Sun, label: 'Sunny Days', value: '267+', subtext: 'per year' },
  { icon: Users, label: 'Population', value: '14,000+', subtext: 'friendly locals' },
];

const itineraries = [
  {
    title: 'Perfect Day in Auburn',
    duration: '1 Day',
    description: 'Experience the best of Auburn in a single day - history, nature, and great food.',
    highlights: ['Old Town Walking Tour', 'Lunch at Local Favorite', 'Hidden Falls Hike', 'Sunset at Confluence'],
    image: '/images/guides/weekend-guide.jpg',
  },
  {
    title: 'Gold Country Weekend',
    duration: '2-3 Days',
    description: 'Immerse yourself in Gold Rush history and Sierra foothill beauty.',
    highlights: ['Historic Museums', 'Wine Tasting', 'River Adventures', 'Farm-to-Fork Dining'],
    image: '/images/guides/history-walk.jpg',
  },
  {
    title: 'Outdoor Adventure Week',
    duration: '5-7 Days',
    description: 'The ultimate active vacation in the Sierra Nevada foothills.',
    highlights: ['Trail Running', 'Mountain Biking', 'River Rafting', 'Rock Climbing'],
    image: '/images/OutdoorAdventures.png',
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
    <section ref={ref} className="relative h-[60vh] min-h-[450px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/feature-old-town.jpg"
          alt="Plan Your Visit to Auburn California"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Film Grain */}
      <div className="film-grain-overlay" />

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
              Start Your Journey
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Plan Your </span>
              <span className="font-semibold text-[#E2C58F]">Visit</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Everything you need to craft the perfect Gold Country adventure,
              from where to stay to what to explore.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function PlanningGuides() {
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
          <span className="section-label mb-4">Your Trip Toolkit</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Planning Resources
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Everything you need to make the most of your Auburn adventure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {planningGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <motion.div key={guide.id} variants={itemVariants}>
                <Link
                  href={guide.href}
                  className="group block p-8 bg-white rounded-sm border border-[var(--color-neutral-200)] hover:border-transparent hover:shadow-xl transition-all duration-500 h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${guide.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: guide.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-3 group-hover:text-[#B8860B] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {guide.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: guide.color }}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function QuickStats() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A24A]/5 to-transparent" />
      <div className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-[#C9A24A]/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">
            Auburn at a Glance
          </h2>
          <p className="text-white/60 text-sm">Essential info for your trip</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <Icon className="w-8 h-8 text-[#C9A24A] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-serif font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 font-medium mb-0.5">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.subtext}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function ItinerariesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label--left mb-4 block">
              <span className="w-6 h-6 rounded-full bg-[#C9A24A]/20 inline-flex items-center justify-center mr-2">
                <Clock className="w-3 h-3 text-[#C9A24A]" />
              </span>
              Curated Experiences
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
              Trip Itineraries
            </h2>
          </div>
          <Link
            href="/plan/itineraries"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#B8860B] hover:text-[#8B6914] transition-colors"
          >
            View All Itineraries
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {itineraries.map((itinerary, index) => (
            <motion.article
              key={itinerary.title}
              variants={itemVariants}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-[var(--color-text-primary)] rounded-full">
                    <Clock className="w-3 h-3" />
                    {itinerary.duration}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-5xl font-serif font-light text-white/30">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)] mb-3 group-hover:text-[#B8860B] transition-colors">
                {itinerary.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                {itinerary.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {itinerary.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="w-1 h-1 rounded-full bg-[#C9A24A]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function VisitorGuide() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Guide Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Shadow/Depth Effect */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#C9A24A]/10 rounded-sm" />
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#C9A24A]/20 rounded-sm" />

              {/* Main Card */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#C9A24A] to-[#8B6914] rounded-sm p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-px bg-white/50 mb-6" />
                  <h3 className="font-serif text-3xl text-white mb-2">Visitor Guide</h3>
                  <p className="text-white/80 text-sm">2025 Edition</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Maps & Directions</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Sun className="w-4 h-4" />
                    <span>Seasonal Highlights</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Insider Tips</span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-xs uppercase tracking-widest text-white/60">
                    Visit Auburn, California
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label--left mb-4 block text-[#C9A24A]">Free Download</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Get Our Comprehensive Visitor Guide
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Packed with insider tips, seasonal recommendations, detailed maps, and
              curated itineraries to help you discover everything Auburn has to offer.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Interactive maps of downtown and trails',
                'Seasonal event calendar and highlights',
                'Local restaurant and accommodation guides',
                'Hidden gems only locals know about',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A24A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#C9A24A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visitor-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
              >
                Request Print Copy
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-100)] relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8860B' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label mb-6">We&apos;re Here to Help</span>

          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            Questions About Your Visit?
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Our friendly visitor services team is ready to help with personalized
            recommendations tailored to your interests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-neutral-900)] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[var(--color-neutral-800)] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+15308850540"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors bg-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (530) 885-0540
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function PlanPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PlanningGuides />
        <QuickStats />
        <ItinerariesSection />
        <VisitorGuide />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
