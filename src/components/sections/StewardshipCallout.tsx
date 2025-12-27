'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Droplets,
  Footprints,
  Trash2,
  Volume2,
  Heart,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tip {
  id: string;
  text: string;
  icon: LucideIcon;
}

const tips: Tip[] = [
  {
    id: 'water',
    text: 'Protect our rivers by packing out everything you bring in',
    icon: Droplets,
  },
  {
    id: 'trails',
    text: 'Stay on marked trails to preserve native plants and wildlife',
    icon: Footprints,
  },
  {
    id: 'waste',
    text: 'Use designated trash and recycling bins throughout town',
    icon: Trash2,
  },
  {
    id: 'noise',
    text: 'Keep noise levels respectful, especially near residential areas',
    icon: Volume2,
  },
  {
    id: 'community',
    text: 'Support local businesses and leave positive impacts',
    icon: Heart,
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
} as const;

export default function StewardshipCallout() {
  return (
    <section className="py-20 md:py-28 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-800 text-emerald-200 text-sm font-medium rounded-full mb-6">
              Be a Thoughtful Visitor
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Respect the River.
              <br />
              Tread Lightly on Trails.
            </h2>
            <p className="text-lg text-emerald-100/80 leading-relaxed mb-8">
              Auburn&apos;s natural beauty and historic character are gifts we all share.
              Help us preserve them for future generations by following these
              simple guidelines during your visit.
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 mb-10"
            >
              {tips.map((tip) => {
                const Icon = tip.icon;
                return (
                  <motion.li
                    key={tip.id}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    <span className="text-emerald-100 pt-2">{tip.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <Link
              href="/visitor-tips"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 font-medium rounded-sm hover:bg-emerald-50 transition-colors"
            >
              <span>Read Visitor Tips</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Abstract river-inspired shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Flowing curves */}
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M50 200 Q100 100 200 200 T350 200"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="60"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                    <motion.path
                      d="M30 280 Q130 180 200 280 T370 280"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="40"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                    />
                    <motion.path
                      d="M70 120 Q170 60 230 120 T380 120"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="30"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
                    />
                  </svg>
                </div>
              </div>

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-emerald-800/50 flex items-center justify-center backdrop-blur-sm">
                  <Droplets className="w-16 h-16 text-emerald-200" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
