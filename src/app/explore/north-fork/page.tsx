'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Mountain, Waves, Bike, Sun, TreePine, MapPin, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const activities = [
  {
    id: 'hiking',
    title: 'Hiking & Trail Running',
    description: 'The North Fork American River canyon offers some of the most spectacular trails in the Sierra foothills. From the legendary Western States Trail to hidden canyon gems, there\'s terrain for every level.',
    image: '/images/OutdoorAdventures.png',
    icon: Mountain,
    trails: ['Western States Trail', 'Quarry Road Trail', 'Clementine Trail'],
  },
  {
    id: 'water',
    title: 'River Adventures',
    description: 'Experience world-class whitewater or find a peaceful swimming hole. The North Fork offers everything from Class III rapids for rafting to calm pools perfect for a summer cool-down.',
    image: '/images/seasonal/summer-1.jpg',
    icon: Waves,
    trails: ['Raft Trips', 'Kayaking', 'Swimming Holes'],
  },
  {
    id: 'biking',
    title: 'Mountain Biking',
    description: 'Miles of singletrack wind through oak woodlands and along canyon rims. The confluence area is known for flowy trails with stunning views of the river below.',
    image: '/images/OutdoorAdventures.png',
    icon: Bike,
    trails: ['Confluence Trails', 'Pointed Rocks', 'Training Hill'],
  },
  {
    id: 'nature',
    title: 'Wildlife & Nature',
    description: 'The canyon ecosystem supports diverse wildlife including deer, wild turkeys, hawks, and the occasional bear. Spring brings spectacular wildflower displays.',
    image: '/images/seasonal/spring-1.jpg',
    icon: TreePine,
    trails: ['Birding', 'Wildflowers', 'Wildlife Viewing'],
  },
];

const accessPoints = [
  {
    name: 'Auburn State Recreation Area',
    description: 'Main access with parking, restrooms, and trail connections.',
    access: 'Highway 49 at the confluence',
  },
  {
    name: 'Quarry Road',
    description: 'Popular trailhead for hikers and mountain bikers.',
    access: 'Off Highway 49 north of Auburn',
  },
  {
    name: 'Upper Lake Clementine',
    description: 'Boat launch and swimming access.',
    access: 'Via Foresthill Road',
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
          src="/images/OutdoorAdventures.png"
          alt="North Fork American River"
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
              <span className="font-light italic">North Fork </span>
              <span className="font-semibold text-[#E2C58F]">Canyon</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Wild canyon country where rushing rivers carve through ancient rock.
              Adventure awaits around every bend.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <Mountain className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Epic Trails</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Waves className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">River Access</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Sun className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Year-Round</span>
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
          Canyon Adventure
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {activity.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {activity.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {activity.trails.map((trail) => (
            <span
              key={trail}
              className="px-3 py-1.5 bg-[var(--color-neutral-100)] rounded-full text-sm text-[var(--color-text-secondary)]"
            >
              {trail}
            </span>
          ))}
        </div>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#5A6754] transition-colors hover:text-[#C9A24A]"
        >
          <span>Plan Your Adventure</span>
          <span className="w-8 h-px bg-[#5A6754] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function AccessPoints() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#5A6754]/10 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            Getting There
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Access Points
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Multiple entry points provide access to the North Fork canyon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {accessPoints.map((point, index) => (
            <motion.div
              key={point.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#C9A24A]" />
                <h3 className="font-serif text-xl text-white">{point.name}</h3>
              </div>
              <p className="text-white/60 text-sm mb-3">{point.description}</p>
              <p className="text-xs text-[#C9A24A]">{point.access}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SafetyInfo() {
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
              Canyon Safety
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              The North Fork canyon is remote and rugged. Proper preparation is essential
              for a safe and enjoyable experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <AlertTriangle className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Water & Supplies</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Bring at least 1 liter of water per hour of activity. No services in the canyon.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <AlertTriangle className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">River Safety</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Never swim alone. Check water levels and conditions before water activities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <AlertTriangle className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Weather Awareness</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Summer temps can exceed 100°F. Start early and avoid midday heat.
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
                src="/images/seasonal/fall-1.jpg"
                alt="North Fork Canyon"
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
          <span className="section-label mb-6">Ready for Adventure?</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Explore the Canyon
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            The North Fork American River canyon offers some of the most
            spectacular outdoor experiences in California.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5A6754] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#4A5744] transition-colors shadow-lg"
            >
              Plan Your Adventure
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#5A6754] hover:text-[#5A6754] transition-colors"
            >
              Explore Other Areas
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function NorthForkPage() {
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

        <AccessPoints />
        <SafetyInfo />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
