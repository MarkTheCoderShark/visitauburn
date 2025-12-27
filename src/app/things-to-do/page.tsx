'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Mountain, Palette, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const categories = [
  {
    id: 'outdoor',
    title: 'Outdoor Adventures',
    subtitle: 'Wild Spaces Await',
    description: 'From legendary trails to rushing rivers, Auburn sits at the gateway to some of California\'s most breathtaking outdoor experiences. Hike the Western States Trail, raft the American River, or find solitude in the Sierra foothills.',
    href: '/things-to-do/outdoor',
    image: '/images/OutdoorAdventures.png',
    icon: Mountain,
    color: '#5A6754',
    stats: [
      { label: 'Miles of Trails', value: '100+' },
      { label: 'River Access Points', value: '12' },
    ],
  },
  {
    id: 'arts-culture',
    title: 'Arts & Culture',
    subtitle: 'Creative Spirit',
    description: 'Discover Auburn\'s vibrant creative scene through galleries showcasing local artists, live performances at historic venues, and a community that celebrates artistic expression in all its forms.',
    href: '/things-to-do/arts-culture',
    image: '/images/categories/old-town-history.jpg',
    icon: Palette,
    color: '#8B6914',
    stats: [
      { label: 'Galleries', value: '15+' },
      { label: 'Live Venues', value: '8' },
    ],
  },
  {
    id: 'food-drink',
    title: 'Food & Drink',
    subtitle: 'Farm to Fork',
    description: 'Savor the flavors of Gold Country with farm-to-fork cuisine, award-winning wineries, craft breweries, and a culinary scene that celebrates local ingredients and California\'s diverse food culture.',
    href: '/things-to-do/food-drink',
    image: '/images/categories/food-drink.jpg',
    icon: UtensilsCrossed,
    color: '#B8860B',
    stats: [
      { label: 'Restaurants', value: '50+' },
      { label: 'Wineries Nearby', value: '20+' },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping',
    subtitle: 'Treasures & Finds',
    description: 'Wander through charming boutiques in historic storefronts, discover antique treasures, and support local artisans. From handcrafted goods to vintage finds, Auburn\'s shops tell stories of their own.',
    href: '/things-to-do/shopping',
    image: '/images/categories/shopping-art.jpg',
    icon: ShoppingBag,
    color: '#6F7F68',
    stats: [
      { label: 'Unique Shops', value: '40+' },
      { label: 'Antique Dealers', value: '12' },
    ],
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
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/OutdoorAdventures.png"
          alt="Auburn California Outdoor Adventures"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

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
              Explore Auburn
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Things to </span>
              <span className="font-semibold text-[#E2C58F]">Do</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              From mountain trails to Main Street, discover experiences that define
              the heart of California&apos;s Gold Country.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = category.icon;

  return (
    <motion.div
      variants={itemVariants}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-0 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Image Side */}
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <Link href={category.href} className="group block">
          <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-sm">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Icon */}
            <div
              className="absolute top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${category.color}CC` }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </Link>

        {/* Decorative Corner */}
        <div
          className={`absolute -bottom-4 ${isEven ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} w-24 h-24 border-2 rounded-sm opacity-30 hidden md:block`}
          style={{ borderColor: category.color }}
        />
      </div>

      {/* Content Side */}
      <div className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'}`}>
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase"
          style={{ color: category.color }}
        >
          {category.subtitle}
        </span>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {category.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {category.description}
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-8">
          {category.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl md:text-4xl font-serif font-light"
                style={{ color: category.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={category.href}
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase transition-colors"
          style={{ color: category.color }}
        >
          <span>Explore {category.title}</span>
          <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ backgroundColor: category.color }} />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function QuoteSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C9A24A]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#C9A24A]/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent mx-auto mb-12" />

          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light italic">
            &ldquo;Auburn is where the mountains meet history, where adventure finds
            its home, and where every path leads to discovery.&rdquo;
          </blockquote>

          <div className="mt-8 text-[#C9A24A] text-sm tracking-wider uppercase">
            California Gold Country
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
          <span className="section-label mb-6">Start Your Journey</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Ready to Explore Auburn?
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Plan your perfect Gold Country getaway with our curated guides,
            local recommendations, and insider tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              View Events
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function ThingsToDoPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Categories Section */}
        <section className="py-20 md:py-32 bg-[var(--color-background)]">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-24 md:space-y-32"
            >
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
