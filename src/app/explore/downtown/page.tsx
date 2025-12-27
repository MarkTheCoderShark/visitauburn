'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Building2, Clock, MapPin, Utensils, ShoppingBag, Camera, Landmark } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const highlights = [
  {
    id: 'courthouse',
    title: 'Placer County Courthouse',
    description: 'The stunning 1898 Romanesque Revival courthouse crowns Auburn\'s historic hill. Its distinctive dome and warm red brick make it one of the most photographed landmarks in Gold Country.',
    image: '/images/feature-old-town.jpg',
    icon: Landmark,
    details: ['Built in 1898', 'Free Public Tours', 'Historic Gardens'],
  },
  {
    id: 'old-town',
    title: 'Historic Old Town',
    description: 'Wander through streets lined with buildings from the 1850s-1880s. Original storefronts now house antique shops, art galleries, restaurants, and boutiques.',
    image: '/images/categories/old-town-history.jpg',
    icon: Building2,
    details: ['1850s Architecture', 'Walking Tours', 'National Historic Register'],
  },
  {
    id: 'dining',
    title: 'Farm-to-Fork Dining',
    description: 'Downtown Auburn is home to some of the region\'s best restaurants, from casual cafés to upscale dining. Local chefs celebrate the bounty of nearby farms and ranches.',
    image: '/images/categories/food-drink.jpg',
    icon: Utensils,
    details: ['Local Cuisine', 'Wine Bars', 'Outdoor Patios'],
  },
  {
    id: 'shopping',
    title: 'Unique Shopping',
    description: 'Discover one-of-a-kind treasures in downtown\'s eclectic mix of shops. From antiques to artisan goods, there\'s something special around every corner.',
    image: '/images/categories/shopping-art.jpg',
    icon: ShoppingBag,
    details: ['Antique Shops', 'Local Artisans', 'Gift Boutiques'],
  },
];

const walkingRoute = [
  { stop: 'Placer County Courthouse', time: 'Start here', note: 'Pick up a walking tour map at the courthouse' },
  { stop: 'Shanghai Restaurant Bar', time: '5 min walk', note: 'Historic Chinese restaurant building' },
  { stop: 'Antique Row', time: '3 min walk', note: 'Browse multiple antique shops' },
  { stop: 'Firehouse Museum', time: '2 min walk', note: 'Free admission, local history exhibits' },
  { stop: 'Old Town Commercial Street', time: '5 min walk', note: 'Restaurants and galleries' },
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
          src="/images/feature-old-town.jpg"
          alt="Downtown Auburn"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
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
              <span className="font-light italic">Downtown </span>
              <span className="font-semibold text-[#E2C58F]">Auburn</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              The historic heart of Gold Country. Where 1850s architecture
              meets modern California charm.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Building2 className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Historic District</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Camera className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Photo Opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Utensils className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Dining & Shopping</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function HighlightCard({ highlight, index }: { highlight: typeof highlights[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = highlight.icon;

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
            src={highlight.image}
            alt={highlight.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-6 left-6 w-14 h-14 bg-[#B8860B]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 border-[#B8860B]/30 rounded-sm hidden md:block`}
        />
      </div>

      <div className={`${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8860B]">
          Downtown Highlight
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {highlight.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {highlight.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {highlight.details.map((detail) => (
            <span
              key={detail}
              className="px-3 py-1.5 bg-[var(--color-neutral-100)] rounded-full text-sm text-[var(--color-text-secondary)]"
            >
              {detail}
            </span>
          ))}
        </div>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#B8860B] transition-colors hover:text-[#C9A24A]"
        >
          <span>Learn More</span>
          <span className="w-8 h-px bg-[#B8860B] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function WalkingTour() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#B8860B]/10 to-transparent" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
              Self-Guided
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Historic Walking Tour
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Explore downtown Auburn on foot with this self-guided walking tour.
              The entire route takes about 90 minutes at a leisurely pace.
            </p>

            <div className="space-y-4">
              {walkingRoute.map((stop, index) => (
                <div key={stop.stop} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A24A] flex items-center justify-center text-white font-medium text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-white">{stop.stop}</h4>
                      <span className="text-xs text-white/50">{stop.time}</span>
                    </div>
                    <p className="text-sm text-white/60">{stop.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#C9A24A]/10 to-[#5A6754]/10 rounded-sm flex items-center justify-center border border-white/10">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#C9A24A]/50 mx-auto mb-4" />
                <p className="text-white/50 text-sm">Walking Tour Map</p>
                <p className="text-white/30 text-xs mt-1">Pick up a printed map at the Courthouse</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function VisitorInfo() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8860B] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Plan Your Visit
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4">
            Visitor Information
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-sm shadow-sm"
          >
            <Clock className="w-8 h-8 text-[#C9A24A] mb-4" />
            <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">Best Times</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Most shops open 10am-5pm. Farmers Market every Saturday 8am-12pm.
              Third Thursday Art Walks monthly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-sm shadow-sm"
          >
            <MapPin className="w-8 h-8 text-[#C9A24A] mb-4" />
            <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">Parking</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Free street parking throughout downtown. Additional lots at the Courthouse
              and near Old Town.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-sm shadow-sm"
          >
            <Camera className="w-8 h-8 text-[#C9A24A] mb-4" />
            <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">Photo Spots</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              The Courthouse dome, Old Town storefronts, and the historic firehouse
              are popular photo locations.
            </p>
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
          <span className="section-label mb-6">Explore More</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Discover Downtown Auburn
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            From historic landmarks to hidden gems, downtown Auburn
            offers endless discoveries around every corner.
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

export default function DowntownPage() {
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
              {highlights.map((highlight, index) => (
                <HighlightCard key={highlight.id} highlight={highlight} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <WalkingTour />
        <VisitorInfo />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
