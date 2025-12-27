'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Building2, Mountain, Trees, Grape, MapPin, Clock, Car } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const areas = [
  {
    id: 'downtown',
    name: 'Downtown Auburn',
    tagline: 'Historic Heart of Gold Country',
    description: 'Explore the charming Old Town district with its 1850s architecture, unique shops, farm-to-fork restaurants, and the iconic Placer County Courthouse.',
    highlights: ['Historic Old Town', 'Placer County Courthouse', 'Local Shops & Boutiques', 'Farm-to-Fork Dining'],
    image: '/images/feature-old-town.jpg',
    href: '/explore/downtown',
    icon: Building2,
    color: '#B8860B',
  },
  {
    id: 'north-fork',
    name: 'North Fork',
    tagline: 'Canyon Country Adventures',
    description: 'The North Fork of the American River carves through dramatic canyons offering world-class hiking, mountain biking, and water activities.',
    highlights: ['Western States Trail', 'River Access', 'Mountain Biking', 'Swimming Holes'],
    image: '/images/OutdoorAdventures.png',
    href: '/explore/north-fork',
    icon: Mountain,
    color: '#5A6754',
  },
  {
    id: 'foresthill',
    name: 'Foresthill',
    tagline: 'Mountain Gateway',
    description: 'A historic logging community at 3,200 feet elevation, offering access to the Tahoe National Forest and stunning viewpoints.',
    highlights: ['Foresthill Bridge', 'Tahoe National Forest', 'Sugar Pine Reservoir', 'Historic Town'],
    image: '/images/seasonal/fall-1.jpg',
    href: '/explore/foresthill',
    icon: Trees,
    color: '#6F7F68',
  },
  {
    id: 'gold-country',
    name: 'Gold Country Wine',
    tagline: 'Wine Country Charm',
    description: 'Rolling hills dotted with vineyards and wineries make this region perfect for wine tasting and scenic drives through pastoral landscapes.',
    highlights: ['Local Wineries', 'Scenic Drives', 'Farm Visits', 'Tasting Rooms'],
    image: '/images/seasonal/spring-1.jpg',
    href: '/explore/gold-country',
    icon: Grape,
    color: '#8B6914',
  },
];

const nearbyDestinations = [
  { name: 'Lake Tahoe', distance: '60 miles', time: '1.5 hours', icon: Mountain },
  { name: 'Sacramento', distance: '35 miles', time: '40 minutes', icon: Building2 },
  { name: 'Napa Valley', distance: '90 miles', time: '2 hours', icon: Grape },
  { name: 'Yosemite', distance: '150 miles', time: '3 hours', icon: Trees },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/seasonal/summer-1.jpg"
          alt="Explore Auburn and Gold Country"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Film Grain */}
      <div className="film-grain-overlay" />

      {/* Content */}
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
            <span className="inline-flex items-center gap-3 text-[#E2C58F] text-xs font-medium tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-[#C9A24A] to-transparent" />
              Discover the Region
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Explore </span>
              <span className="font-semibold text-[#E2C58F]">Auburn</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              From historic streets to rugged canyons, discover the diverse
              landscapes that make Gold Country unforgettable.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function AreaCard({ area, index }: { area: typeof areas[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = area.icon;

  return (
    <motion.div
      variants={itemVariants}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-0 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Image Side */}
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <Link href={area.href} className="group block">
          <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-sm">
            <Image
              src={area.image}
              alt={area.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Icon */}
            <div
              className="absolute top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${area.color}CC` }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </Link>

        {/* Decorative Corner */}
        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 rounded-sm opacity-30 hidden md:block`}
          style={{ borderColor: area.color }}
        />
      </div>

      {/* Content Side */}
      <div className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'}`}>
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase"
          style={{ color: area.color }}
        >
          {area.tagline}
        </span>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {area.name}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {area.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-8">
          {area.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1.5 bg-[var(--color-neutral-100)] rounded-full text-sm text-[var(--color-text-secondary)]"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={area.href}
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase transition-colors"
          style={{ color: area.color }}
        >
          <span>Explore {area.name}</span>
          <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ backgroundColor: area.color }} />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function NearbyDestinations() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C9A24A]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#C9A24A]/5 blur-3xl" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
              Get Oriented
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Auburn & Surroundings
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Auburn is ideally located in the Sierra Nevada foothills, making it
              a perfect base for exploring Northern California. Within a short drive,
              you can reach mountain peaks, wine country, and the state capital.
            </p>

            {/* Day Trip Distances */}
            <h3 className="text-sm font-medium uppercase tracking-wider text-white/60 mb-4">
              Day Trip Distances
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {nearbyDestinations.map((dest) => {
                const Icon = dest.icon;
                return (
                  <div
                    key={dest.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-[#C9A24A]" />
                      <span className="text-white font-medium">{dest.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5" />
                        {dest.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {dest.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#C9A24A]/10 to-[#5A6754]/10 rounded-sm flex items-center justify-center border border-white/10">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#C9A24A]/50 mx-auto mb-4" />
                <p className="text-white/50 text-sm">Interactive Map</p>
                <p className="text-white/30 text-xs mt-1">Coming Soon</p>
              </div>
            </div>

            {/* Decorative Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-[#C9A24A] rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-[#C9A24A] rounded-full mx-auto -mt-1.5 clip-path-triangle" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ExploreCTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)] relative">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-label mb-6">Ready to Explore?</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Start Your Gold Country Adventure
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Whether you&apos;re seeking outdoor adventure, historic charm, or wine
            country relaxation, Auburn has an area waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              Things To Do
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function ExplorePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Areas Section */}
        <section className="py-20 md:py-32 bg-[var(--color-background)]">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-24 md:space-y-32"
            >
              {areas.map((area, index) => (
                <AreaCard key={area.id} area={area} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <NearbyDestinations />
        <ExploreCTA />
      </main>
      <Footer />
    </>
  );
}
