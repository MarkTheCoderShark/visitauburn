'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  ArrowRight, Star, MapPin, Wifi, Car, Coffee,
  Utensils, Mountain, Heart, Phone, ExternalLink,
  Home, Building2, TreePine
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

type AccommodationType = 'all' | 'hotels' | 'bnb' | 'vacation';

const accommodationTypes = [
  { id: 'all' as const, label: 'All Stays', icon: Heart },
  { id: 'hotels' as const, label: 'Hotels', icon: Building2 },
  { id: 'bnb' as const, label: 'B&Bs & Inns', icon: Home },
  { id: 'vacation' as const, label: 'Vacation Rentals', icon: TreePine },
];

const accommodations = [
  {
    id: 1,
    name: 'Holiday Inn Auburn',
    type: 'hotels',
    image: '/images/seasonal/fall-1.jpg',
    rating: 4.2,
    reviews: 312,
    priceRange: '$$',
    location: 'Downtown Auburn',
    description: 'Modern amenities meet Gold Country charm. Walking distance to Old Town shops and restaurants.',
    amenities: ['wifi', 'parking', 'breakfast', 'pool'],
    featured: true,
  },
  {
    id: 2,
    name: 'Best Western Golden Key',
    type: 'hotels',
    image: '/images/seasonal/summer-1.jpg',
    rating: 4.0,
    reviews: 245,
    priceRange: '$$',
    location: 'Near I-80',
    description: 'Convenient location with easy freeway access. Perfect for road-trippers exploring the region.',
    amenities: ['wifi', 'parking', 'breakfast'],
    featured: false,
  },
  {
    id: 3,
    name: 'The Victorian House',
    type: 'bnb',
    image: '/images/feature-old-town.jpg',
    rating: 4.8,
    reviews: 89,
    priceRange: '$$$',
    location: 'Historic Old Town',
    description: 'Elegant Victorian B&B with period furnishings, gourmet breakfast, and impeccable hospitality.',
    amenities: ['wifi', 'breakfast', 'garden'],
    featured: true,
  },
  {
    id: 4,
    name: 'Auburn Creek Inn',
    type: 'bnb',
    image: '/images/seasonal/spring-1.jpg',
    rating: 4.7,
    reviews: 156,
    priceRange: '$$',
    location: 'Near Confluence',
    description: 'Charming inn overlooking the American River canyon. Wake up to stunning views and fresh pastries.',
    amenities: ['wifi', 'breakfast', 'views'],
    featured: false,
  },
  {
    id: 5,
    name: 'Foresthill Mountain Cabin',
    type: 'vacation',
    image: '/images/OutdoorAdventures.png',
    rating: 4.9,
    reviews: 67,
    priceRange: '$$$',
    location: 'Foresthill',
    description: 'Secluded mountain retreat with modern comforts. Hot tub, deck with forest views, and full kitchen.',
    amenities: ['wifi', 'kitchen', 'hottub', 'views'],
    featured: true,
  },
  {
    id: 6,
    name: 'River Canyon Cottage',
    type: 'vacation',
    image: '/images/seasonal/summer-1.jpg',
    rating: 4.6,
    reviews: 43,
    priceRange: '$$',
    location: 'Cool, CA',
    description: 'Cozy cottage perfect for couples. Minutes from hiking trails and wine tasting rooms.',
    amenities: ['wifi', 'kitchen', 'parking'],
    featured: false,
  },
  {
    id: 7,
    name: 'Gold Country Lodge',
    type: 'hotels',
    image: '/images/feature-old-town.jpg',
    rating: 3.9,
    reviews: 178,
    priceRange: '$',
    location: 'Auburn',
    description: 'Budget-friendly option with clean rooms and friendly service. Great value for travelers.',
    amenities: ['wifi', 'parking'],
    featured: false,
  },
  {
    id: 8,
    name: 'Placer Vineyards Estate',
    type: 'vacation',
    image: '/images/seasonal/fall-1.jpg',
    rating: 4.8,
    reviews: 34,
    priceRange: '$$$$',
    location: 'Wine Country',
    description: 'Luxury estate among the vineyards. Private wine tasting, chef-prepared meals available.',
    amenities: ['wifi', 'kitchen', 'pool', 'wine'],
    featured: true,
  },
];

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  kitchen: Utensils,
  views: Mountain,
  pool: Mountain,
  hottub: Mountain,
  garden: TreePine,
  wine: Coffee,
};

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
          src="/images/seasonal/fall-1.jpg"
          alt="Where to Stay in Auburn California"
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
              <span className="font-light italic">Where to </span>
              <span className="font-semibold text-[#E2C58F]">Stay</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              From boutique hotels to charming B&Bs and vacation rentals,
              find your perfect home base in Gold Country.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function AccommodationsGrid() {
  const [activeType, setActiveType] = useState<AccommodationType>('all');

  const filteredAccommodations = activeType === 'all'
    ? accommodations
    : accommodations.filter(a => a.type === activeType);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4">Accommodations</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Find Your Perfect Stay
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Whether you prefer the personal touch of a B&B or the privacy of a vacation rental,
            Auburn has accommodations to suit every style.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {accommodationTypes.map((type) => {
            const Icon = type.icon;
            const isActive = activeType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C9A24A] text-white shadow-lg shadow-[#C9A24A]/20'
                    : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-neutral-200)] hover:border-[#C9A24A] hover:text-[#C9A24A]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {type.label}
              </button>
            );
          })}
        </motion.div>

        {/* Accommodations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeType}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAccommodations.map((accommodation) => (
            <motion.article
              key={accommodation.id}
              variants={itemVariants}
              className="group bg-white rounded-sm border border-[var(--color-neutral-200)] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Featured Badge */}
                {accommodation.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9A24A] text-white text-xs font-medium rounded-full">
                      <Heart className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Price Range */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-text-primary)] text-sm font-medium rounded-full">
                    {accommodation.priceRange}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#C9A24A] text-[#C9A24A]" />
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {accommodation.rating}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    ({accommodation.reviews} reviews)
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2 group-hover:text-[#B8860B] transition-colors">
                  {accommodation.name}
                </h3>

                <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] mb-4">
                  <MapPin className="w-4 h-4" />
                  {accommodation.location}
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {accommodation.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {accommodation.amenities.slice(0, 4).map((amenity) => {
                    const Icon = amenityIcons[amenity] || Wifi;
                    return (
                      <span
                        key={amenity}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-neutral-100)] rounded text-xs text-[var(--color-text-muted)]"
                      >
                        <Icon className="w-3 h-3" />
                        {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                      </span>
                    );
                  })}
                </div>

                {/* CTA */}
                <button className="w-full py-3 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] text-sm font-medium rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors">
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function NeighborhoodsSection() {
  const neighborhoods = [
    {
      name: 'Historic Old Town',
      description: 'Walk to shops, restaurants, and attractions. Perfect for first-time visitors.',
      vibe: 'Historic charm, walkable',
      bestFor: 'Couples, History buffs',
    },
    {
      name: 'Downtown Auburn',
      description: 'Modern conveniences with easy access to highways and major attractions.',
      vibe: 'Convenient, central',
      bestFor: 'Road trippers, Families',
    },
    {
      name: 'Foresthill Area',
      description: 'Mountain retreat feel with access to trails and outdoor adventures.',
      vibe: 'Secluded, nature-focused',
      bestFor: 'Adventurers, Nature lovers',
    },
    {
      name: 'Wine Country (Cool, CA)',
      description: 'Among the vineyards with wine tasting and scenic countryside.',
      vibe: 'Romantic, relaxed',
      bestFor: 'Wine enthusiasts, Couples',
    },
  ];

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
            Where to Book
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Explore by Neighborhood
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Each area offers a unique Auburn experience. Choose based on your travel style.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {neighborhoods.map((hood) => (
            <motion.div
              key={hood.name}
              variants={itemVariants}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="font-serif text-xl text-white mb-3">{hood.name}</h3>
              <p className="text-sm text-white/60 mb-4">{hood.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-white/40">Vibe:</span>
                  <span className="text-[#C9A24A]">{hood.vibe}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40">Best for:</span>
                  <span className="text-white/80">{hood.bestFor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function BookingTips() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background-warm)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label--left mb-4 block text-[#C9A24A]">Insider Tips</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Booking Tips
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Get the most out of your Auburn stay with these local recommendations.
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: 'Book Early for Events',
                  text: 'Major events like the Auburn Wine Walk and Gold Country Fair fill up quickly. Reserve 2-3 months ahead.',
                },
                {
                  title: 'Midweek Deals',
                  text: 'Many B&Bs and vacation rentals offer lower rates Sunday through Thursday.',
                },
                {
                  title: 'Direct Booking Benefits',
                  text: 'Contact properties directly—many offer perks like late checkout or welcome amenities.',
                },
                {
                  title: 'Consider the Season',
                  text: 'Fall foliage and spring wildflowers are peak seasons. Summer offers river activities; winter is peaceful.',
                },
              ].map((tip, index) => (
                <motion.li
                  key={tip.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C9A24A]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A24A] font-serif text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text-primary)] mb-1">{tip.title}</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">{tip.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-sm border border-[var(--color-neutral-200)]">
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-6">
                Need Help Planning?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Our visitor services team can help you find the perfect accommodation
                and create a custom itinerary for your stay.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+15308850540"
                  className="flex items-center gap-3 p-4 bg-[var(--color-neutral-100)] rounded-sm hover:bg-[var(--color-neutral-200)] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C9A24A]" />
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">Call Us</div>
                    <div className="text-sm text-[var(--color-text-muted)]">(530) 885-0540</div>
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 p-4 bg-[var(--color-neutral-100)] rounded-sm hover:bg-[var(--color-neutral-200)] transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#C9A24A]" />
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">Contact Us</div>
                    <div className="text-sm text-[var(--color-text-muted)]">Send a message</div>
                  </div>
                </Link>
              </div>

              <div className="pt-6 border-t border-[var(--color-neutral-200)]">
                <p className="text-xs text-[var(--color-text-muted)]">
                  Visitor Center Hours: Mon-Fri 9am-5pm, Sat 10am-4pm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
          <span className="section-label mb-6">Continue Planning</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            What Will You Discover?
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Once you&apos;ve found your perfect stay, explore all that Auburn has to offer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors"
            >
              View Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/things-to-do"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-neutral-300)] text-[var(--color-text-primary)] font-medium text-sm tracking-wider uppercase rounded-sm hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
            >
              Things to Do
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
        <AccommodationsGrid />
        <NeighborhoodsSection />
        <BookingTips />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
