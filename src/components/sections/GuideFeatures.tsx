'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  href: string;
}

const guides: Guide[] = [
  {
    id: 'weekend',
    title: 'A Weekend in Auburn',
    description:
      'From Friday evening to Sunday afternoon, this itinerary covers the best of Auburn. Start with wine and dinner in Old Town, wake up to trail running or river swimming, and finish with a leisurely brunch before exploring local shops.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    href: '/guides/weekend-in-auburn',
  },
  {
    id: 'history-walk',
    title: 'Gold Country History Walk',
    description:
      'A self-guided walking tour through Auburn\'s most significant historical sites. Visit the iconic courthouse, discover stories of the Gold Rush era, and see where early California began to take shape.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
    href: '/guides/history-walk',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
} as const;

export default function GuideFeatures() {
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
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-4">
            Editorial Guides
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Plan Like a Local
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Curated guides to help you experience Auburn beyond the highlights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {guides.map((guide) => (
            <motion.div key={guide.id} variants={itemVariants}>
              <Link href={guide.href} className="group block">
                <article className="relative overflow-hidden rounded-sm bg-stone-100">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3 group-hover:text-amber-300 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        {guide.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-medium">
                        Read Guide
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
