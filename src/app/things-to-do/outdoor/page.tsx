'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Mountain, Waves, Bike, TreePine, Sun, MapPin, Clock, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const activities = [
  {
    id: 'hiking',
    title: 'Hiking & Trail Running',
    description: 'Explore over 100 miles of trails through oak woodlands, chaparral, and along the American River canyon. The legendary Western States Trail starts right here.',
    image: '/images/outdoor-hill.jpg',
    icon: Mountain,
    highlights: ['Western States Trail', 'Confluence Trail', 'Stagecoach Trail'],
    difficulty: 'Easy to Expert',
  },
  {
    id: 'water',
    title: 'River Adventures',
    description: 'The American River offers world-class whitewater rafting, kayaking, and swimming. Cool off in natural swimming holes or paddle through Class III rapids.',
    image: '/images/outdoor-trails.webp',
    icon: Waves,
    highlights: ['Whitewater Rafting', 'Kayaking', 'Swimming Holes'],
    difficulty: 'Beginner to Advanced',
  },
  {
    id: 'biking',
    title: 'Mountain Biking',
    description: 'From flowy singletrack to technical descents, Auburn is a mountain biking paradise. The Confluence area offers miles of purpose-built trails.',
    image: '/images/outdoor-cardiac.jpg',
    icon: Bike,
    highlights: ['Cool Springs Trail', 'Knickerbocker', 'Clementine Loop'],
    difficulty: 'Intermediate to Expert',
  },
  {
    id: 'nature',
    title: 'Nature & Wildlife',
    description: 'Discover the diverse ecosystems of the Sierra foothills. Birdwatching, wildflower viewing, and wildlife photography opportunities abound year-round.',
    image: '/images/outdoor-hiddenfalls.png',
    icon: TreePine,
    highlights: ['Spring Wildflowers', 'Bird Watching', 'Wildlife Photography'],
    difficulty: 'All Levels',
  },
];

const featuredTrails = [
  {
    name: 'Western States Trail',
    distance: '100 miles total',
    elevation: 'Varies',
    description: 'The iconic trail that hosts the Western States 100-Mile Endurance Run.',
  },
  {
    name: 'Confluence Loop',
    distance: '4.5 miles',
    elevation: '800 ft gain',
    description: 'A beautiful loop where the North and Middle Forks of the American River meet.',
  },
  {
    name: 'Quarry Trail',
    distance: '2.2 miles',
    elevation: '400 ft gain',
    description: 'A scenic trail with historic quarry sites and river views.',
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
          src="/images/outdoor-trails.webp"
          alt="Auburn Outdoor Adventures"
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
              <span className="font-light italic">Outdoor </span>
              <span className="font-semibold text-[#E2C58F]">Adventures</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Where rugged canyons meet rushing rivers. Auburn is your gateway
              to some of California&apos;s most spectacular outdoor experiences.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Mountain className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">100+ Miles of Trails</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Waves className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">River Access</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Sun className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Year-Round Activities</span>
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

          <div className="absolute top-6 left-6 w-14 h-14 bg-[#5A6754]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 border-[#5A6754]/30 rounded-sm hidden md:block`}
        />
      </div>

      <div className={`${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#5A6754]">
          {activity.difficulty}
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {activity.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {activity.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {activity.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1.5 bg-[var(--color-neutral-100)] rounded-full text-sm text-[var(--color-text-secondary)]"
            >
              {highlight}
            </span>
          ))}
        </div>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#5A6754] transition-colors hover:text-[#C9A24A]"
        >
          <span>Learn More</span>
          <span className="w-8 h-px bg-[#5A6754] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function FeaturedTrails() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#5A6754]/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#C9A24A]/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Featured Trails
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Popular Routes
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            From quick morning hikes to epic all-day adventures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredTrails.map((trail, index) => (
            <motion.div
              key={trail.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="font-serif text-xl text-white mb-3">{trail.name}</h3>
              <p className="text-white/60 text-sm mb-4">{trail.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {trail.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Mountain className="w-4 h-4" />
                  {trail.elevation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SafetyTips() {
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
            <span className="text-[#5A6754] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
              Stay Safe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Adventure Responsibly
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              The Sierra foothills offer incredible outdoor experiences, but preparation
              is key. Here are some essential tips for a safe adventure.
            </p>

            <ul className="space-y-4">
              {[
                'Bring plenty of water - at least 1 liter per hour of activity',
                'Check weather conditions and trail status before heading out',
                'Tell someone your plans and expected return time',
                'Stay on marked trails and respect wildlife',
                'Pack the 10 essentials for any backcountry adventure',
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] mt-2.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
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
                src="/images/seasonal/fall-1.jpg"
                alt="Trail safety"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#C9A24A]" />
                <span className="font-medium text-[var(--color-text-primary)]">Guided Tours Available</span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Local guides offer hiking, biking, and rafting tours for all skill levels.
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
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235A6754' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-label mb-6">Ready for Adventure?</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Your Next Adventure Awaits
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Whether you&apos;re a seasoned trail runner or a first-time hiker,
            Auburn has the perfect outdoor experience for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5A6754] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#4A5744] transition-colors shadow-lg"
            >
              Plan Your Adventure
            </Link>
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#5A6754] hover:text-[#5A6754] transition-colors"
            >
              More Things to Do
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function OutdoorPage() {
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

        <FeaturedTrails />
        <SafetyTips />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
