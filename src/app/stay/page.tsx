'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Building2, Home, Tent, Star, Wifi, Coffee, Car, PawPrint, MapPin, Calendar, HelpCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const accommodationTypes = [
  {
    id: 'hotels',
    name: 'Hotels & Motels',
    description: 'Modern comfort with convenient amenities for business and leisure travelers.',
    count: 12,
    image: '/images/stays/stay-1.jpg',
    href: '/stay/hotels',
    icon: Building2,
    color: '#B8860B',
  },
  {
    id: 'bnb',
    name: 'Bed & Breakfasts',
    description: 'Charming inns offering personalized hospitality and gourmet morning meals.',
    count: 8,
    image: '/images/stays/stay-2.jpg',
    href: '/stay/bed-and-breakfasts',
    icon: Coffee,
    color: '#8B6914',
  },
  {
    id: 'rentals',
    name: 'Vacation Rentals',
    description: 'Homes and cabins perfect for families, groups, or extended stays.',
    count: 24,
    image: '/images/stays/stay-3.jpg',
    href: '/stay/vacation-rentals',
    icon: Home,
    color: '#6F7F68',
  },
  {
    id: 'camping',
    name: 'Camping & RV',
    description: 'Connect with nature at scenic campgrounds and RV parks.',
    count: 6,
    image: '/images/stays/stay-4.jpg',
    href: '/stay/camping',
    icon: Tent,
    color: '#5A6754',
  },
];

const featuredStays = [
  {
    id: 'auburn-inn',
    name: 'The Auburn Inn',
    type: 'Boutique Hotel',
    description: 'Historic boutique hotel in the heart of Old Town with modern amenities and Gold Rush charm.',
    priceRange: '$$',
    rating: 4.8,
    reviewCount: 124,
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Breakfast' },
      { icon: Car, label: 'Parking' },
      { icon: PawPrint, label: 'Pet Friendly' },
    ],
    image: '/images/stays/stay-5.jpg',
  },
  {
    id: 'power-house',
    name: 'The Power House B&B',
    type: 'Bed & Breakfast',
    description: 'Elegant 1898 Victorian home offering spacious rooms and gourmet breakfasts overlooking the canyon.',
    priceRange: '$$$',
    rating: 4.9,
    reviewCount: 89,
    amenities: [
      { icon: Coffee, label: 'Gourmet Breakfast' },
      { icon: MapPin, label: 'Mountain Views' },
    ],
    image: '/images/stays/stay-6.jpg',
  },
  {
    id: 'canyon-view-cottage',
    name: 'Canyon View Cottage',
    type: 'Vacation Rental',
    description: 'Secluded cottage with panoramic views of the American River canyon. Perfect for couples.',
    priceRange: '$$',
    rating: 4.7,
    reviewCount: 56,
    amenities: [
      { icon: Home, label: 'Full Kitchen' },
      { icon: MapPin, label: 'River Access' },
    ],
    image: '/images/stays/stay-1.jpg',
  },
];

const planningTips = [
  {
    icon: Calendar,
    title: 'Book Early',
    description: 'Peak season (May-October) fills up fast. Reserve 2-3 months ahead for best selection.',
  },
  {
    icon: MapPin,
    title: 'Location Matters',
    description: 'Old Town is walkable. Canyon stays offer nature. Highway 49 provides easy access.',
  },
  {
    icon: HelpCircle,
    title: 'Ask Us',
    description: 'Not sure where to stay? Contact our visitor center for personalized recommendations.',
  },
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
          src="/images/stays/stay-2.jpg"
          alt="Where to Stay in Auburn California"
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
              Accommodations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              <span className="font-light italic">Where to </span>
              <span className="font-semibold text-[#E2C58F]">Stay</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Rest easy in Gold Country. From historic charm to modern comfort,
              find your perfect home base in Auburn.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function AccommodationTypes() {
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
          <span className="section-label mb-4">Browse By Type</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)]">
            Find Your Perfect Stay
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {accommodationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <motion.div key={type.id} variants={itemVariants}>
                <Link href={type.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                    {/* Icon Badge */}
                    <div
                      className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: `${type.color}CC` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Count Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-[var(--color-text-primary)] rounded-full">
                        {type.count} options
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl md:text-2xl text-white mb-2 group-hover:text-[#E2C58F] transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2">
                        {type.description}
                      </p>

                      {/* Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-[#E2C58F] text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>Browse Options</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function FeaturedStays() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label--left mb-4 block text-[#C9A24A]">Hand-Picked</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
              Featured Accommodations
            </h2>
          </div>
          <Link
            href="/stay/featured"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#B8860B] hover:text-[#8B6914] transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredStays.map((stay) => (
            <motion.article
              key={stay.id}
              variants={itemVariants}
              className="group bg-white rounded-sm overflow-hidden border border-[var(--color-neutral-200)] hover:border-transparent hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-[var(--color-text-primary)] rounded-full">
                    {stay.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1.5 bg-[var(--color-neutral-900)]/80 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                    {stay.priceRange}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl text-[var(--color-text-primary)] group-hover:text-[#B8860B] transition-colors">
                    <Link href={`/stay/${stay.id}`}>
                      {stay.name}
                    </Link>
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(stay.rating) ? 'fill-[#C9A24A] text-[#C9A24A]' : 'text-[var(--color-neutral-300)]'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {stay.rating} ({stay.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
                  {stay.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3">
                  {stay.amenities.map((amenity) => {
                    const Icon = amenity.icon;
                    return (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function PlanningTips() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Tips & Advice</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Planning Your Stay
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {planningTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C9A24A]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#C9A24A]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function HelpCTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A24A]/5 to-transparent" />
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-[#C9A24A]/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <div className="w-16 h-16 rounded-full bg-[#C9A24A]/20 flex items-center justify-center mx-auto mb-8">
            <Building2 className="w-8 h-8 text-[#C9A24A]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Need Help Finding the Right Stay?
          </h2>

          <p className="text-lg text-white/70 mb-10">
            Our visitor services team can help match you with the perfect accommodation
            based on your preferences and needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors shadow-lg shadow-[#C9A24A]/20"
            >
              Contact Us
            </Link>
            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function StayPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AccommodationTypes />
        <FeaturedStays />
        <PlanningTips />
        <HelpCTA />
      </main>
      <Footer />
    </>
  );
}
