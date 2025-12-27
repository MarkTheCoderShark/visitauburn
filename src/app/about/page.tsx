'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Building2, ShoppingBag, Leaf, Users, Mountain, Sun, MapPin, TreePine } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const timeline = [
  { year: '1848', title: 'Gold Discovery', description: 'Gold is discovered at nearby Sutter\'s Mill, sparking the California Gold Rush.' },
  { year: '1850', title: 'County Seat', description: 'Auburn becomes the county seat of Placer County.' },
  { year: '1865', title: 'Railroad Arrives', description: 'The Central Pacific Railroad reaches Auburn.' },
  { year: '1898', title: 'Courthouse Built', description: 'The iconic Placer County Courthouse is constructed.' },
  { year: '1974', title: 'Western States', description: 'The first Western States Endurance Run finishes in Auburn.' },
  { year: 'Today', title: 'Thriving Community', description: 'Auburn honors its heritage while embracing the future.' },
];

const values = [
  {
    icon: Building2,
    title: 'Preserve Heritage',
    description: 'We protect and celebrate our Gold Rush-era downtown and natural landscapes.',
    color: '#B8860B',
  },
  {
    icon: ShoppingBag,
    title: 'Support Local',
    description: 'Our local businesses, farmers, and artisans are the backbone of our community.',
    color: '#8B6914',
  },
  {
    icon: Leaf,
    title: 'Protect Nature',
    description: 'We steward our rivers, trails, and wild spaces for future generations.',
    color: '#5A6754',
  },
  {
    icon: Users,
    title: 'Welcome All',
    description: 'Auburn welcomes visitors of all backgrounds, abilities, and interests.',
    color: '#6F7F68',
  },
];

const stats = [
  { icon: Mountain, value: '175+', label: 'Years of History' },
  { icon: TreePine, value: '42K', label: 'Acres of Parkland' },
  { icon: MapPin, value: '100+', label: 'Miles of Trails' },
  { icon: Sun, value: '300', label: 'Days of Sunshine' },
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
          src="/images/categories/old-town-history.jpg"
          alt="Historic Auburn California"
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
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">The Heart of </span>
              <span className="font-semibold text-[#E2C58F]">Gold Country</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Since 1848, Auburn has been where adventure meets history,
              where natural beauty inspires, and where community thrives.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/feature-old-town.jpg"
                alt="Historic Old Town Auburn"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C9A24A]/30 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label--left mb-4 block text-[#C9A24A]">Our Legacy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              A Legacy of Gold Rush Spirit
            </h2>

            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Auburn&apos;s story begins with the discovery of gold in 1848, when prospectors
                flooded into the Sierra Nevada foothills in search of fortune. What they
                found was more than gold - they discovered a place of extraordinary natural
                beauty at the confluence of ancient rivers.
              </p>
              <p>
                Today, that pioneering spirit lives on. Auburn has evolved from a mining
                camp into a thriving community that honors its heritage while embracing
                the future. Our historic downtown, preserved Gold Rush-era buildings,
                and world-renowned trails tell the story of a place shaped by dreams,
                determination, and the land itself.
              </p>
              <p>
                Whether you come to explore our trails, taste our farm-to-fork cuisine,
                or simply wander our charming streets, you&apos;ll discover why Auburn
                has been capturing hearts for nearly two centuries.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function TimelineSection() {
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
          <span className="section-label mb-4">Our Journey</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)]">
            A Brief History
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A24A] via-[#C9A24A]/50 to-transparent md:-translate-x-1/2" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year Bubble */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C9A24A] flex items-center justify-center z-10 shadow-lg shadow-[#C9A24A]/30">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <span className="text-2xl font-serif font-light text-[#C9A24A]">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-lg text-[var(--color-text-primary)] mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
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
          <span className="section-label mb-4">Our Commitment</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Stewardship Values
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            As stewards of this special place, we preserve what makes Auburn extraordinary
            for visitors today and generations to come.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-8 bg-white rounded-sm border border-[var(--color-neutral-200)]"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A24A]/5 to-transparent" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <Icon className="w-8 h-8 text-[#C9A24A] mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-serif font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mb-12" />

          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-primary)] leading-relaxed font-light italic mb-8">
            &ldquo;Auburn is not just a place to visit - it&apos;s a place that becomes part of you.
            The trails, the history, the community spirit... it all comes together to create
            something truly special.&rdquo;
          </blockquote>

          <div className="text-[#C9A24A] text-sm tracking-wider uppercase">
            Local Resident
          </div>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mt-12" />
        </motion.div>
      </Container>
    </section>
  );
}

function CTASection() {
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
          <span className="section-label mb-6">Start Exploring</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Ready to Experience Auburn?
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Start planning your Gold Country adventure today and discover
            why Auburn has been captivating visitors for over 175 years.
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              Things To Do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <TimelineSection />
        <ValuesSection />
        <StatsSection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
