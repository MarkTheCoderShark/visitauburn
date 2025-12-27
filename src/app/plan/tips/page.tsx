'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  ArrowRight, Sun, Cloud, Snowflake, Leaf, Flower2,
  Thermometer, Droplets, AlertTriangle, Check, Info,
  Camera, Shirt, ShoppingBag, Phone, MapPin, Clock,
  Calendar, Utensils, Mountain, Car, Wifi, DollarSign
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const seasons = [
  {
    id: 'spring',
    name: 'Spring',
    months: 'March - May',
    icon: Flower2,
    color: '#7C9A5F',
    temp: '55-75°F',
    description: 'Wildflower blooms paint the hillsides. Waterfalls are at their peak. Perfect hiking weather.',
    highlights: ['Wildflower viewing', 'Waterfall hikes', 'Outdoor dining'],
    tips: ['Book accommodations early for wildflower season', 'Trails can be muddy—bring waterproof boots'],
  },
  {
    id: 'summer',
    name: 'Summer',
    months: 'June - August',
    icon: Sun,
    color: '#D4A24B',
    temp: '70-95°F',
    description: 'Long days and warm nights. River activities are in full swing. Early morning hikes beat the heat.',
    highlights: ['River swimming', 'Whitewater rafting', 'Outdoor concerts'],
    tips: ['Start hikes before 8am to avoid heat', 'Always carry extra water—at least 1L per hour'],
  },
  {
    id: 'fall',
    name: 'Fall',
    months: 'September - November',
    icon: Leaf,
    color: '#C9733B',
    temp: '50-80°F',
    description: 'The most popular season. Perfect temperatures, fall colors, and harvest celebrations.',
    highlights: ['Fall foliage', 'Wine harvest', 'Farmers markets'],
    tips: ['October is peak—book far in advance', 'Pack layers for variable temperatures'],
  },
  {
    id: 'winter',
    name: 'Winter',
    months: 'December - February',
    icon: Snowflake,
    color: '#6B8CAE',
    temp: '35-55°F',
    description: 'Quiet and peaceful. Occasional rain brings green hills. Easy access to nearby ski resorts.',
    highlights: ['Cozy dining', 'Holiday events', 'Day trips to Tahoe'],
    tips: ['Check I-80 conditions if heading to mountains', 'Great time for uncrowded trails'],
  },
];

const packingEssentials = [
  {
    category: 'Clothing',
    icon: Shirt,
    items: [
      'Layers (temperatures vary 30°+ daily)',
      'Comfortable walking shoes',
      'Sun hat and sunglasses',
      'Light jacket (even in summer evenings)',
      'Swimsuit (for river activities)',
    ],
  },
  {
    category: 'Outdoor Gear',
    icon: Mountain,
    items: [
      'Hiking boots or trail shoes',
      'Daypack with water bladder',
      'Sunscreen SPF 30+',
      'Bug spray (spring/summer)',
      'Trekking poles (optional)',
    ],
  },
  {
    category: 'Tech & Essentials',
    icon: Camera,
    items: [
      'Camera for scenic views',
      'Portable charger',
      'Downloaded offline maps',
      'Reusable water bottle',
      'First aid basics',
    ],
  },
];

const localInsights = [
  {
    title: 'Best Photo Spots',
    icon: Camera,
    tips: [
      'Foresthill Bridge at sunset',
      'No Hands Bridge any time',
      'Old Town courthouse',
      'Hidden Falls overlook',
      'Confluence point at golden hour',
    ],
  },
  {
    title: 'Dining Tips',
    icon: Utensils,
    tips: [
      'Make reservations for weekend dinners',
      'Try the local farm-to-fork spots',
      'Farmers market Saturday mornings',
      'Ask locals for hidden gem cafes',
      'Wine tasting rooms often have food pairings',
    ],
  },
  {
    title: 'Getting Around',
    icon: Car,
    tips: [
      'Downtown is very walkable',
      'A car is needed for trails and wineries',
      'Free parking throughout Old Town',
      'Uber/Lyft available but limited',
      'Bike rentals for rail trail',
    ],
  },
  {
    title: 'Money & Connectivity',
    icon: Wifi,
    tips: [
      'Most places accept cards',
      'ATMs in downtown area',
      'Cell service good in town',
      'Spotty coverage on remote trails',
      'Download maps offline',
    ],
  },
];

const dosDonts = {
  dos: [
    'Start hikes early to beat the heat',
    'Carry more water than you think you need',
    'Make dinner reservations, especially weekends',
    'Tell someone your hiking plans',
    'Try local wines—they\'re underrated',
    'Explore beyond the main streets',
    'Support local shops and restaurants',
    'Check trail conditions before heading out',
  ],
  donts: [
    'Don\'t underestimate summer heat',
    'Don\'t skip sunscreen (even on cloudy days)',
    'Don\'t leave valuables visible in your car',
    'Don\'t feed wildlife',
    'Don\'t hike alone in remote areas',
    'Don\'t forget layers for evening cool-downs',
    'Don\'t swim in the river without checking conditions',
    'Don\'t miss the sunset—it\'s spectacular',
  ],
};

const emergencyInfo = [
  { label: 'Emergency', value: '911' },
  { label: 'Visitor Center', value: '(530) 885-0540' },
  { label: 'Sutter Auburn Hospital', value: '(530) 888-4500' },
  { label: 'CalTrans Road Conditions', value: '1-800-427-7623' },
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
          src="/images/seasonal/spring-1.jpg"
          alt="Auburn California Travel Tips"
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
              <span className="font-light italic">Travel </span>
              <span className="font-semibold text-[#E2C58F]">Tips</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Local insights and practical advice to help you make the most
              of your Gold Country adventure.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function SeasonsSection() {
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
          <span className="section-label mb-4">When to Visit</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Seasonal Guide
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Auburn is beautiful year-round, but each season offers a unique experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {seasons.map((season) => {
            const Icon = season.icon;
            return (
              <motion.div
                key={season.id}
                variants={itemVariants}
                className="group bg-white rounded-sm border border-[var(--color-neutral-200)] p-6 hover:shadow-xl hover:border-transparent transition-all duration-500"
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${season.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: season.color }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-text-primary)]">
                      {season.name}
                    </h3>
                    <span className="text-xs text-[var(--color-text-muted)]">{season.months}</span>
                  </div>
                </div>

                {/* Temperature */}
                <div className="flex items-center gap-2 mb-4">
                  <Thermometer className="w-4 h-4 text-[var(--color-text-muted)]" />
                  <span className="text-sm font-medium" style={{ color: season.color }}>
                    {season.temp}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {season.description}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                    Highlights
                  </span>
                  <ul className="mt-2 space-y-1">
                    {season.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: season.color }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div className="pt-4 border-t border-[var(--color-neutral-200)]">
                  <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                    Pro Tips
                  </span>
                  <ul className="mt-2 space-y-2">
                    {season.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
                        <Info className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: season.color }} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function PackingSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C9A24A]/5 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Be Prepared
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Packing Essentials
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            What to bring for a comfortable and prepared visit to Auburn.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {packingEssentials.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C9A24A]" />
                  </div>
                  <h3 className="font-serif text-xl text-white">{category.category}</h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-4 h-4 text-[#C9A24A] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function LocalInsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">From the Locals</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4">
            Insider Tips
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Advice from Auburn residents to help you experience the city like a local.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {localInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.title}
                variants={itemVariants}
                className="bg-white rounded-sm border border-[var(--color-neutral-200)] p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C9A24A]" />
                  </div>
                  <h3 className="font-serif text-lg text-[var(--color-text-primary)]">
                    {insight.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {insight.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-1 h-1 rounded-full bg-[#C9A24A] mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function DosDontsSection() {
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
          <span className="section-label mb-4">Quick Reference</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Do&apos;s & Don&apos;ts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#5A6754]/10 border border-[#5A6754]/20 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5A6754] flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-[#5A6754]">Do</h3>
            </div>

            <ul className="space-y-3">
              {dosDonts.dos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <Check className="w-4 h-4 text-[#5A6754] mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#C9733B]/10 border border-[#C9733B]/20 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C9733B] flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-[#C9733B]">Don&apos;t</h3>
            </div>

            <ul className="space-y-3">
              {dosDonts.donts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-[#C9733B] mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function EmergencySection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-neutral-100)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-sm border border-[var(--color-neutral-200)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-6 h-6 text-[#C9A24A]" />
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)]">
                Important Numbers
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {emergencyInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex justify-between items-center p-4 bg-[var(--color-neutral-100)] rounded"
                >
                  <span className="text-[var(--color-text-secondary)]">{info.label}</span>
                  <a
                    href={`tel:${info.value.replace(/[^0-9]/g, '')}`}
                    className="font-medium text-[#B8860B] hover:text-[#8B6914] transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#C9A24A]/10 border border-[#C9A24A]/20 rounded">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C9A24A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <strong>Visitor Center:</strong> Located in Old Town Auburn at
                    601 Lincoln Way. Open Mon-Fri 9am-5pm, Sat 10am-4pm.
                    Stop by for maps, brochures, and personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
          <span className="section-label mb-6">All Set?</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            You&apos;re Ready for Auburn!
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            With these tips in hand, you&apos;re prepared for an amazing Gold Country experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors"
            >
              Explore Things to Do
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/plan/itineraries"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              View Itineraries
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function TipsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SeasonsSection />
        <PackingSection />
        <LocalInsightsSection />
        <DosDontsSection />
        <EmergencySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
