'use client';

import { motion } from 'framer-motion';
import { Car, Mountain, Sun, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  {
    id: 'distance',
    value: '35 Minutes',
    label: 'from Sacramento',
    icon: Car,
  },
  {
    id: 'trails',
    value: '100+ Miles',
    label: 'of trails nearby',
    icon: Mountain,
  },
  {
    id: 'seasons',
    value: 'Four-Season',
    label: 'destination',
    icon: Sun,
  },
  {
    id: 'history',
    value: 'Historic',
    label: 'Gold Country town',
    icon: Building2,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const;

export default function StatsRow() {
  return (
    <section className="py-16 md:py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400/10">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-2xl md:text-3xl font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-stone-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
