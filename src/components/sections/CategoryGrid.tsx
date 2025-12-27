'use client';

import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 'outdoor',
    title: 'Outdoor Adventure',
    description: 'Trails, rivers, and wild spaces await just minutes from downtown.',
    image: '/images/category-outdoor.jpg',
    href: '/things-to-do/outdoor',
  },
  {
    id: 'history',
    title: 'Old Town & History',
    description: 'Step back in time through Gold Rush-era architecture and stories.',
    image: '/images/category-history.jpg',
    href: '/things-to-do/history',
  },
  {
    id: 'food',
    title: 'Food & Drink',
    description: 'Farm-to-fork dining, craft breweries, and wine tasting rooms.',
    image: '/images/category-food.jpg',
    href: '/things-to-do/food-drink',
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Festivals, markets, and community gatherings year-round.',
    image: '/images/category-events.jpg',
    href: '/events',
  },
  {
    id: 'family',
    title: 'Family Fun',
    description: 'Adventures and activities for all ages to enjoy together.',
    image: '/images/category-family.jpg',
    href: '/things-to-do/family',
  },
  {
    id: 'shopping',
    title: 'Shopping & Art',
    description: 'Boutiques, galleries, and artisan finds in historic storefronts.',
    image: '/images/category-shopping.jpg',
    href: '/things-to-do/shopping',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={category.href} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-100">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-medium text-white mb-2">{category.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function CategoryGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 1024px)': { active: false },
    },
  });

  const [scrollState, setScrollState] = useState({ prev: false, next: false });
  const isMounted = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onUpdate = () => {
      setScrollState({
        prev: emblaApi.canScrollPrev(),
        next: emblaApi.canScrollNext(),
      });
    };

    // Use requestAnimationFrame to avoid synchronous setState warning
    if (!isMounted.current) {
      isMounted.current = true;
      requestAnimationFrame(onUpdate);
    }

    emblaApi.on('select', onUpdate);
    emblaApi.on('reInit', onUpdate);
    return () => {
      emblaApi.off('select', onUpdate);
      emblaApi.off('reInit', onUpdate);
    };
  }, [emblaApi]);

  const canScrollPrev = scrollState.prev;
  const canScrollNext = scrollState.next;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Ways to Explore
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From river adventures to historic streets, discover what makes Auburn unforgettable.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="hidden lg:grid grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {categories.map((category) => (
                <div key={category.id} className="flex-[0_0_80%] sm:flex-[0_0_45%] min-w-0">
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-2 rounded-full border border-stone-300 text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:border-stone-900 hover:text-stone-900"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-2 rounded-full border border-stone-300 text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:border-stone-900 hover:text-stone-900"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
