'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Grape, MapPin, Sun, Camera, Wine, Car, Clock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const wineries = [
  {
    id: 'tasting-rooms',
    title: 'Tasting Rooms',
    description: 'Auburn and the surrounding foothills are home to numerous tasting rooms where you can sample wines from local vineyards. Many are located in historic buildings in Old Town.',
    image: '/images/seasonal/spring-1.jpg',
    icon: Wine,
    features: ['Old Town Locations', 'Weekend Events', 'Wine Clubs'],
  },
  {
    id: 'vineyards',
    title: 'Vineyard Tours',
    description: 'Visit working vineyards in the El Dorado and Placer Sierra wine regions. Tour the grounds, learn about winemaking, and taste wines where the grapes are grown.',
    image: '/images/categories/food-drink.jpg',
    icon: Grape,
    features: ['Scenic Views', 'Guided Tours', 'Picnic Areas'],
  },
  {
    id: 'scenic-drives',
    title: 'Scenic Wine Routes',
    description: 'Follow winding roads through rolling hills dotted with vineyards and orchards. The drive itself is as memorable as the destinations.',
    image: '/images/seasonal/fall-1.jpg',
    icon: Car,
    features: ['Highway 49', 'Apple Hill', 'Fairplay Wine Trail'],
  },
  {
    id: 'events',
    title: 'Wine Events',
    description: 'Throughout the year, Gold Country hosts wine festivals, barrel tastings, and vineyard dinners. Check local calendars for seasonal events.',
    image: '/images/seasonal/summer-1.jpg',
    icon: Sun,
    features: ['Wine Walks', 'Harvest Festivals', 'Winemaker Dinners'],
  },
];

const wineRegions = [
  {
    name: 'Placer Sierra Foothills',
    wineries: '15+ Wineries',
    varietals: 'Zinfandel, Syrah, Barbera',
    distance: 'Immediate area',
  },
  {
    name: 'El Dorado',
    wineries: '80+ Wineries',
    varietals: 'Rhône & Italian varieties',
    distance: '30-45 min drive',
  },
  {
    name: 'Amador County',
    wineries: '40+ Wineries',
    varietals: 'Old Vine Zinfandel',
    distance: '45-60 min drive',
  },
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
      ease: [0.25, 0.46, 0.45, 0.94],
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
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/seasonal/spring-1.jpg"
          alt="Gold Country Wine Region"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="film-grain-overlay" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-end pb-20 md:pb-28"
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
              Explore Areas
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Gold Country </span>
              <span className="font-semibold text-[#E2C58F]">Wine</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Rolling hills, sun-drenched vineyards, and exceptional wines.
              Discover California&apos;s original wine country.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Grape className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">100+ Wineries</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Sun className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Ideal Climate</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Camera className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Scenic Beauty</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function WineryCard({ winery, index }: { winery: typeof wineries[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = winery.icon;

  return (
    <motion.div
      variants={itemVariants}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
          <Image
            src={winery.image}
            alt={winery.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-6 left-6 w-14 h-14 bg-[#8B6914]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 border-[#8B6914]/30 rounded-sm hidden md:block`}
        />
      </div>

      <div className={`${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8B6914]">
          Wine Country
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {winery.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {winery.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {winery.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1.5 bg-[var(--color-neutral-100)] rounded-full text-sm text-[var(--color-text-secondary)]"
            >
              {feature}
            </span>
          ))}
        </div>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#8B6914] transition-colors hover:text-[#C9A24A]"
        >
          <span>Explore Options</span>
          <span className="w-8 h-px bg-[#8B6914] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function WineRegions() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#8B6914]/10 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Day Trip Worthy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Nearby Wine Regions
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Auburn is perfectly positioned to explore multiple wine regions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {wineRegions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Grape className="w-4 h-4 text-[#C9A24A]" />
                <h3 className="font-serif text-xl text-white">{region.name}</h3>
              </div>
              <p className="text-[#C9A24A] text-sm mb-2">{region.wineries}</p>
              <p className="text-white/60 text-sm mb-3">{region.varietals}</p>
              <div className="flex items-center gap-1 text-xs text-white/40">
                <Clock className="w-3 h-3" />
                {region.distance}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WineTips() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#8B6914] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
              Insider Tips
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Wine Tasting Tips
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Make the most of your Gold Country wine experience with these helpful suggestions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <Wine className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Start Local</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Begin with Auburn&apos;s tasting rooms before venturing to further regions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <MapPin className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Designated Driver</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Consider hiring a driver or joining a wine tour group.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <Clock className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Weekday Visits</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Visit on weekdays for more intimate experiences and fewer crowds.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/categories/food-drink.jpg"
                alt="Wine tasting"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-xl max-w-xs">
              <span className="text-[#8B6914] text-3xl font-serif">100+</span>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                Wineries within an hour&apos;s drive
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)] relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-label mb-6">Cheers to Gold Country</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Sip, Savor, Explore
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            From boutique tasting rooms to sprawling vineyards, Gold Country
            offers wine experiences for every palate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              Explore Other Areas
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function GoldCountryPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section className="py-20 md:py-32 bg-[var(--color-background)]">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-24 md:space-y-32"
            >
              {wineries.map((winery, index) => (
                <WineryCard key={winery.id} winery={winery} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <WineRegions />
        <WineTips />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
