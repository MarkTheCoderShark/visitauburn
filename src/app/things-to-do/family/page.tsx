'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Users, Smile, TreePine, Waves, Camera, MapPin, Clock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const activities = [
  {
    id: 'gold-panning',
    title: 'Gold Panning Adventures',
    ageRange: 'All Ages',
    description: 'Experience the thrill of the Gold Rush! Learn to pan for gold just like the forty-niners did. Many kids find real gold flakes to take home as souvenirs.',
    image: '/images/seasonal/summer-1.jpg',
    icon: Smile,
    tips: ['Wear clothes that can get wet', 'Available year-round', 'Gold is yours to keep'],
  },
  {
    id: 'nature-walks',
    title: 'Family Nature Walks',
    ageRange: 'All Ages',
    description: 'Explore easy, stroller-friendly trails through oak woodlands. Spot wildlife, discover wildflowers, and enjoy nature together as a family.',
    image: '/images/OutdoorAdventures.png',
    icon: TreePine,
    tips: ['Easy, flat trails available', 'Bring binoculars', 'Best in spring for wildflowers'],
  },
  {
    id: 'swimming',
    title: 'River Swimming',
    ageRange: '5+',
    description: 'Cool off in natural swimming holes along the American River. Shallow areas are perfect for little ones, while older kids can explore deeper pools.',
    image: '/images/seasonal/summer-1.jpg',
    icon: Waves,
    tips: ['Adult supervision required', 'Bring water shoes', 'Summer months only'],
  },
  {
    id: 'museum',
    title: 'Interactive Museums',
    ageRange: 'All Ages',
    description: 'The Gold Country Museum offers hands-on exhibits that bring history to life. Kids can explore a replica mine tunnel and learn about life in the 1800s.',
    image: '/images/feature-old-town.jpg',
    icon: Camera,
    tips: ['Indoor activity option', 'Educational programs', 'Gift shop with souvenirs'],
  },
];

const familyTips = [
  {
    title: 'Best Times to Visit',
    content: 'Spring and fall offer mild temperatures perfect for outdoor activities. Summer is great for water activities but can be hot.',
  },
  {
    title: 'Dining with Kids',
    content: 'Many Old Town restaurants welcome families with kids\' menus and outdoor seating where little ones can move around.',
  },
  {
    title: 'Stroller-Friendly Areas',
    content: 'Downtown Auburn and the paved portions of the Confluence Trail are stroller-accessible.',
  },
  {
    title: 'Rainy Day Ideas',
    content: 'Visit the Gold Country Museum, explore the antique shops, or catch a movie at the historic State Theatre.',
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
          alt="Family Fun in Auburn"
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
              Things to Do
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Family </span>
              <span className="font-semibold text-[#E2C58F]">Fun</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Adventures and activities for all ages to enjoy together.
              Make lasting memories in California&apos;s Gold Country.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Users className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">All Ages Welcome</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Smile className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Kid-Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <TreePine className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Outdoor Adventures</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function ActivityCard({ activity, index }: { activity: typeof activities[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = activity.icon;

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
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-6 left-6 w-14 h-14 bg-[#6F7F68]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
            <span className="text-sm font-medium text-[#6F7F68]">Ages: {activity.ageRange}</span>
          </div>
        </div>

        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 border-[#6F7F68]/30 rounded-sm hidden md:block`}
        />
      </div>

      <div className={`${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#6F7F68]">
          Family Activity
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {activity.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {activity.description}
        </p>

        <div className="space-y-3 mb-8">
          {activity.tips.map((tip) => (
            <div key={tip} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] mt-2.5 flex-shrink-0" />
              {tip}
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#6F7F68] transition-colors hover:text-[#C9A24A]"
        >
          <span>Learn More</span>
          <span className="w-8 h-px bg-[#6F7F68] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function FamilyTips() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6F7F68]/10 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Helpful Information
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Family Travel Tips
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Everything you need to know for a perfect family getaway
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {familyTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6"
            >
              <h3 className="font-serif text-xl text-white mb-3">{tip.title}</h3>
              <p className="text-white/60">{tip.content}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SampleItinerary() {
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
            <span className="text-[#6F7F68] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
              A Perfect Day
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Family Day Itinerary
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Here&apos;s a sample itinerary for a fun-filled family day in Auburn.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#C9A24A] font-medium">9:00 AM</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Breakfast in Old Town</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Start with a family breakfast at a local café</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#C9A24A] font-medium">10:30 AM</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Gold Country Museum</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Explore interactive exhibits and pan for gold</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#C9A24A] font-medium">12:30 PM</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Picnic at the Park</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Enjoy lunch at Regional Park with playground access</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#C9A24A] font-medium">2:00 PM</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Nature Walk</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Easy trail walk along the Confluence area</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#C9A24A] font-medium">4:00 PM</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Ice Cream & Shopping</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Treat the family to ice cream and browse shops</p>
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
                src="/images/seasonal/spring-1.jpg"
                alt="Family activities"
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
          <span className="section-label mb-6">Plan Your Family Adventure</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Make Memories Together
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            From gold panning to nature walks, Auburn offers endless opportunities
            for family bonding and adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#6F7F68] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#5A6754] transition-colors shadow-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#6F7F68] hover:text-[#6F7F68] transition-colors"
            >
              More Things to Do
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function FamilyPage() {
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
              {activities.map((activity, index) => (
                <ActivityCard key={activity.id} activity={activity} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <FamilyTips />
        <SampleItinerary />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
