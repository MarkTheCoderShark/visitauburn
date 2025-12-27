'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Building2, Landmark, BookOpen, Camera, Clock, MapPin } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const historicSites = [
  {
    id: 'courthouse',
    title: 'Placer County Courthouse',
    year: '1898',
    description: 'This stunning Romanesque Revival courthouse has stood watch over Auburn for over 125 years. Its distinctive architecture and hilltop location make it an iconic symbol of Gold Country.',
    image: '/images/feature-old-town.jpg',
    icon: Landmark,
    features: ['Guided Tours', 'Museum', 'Historic Gardens'],
  },
  {
    id: 'old-town',
    title: 'Old Town Auburn',
    year: '1849',
    description: 'Walk the same streets where gold miners once sought their fortunes. The historic Old Town district features original 1850s buildings now home to unique shops, restaurants, and galleries.',
    image: '/images/categories/old-town-history.jpg',
    icon: Building2,
    features: ['Historic Walking Tours', 'Antique Shops', 'Local Restaurants'],
  },
  {
    id: 'museum',
    title: 'Gold Country Museum',
    year: 'Est. 1971',
    description: 'Experience the Gold Rush era through interactive exhibits, authentic mining equipment, and fascinating stories of the pioneers who shaped California.',
    image: '/images/seasonal/fall-1.jpg',
    icon: BookOpen,
    features: ['Interactive Exhibits', 'Gold Panning', 'Family Activities'],
  },
  {
    id: 'chinese-history',
    title: 'Chinese Heritage Sites',
    year: '1850s',
    description: 'Discover the rich Chinese-American heritage of Auburn, from historic buildings to the stories of the Chinese immigrants who helped build California.',
    image: '/images/seasonal/spring-1.jpg',
    icon: Camera,
    features: ['Historic Markers', 'Cultural Tours', 'Photo Opportunities'],
  },
];

const timeline = [
  { year: '1848', event: 'Gold discovered at Sutter\'s Mill, sparking the Gold Rush' },
  { year: '1849', event: 'Auburn founded by gold prospectors' },
  { year: '1851', event: 'Auburn becomes the county seat of Placer County' },
  { year: '1865', event: 'Central Pacific Railroad reaches Auburn' },
  { year: '1898', event: 'Current Placer County Courthouse completed' },
  { year: '1974', event: 'Old Town Auburn listed on National Register of Historic Places' },
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
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/feature-old-town.jpg"
          alt="Historic Old Town Auburn"
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
              Things to Do
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Old Town & </span>
              <span className="font-semibold text-[#E2C58F]">History</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Step back in time through Gold Rush-era streets, historic landmarks,
              and the stories that shaped California.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Landmark className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Est. 1849</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Building2 className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Historic District</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Camera className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Living History</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function SiteCard({ site, index }: { site: typeof historicSites[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = site.icon;

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
            src={site.image}
            alt={site.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-6 left-6 w-14 h-14 bg-[#8B6914]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
            <span className="text-sm font-medium text-[#8B6914]">{site.year}</span>
          </div>
        </div>

        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 border-[#8B6914]/30 rounded-sm hidden md:block`}
        />
      </div>

      <div className={`${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8B6914]">
          Historic Landmark
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {site.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {site.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {site.features.map((feature) => (
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
          <span>Plan Your Visit</span>
          <span className="w-8 h-px bg-[#8B6914] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function Timeline() {
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
            Through the Years
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Auburn&apos;s Timeline
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Key moments that shaped our historic Gold Country town
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A24A]/50 to-transparent" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                <span className="text-[#C9A24A] font-serif text-2xl">{item.year}</span>
                <p className="text-white/80 mt-1">{item.event}</p>
              </div>

              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#C9A24A] rounded-full border-4 border-[var(--color-neutral-900)]" />

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WalkingTours() {
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
              Explore on Foot
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Historic Walking Tours
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Join a guided walking tour through Old Town Auburn and discover
              the stories behind the buildings, the legends of the Gold Rush,
              and the characters who shaped our town.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <Clock className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Tour Duration</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">1.5 - 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <MapPin className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Meeting Point</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Placer County Courthouse</p>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 mt-8 bg-[#8B6914] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#7A5A12] transition-colors"
            >
              Book a Tour
            </Link>
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
                src="/images/categories/old-town-history.jpg"
                alt="Historic walking tour"
                fill
                className="object-cover"
              />
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
          <span className="section-label mb-6">Step Back in Time</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Experience Living History
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            From the Gold Rush to the railroad era, Auburn&apos;s history
            comes alive on every street corner.
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
              More Things to Do
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function HistoryPage() {
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
              {historicSites.map((site, index) => (
                <SiteCard key={site.id} site={site} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <Timeline />
        <WalkingTours />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
