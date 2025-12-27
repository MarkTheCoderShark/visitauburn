'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ShoppingBag, Gem, Palette, Gift, Clock, MapPin, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const categories = [
  {
    id: 'antiques',
    title: 'Antiques & Vintage',
    description: 'Old Town Auburn is a treasure hunter\'s paradise. Browse through multi-dealer antique malls and vintage shops filled with Gold Rush artifacts, Victorian furniture, and collectibles from every era.',
    image: '/images/feature-old-town.jpg',
    icon: Gem,
    highlights: ['Antique Malls', 'Vintage Collectibles', 'Gold Rush Memorabilia'],
  },
  {
    id: 'artisan',
    title: 'Artisan Boutiques',
    description: 'Discover one-of-a-kind creations from local artisans. From handcrafted jewelry to custom furniture, these boutiques offer unique finds you won\'t see anywhere else.',
    image: '/images/categories/shopping-art.jpg',
    icon: Sparkles,
    highlights: ['Handmade Jewelry', 'Local Crafts', 'Custom Creations'],
  },
  {
    id: 'galleries',
    title: 'Art Galleries',
    description: 'Auburn\'s creative spirit shines through its galleries. Meet local artists, discover emerging talent, and find that perfect piece to bring the beauty of Gold Country home.',
    image: '/images/seasonal/spring-1.jpg',
    icon: Palette,
    highlights: ['Local Artists', 'Fine Art', 'Photography'],
  },
  {
    id: 'specialty',
    title: 'Specialty Shops',
    description: 'From gourmet foods to outdoor gear, Auburn\'s specialty shops cater to every interest. Find the perfect gift or treat yourself to something special.',
    image: '/images/categories/food-drink.jpg',
    icon: Gift,
    highlights: ['Gourmet Foods', 'Outdoor Gear', 'Unique Gifts'],
  },
];

const shoppingDistricts = [
  {
    name: 'Old Town Auburn',
    description: 'Historic storefronts house antique shops, art galleries, and unique boutiques in buildings dating back to the 1850s.',
    highlights: ['Antique Row', 'Art Galleries', 'Historic Architecture'],
  },
  {
    name: 'Downtown Auburn',
    description: 'The commercial heart of Auburn offers a mix of specialty shops, services, and local favorites.',
    highlights: ['Specialty Stores', 'Local Services', 'Convenient Parking'],
  },
  {
    name: 'Foresthill Road Corridor',
    description: 'Discover hidden gems along the scenic route to Foresthill, including farm stands and artisan studios.',
    highlights: ['Farm Stands', 'Artisan Studios', 'Scenic Drive'],
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
          src="/images/categories/shopping-art.jpg"
          alt="Shopping in Auburn"
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
              <span className="font-light italic">Shopping & </span>
              <span className="font-semibold text-[#E2C58F]">Art</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Discover unique treasures in historic storefronts. From antiques
              to artisan crafts, find something special to take home.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <ShoppingBag className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">40+ Unique Shops</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Gem className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Antique Row</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Palette className="w-5 h-5 text-[#C9A24A]" />
                <span className="text-sm">Local Artists</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </motion.div>

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
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
          <Image
            src={category.image}
            alt={category.title}
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
          Shop Local
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mt-3 mb-6 leading-tight">
          {category.title}
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {category.highlights.map((highlight) => (
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
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-[#8B6914] transition-colors hover:text-[#C9A24A]"
        >
          <span>Explore Shops</span>
          <span className="w-8 h-px bg-[#8B6914] group-hover:bg-[#C9A24A] transition-all duration-300 group-hover:w-12" />
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

function ShoppingDistricts() {
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
            Where to Shop
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Shopping Districts
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Explore Auburn&apos;s distinct shopping areas, each with its own character
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {shoppingDistricts.map((district, index) => (
            <motion.div
              key={district.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#C9A24A]" />
                <h3 className="font-serif text-xl text-white">{district.name}</h3>
              </div>
              <p className="text-white/60 text-sm mb-4">{district.description}</p>
              <div className="flex flex-wrap gap-2">
                {district.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-[#C9A24A] px-2 py-1 bg-[#C9A24A]/10 rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ShoppersTips() {
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
              Shopper&apos;s Guide
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Make the most of your shopping adventure in Auburn with these helpful tips.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <Clock className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Best Shopping Hours</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Most shops open 10am-5pm. Saturday mornings are ideal for browsing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <MapPin className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Free Parking</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Plenty of free street parking and lots throughout Old Town.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                <Gift className="w-5 h-5 text-[#C9A24A] mt-0.5" />
                <div>
                  <h4 className="font-medium text-[var(--color-text-primary)]">Shop Local</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Many shops offer gift wrapping and shipping services.</p>
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
                src="/images/feature-old-town.jpg"
                alt="Shopping in Old Town"
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
          <span className="section-label mb-6">Find Your Treasure</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-6">
            Discover Something Special
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            From antique treasures to handcrafted art, Auburn&apos;s shops
            offer unique finds you won&apos;t see anywhere else.
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

export default function ShoppingPage() {
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
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </motion.div>
          </Container>
        </section>

        <ShoppingDistricts />
        <ShoppersTips />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
