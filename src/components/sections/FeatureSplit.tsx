'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeatureSplitProps {
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  flipped?: boolean;
}

export default function FeatureSplit({
  image,
  imageAlt,
  heading,
  description,
  ctaText,
  ctaHref,
  flipped = false,
}: FeatureSplitProps) {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            flipped ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: flipped ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={flipped ? 'lg:col-start-2' : ''}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: flipped ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className={`flex flex-col justify-center ${
              flipped ? 'lg:col-start-1 lg:text-right lg:items-end' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
              {heading}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <Link
              href={ctaHref}
              className={`group inline-flex items-center gap-2 text-stone-900 font-medium hover:text-amber-700 transition-colors ${
                flipped ? 'flex-row-reverse' : ''
              }`}
            >
              <span>{ctaText}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  flipped ? 'rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0' : ''
                }`}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Example usage with pre-configured content
export function FeatureSplitRivers() {
  return (
    <FeatureSplit
      image="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80"
      imageAlt="American River flowing through Auburn"
      heading="Where Two Rivers Meet"
      description="The North and Middle forks of the American River converge just below Auburn, creating world-class opportunities for rafting, kayaking, swimming, and fishing. Cool off in natural swimming holes or take on Class III rapids with local outfitters."
      ctaText="Explore River Activities"
      ctaHref="/things-to-do/rivers"
    />
  );
}

export function FeatureSplitTrails() {
  return (
    <FeatureSplit
      image="/images/outdoor-hill.jpg"
      imageAlt="Hiking trails near Auburn"
      heading="Trails for Every Journey"
      description="From the Western States Trail to peaceful forest paths, Auburn offers more than 100 miles of trails for hiking, mountain biking, and trail running. Whether you're training for an ultra or seeking a sunset stroll, there's a trail waiting for you."
      ctaText="Find Your Trail"
      ctaHref="/things-to-do/trails"
      flipped
    />
  );
}

export function FeatureSplitOldTown() {
  return (
    <FeatureSplit
      image="https://images.unsplash.com/photo-1611422701060-a012c5a76600?w=800&q=80"
      imageAlt="Historic Old Town Auburn"
      heading="Step Into Gold Country History"
      description="Wander the streets where Gold Rush miners once walked. Auburn's Old Town features the iconic Placer County Courthouse, antique shops in historic buildings, and locally-owned restaurants serving farm-fresh California cuisine."
      ctaText="Discover Old Town"
      ctaHref="/things-to-do/old-town"
    />
  );
}
