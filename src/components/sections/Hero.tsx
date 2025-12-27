'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.png)',
        }}
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 hero-gradient-top" />
      <div className="absolute inset-0 hero-gradient-bottom" />
      <div className="absolute inset-0 hero-gradient-vignette" />

      {/* Film Grain Texture */}
      <div className="film-grain" />

      {/* Floating Decorative Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Large circle - top right */}
        <div
          className="decorative-circle animate-float-slow absolute w-64 h-64 md:w-96 md:h-96 -top-20 -right-20 md:-top-32 md:-right-32"
          style={{ animationDelay: '0s' }}
        />

        {/* Medium circle - bottom left */}
        <div
          className="decorative-circle animate-float-medium absolute w-48 h-48 md:w-72 md:h-72 -bottom-16 -left-16 md:-bottom-24 md:-left-24"
          style={{ animationDelay: '2s' }}
        />

        {/* Small filled circle - center right */}
        <div
          className="decorative-circle-filled animate-float-slow absolute w-24 h-24 md:w-32 md:h-32 top-1/3 -right-8 md:right-12"
          style={{ animationDelay: '1s' }}
        />

        {/* Tiny circle - top left */}
        <div
          className="decorative-circle animate-float-medium absolute w-16 h-16 md:w-20 md:h-20 top-24 left-8 md:left-20"
          style={{ animationDelay: '3s' }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Eyebrow Label */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-3 text-white/90">
            <span className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-white/60" />
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-light font-sans">
              California&apos;s Historic Gold Country
            </span>
            <span className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-white/60 to-white/60" />
          </span>
        </motion.div>

        {/* Main Headline - Split Typography */}
        <motion.h1
          variants={itemVariants}
          className="font-display mb-6 md:mb-8"
        >
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic text-white tracking-tight"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}
          >
            Discover
          </span>
          <span
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-semibold text-gradient-gold tracking-tight mt-1 md:mt-2"
            style={{
              filter: 'drop-shadow(0 4px 30px rgba(0,0,0,0.3))',
            }}
          >
            Auburn
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-light text-white/90 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-sans"
          style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          Where rivers meet trails, and history meets adventure in the
          <span className="text-white font-normal"> Sierra Nevada foothills</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Link
            href="/plan"
            className="group relative px-10 py-4 bg-white text-stone-900 font-medium text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-500 hover:shadow-2xl min-w-[200px]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-stone-900">
              Plan Your Visit
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>

          <Link
            href="/things-to-do"
            className="group relative px-10 py-4 bg-black/20 backdrop-blur-sm font-medium text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-500 min-w-[200px] border border-white/60 hover:border-white hover:bg-black/30"
          >
            <span className="relative z-10 text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Explore & Experience</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60 font-light">
            Scroll
          </span>
          <div className="relative w-px h-12 md:h-16 bg-white/20 overflow-hidden">
            <div className="absolute inset-x-0 top-0 w-full h-full bg-gradient-to-b from-white/80 to-white/40 animate-scroll-line" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Fade Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
