'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  ArrowRight, Car, Plane, Train, MapPin, Clock,
  Navigation, Fuel, ParkingCircle, Info
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const travelRoutes = [
  {
    id: 'sacramento',
    from: 'Sacramento',
    distance: '35 miles',
    time: '40 min',
    route: 'I-80 East',
    description: 'The most common route. Take I-80 East through Roseville, enjoy the transition from valley to foothills.',
    highlights: ['Direct freeway access', 'Scenic foothill views', 'Multiple Auburn exits'],
  },
  {
    id: 'san-francisco',
    from: 'San Francisco',
    distance: '130 miles',
    time: '2 hours',
    route: 'I-80 East via Bay Bridge',
    description: 'Cross the Bay Bridge and head east through the Central Valley and into the Sierra Foothills.',
    highlights: ['Bay Bridge views', 'Valley scenery', 'Gradual elevation gain'],
  },
  {
    id: 'lake-tahoe',
    from: 'Lake Tahoe',
    distance: '55 miles',
    time: '1 hour',
    route: 'I-80 West',
    description: 'Descend from the mountains through historic Donner Pass and Emigrant Gap.',
    highlights: ['Mountain scenery', 'Historic route', 'Scenic overlooks'],
  },
  {
    id: 'reno',
    from: 'Reno',
    distance: '100 miles',
    time: '1.5 hours',
    route: 'I-80 West',
    description: 'Journey west through Truckee and over Donner Summit into California Gold Country.',
    highlights: ['Sierra Nevada views', 'Donner Lake', 'Forest landscapes'],
  },
];

const airports = [
  {
    code: 'SMF',
    name: 'Sacramento International Airport',
    distance: '40 miles',
    time: '45 min',
    description: 'The closest major airport with domestic and select international flights.',
    airlines: ['Southwest', 'United', 'Delta', 'Alaska', 'American'],
  },
  {
    code: 'SFO',
    name: 'San Francisco International Airport',
    distance: '145 miles',
    time: '2.5 hours',
    description: 'Major international hub with extensive flight options worldwide.',
    airlines: ['All major carriers', 'International flights'],
  },
  {
    code: 'OAK',
    name: 'Oakland International Airport',
    distance: '120 miles',
    time: '2 hours',
    description: 'Budget-friendly alternative with good domestic coverage.',
    airlines: ['Southwest', 'Spirit', 'JetBlue', 'Alaska'],
  },
];

const transportOptions = [
  {
    icon: Car,
    title: 'Rental Car',
    description: 'The most flexible option for exploring Auburn and the surrounding Gold Country.',
    tip: 'Book at Sacramento Airport for the best selection and rates.',
  },
  {
    icon: Train,
    title: 'Amtrak Capitol Corridor',
    description: 'Train service connects Auburn to Sacramento, Oakland, and San Jose.',
    tip: 'The Auburn station is located in historic Old Town.',
  },
  {
    icon: Navigation,
    title: 'Ride Services',
    description: 'Uber and Lyft operate in Auburn and can connect you from Sacramento.',
    tip: 'Schedule rides in advance for airport pickups.',
  },
];

const parkingInfo = [
  {
    name: 'Downtown Auburn',
    type: 'Street Parking',
    rate: 'Free (2-hour limit)',
    notes: 'Abundant parking throughout Old Town',
  },
  {
    name: 'Lincoln Way Lots',
    type: 'Public Lots',
    rate: 'Free',
    notes: 'Several lots near shops and restaurants',
  },
  {
    name: 'Trailhead Parking',
    type: 'Day Use',
    rate: '$10/vehicle',
    notes: 'State park and trail access areas',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
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
          src="/images/feature-old-town.jpg"
          alt="Getting to Auburn California"
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
              <span className="font-light italic">Getting </span>
              <span className="font-semibold text-[#E2C58F]">Here</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Just 35 minutes from Sacramento, Auburn is your gateway to
              California&apos;s Gold Country. Here&apos;s how to reach us.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}

function DrivingRoutes() {
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
          <span className="section-label mb-4">By Car</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4">
            Driving Routes
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Auburn sits at the crossroads of I-80 and Highway 49, making it easily
            accessible from throughout Northern California and Nevada.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {travelRoutes.map((route) => (
            <motion.div
              key={route.id}
              variants={itemVariants}
              className="group bg-white rounded-sm border border-[var(--color-neutral-200)] p-8 hover:shadow-xl hover:border-transparent transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                    From
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mt-1">
                    {route.from}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-[#B8860B]">{route.time}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{route.distance}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Car className="w-4 h-4 text-[#C9A24A]" />
                <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {route.route}
                </span>
              </div>

              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                {route.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {route.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 bg-[var(--color-neutral-100)] rounded-full text-xs text-[var(--color-text-muted)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://maps.google.com/?q=Auburn,+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A24A] text-white rounded-sm hover:bg-[#B8860B] transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Open in Google Maps
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

function AirportsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-900)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A24A]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A24A]/5 blur-3xl -translate-x-1/2" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] text-xs font-medium tracking-[0.25em] uppercase mb-4 block">
            By Air
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Nearby Airports
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Three major airports serve the Auburn area, each offering unique advantages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {airports.map((airport, index) => (
            <motion.div
              key={airport.code}
              variants={itemVariants}
              className={`relative p-8 rounded-sm border transition-all duration-500 ${
                index === 0
                  ? 'bg-[#C9A24A]/10 border-[#C9A24A]/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {index === 0 && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[#C9A24A] text-xs font-medium text-white rounded-full">
                  Recommended
                </span>
              )}

              <div className="flex items-center gap-4 mb-6">
                <Plane className={`w-8 h-8 ${index === 0 ? 'text-[#C9A24A]' : 'text-white/60'}`} />
                <div>
                  <div className="text-2xl font-serif font-semibold text-white">{airport.code}</div>
                  <div className="text-sm text-white/60">{airport.distance}</div>
                </div>
              </div>

              <h3 className="font-serif text-lg text-white mb-3">{airport.name}</h3>
              <p className="text-sm text-white/60 mb-4">{airport.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#C9A24A]" />
                <span className="text-sm text-white/80">{airport.time} to Auburn</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {airport.airlines.map((airline) => (
                  <span
                    key={airline}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                  >
                    {airline}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function TransportOptions() {
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
            <span className="section-label--left mb-4 block text-[#C9A24A]">
              <MapPin className="w-4 h-4 inline mr-2" />
              Getting Around
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
              Transportation Options
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
              While a car provides the most flexibility for exploring the region,
              there are several ways to get to and around Auburn.
            </p>

            <div className="space-y-6">
              {transportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#C9A24A]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">
                        {option.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm mb-2">
                        {option.description}
                      </p>
                      <p className="text-xs text-[#B8860B] font-medium">
                        Tip: {option.tip}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/seasonal/fall-1.jpg"
                alt="Auburn scenic drive"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#C9A24A]/20 rounded-sm hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A24A]/10 rounded-sm hidden lg:block" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ParkingSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="section-label mb-4">
              <ParkingCircle className="w-4 h-4" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4">
              Parking Information
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Finding parking in Auburn is easy. Most downtown parking is free!
            </p>
          </div>

          <div className="bg-white rounded-sm border border-[var(--color-neutral-200)] overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[var(--color-neutral-100)] font-medium text-sm text-[var(--color-text-secondary)]">
              <div>Location</div>
              <div>Type</div>
              <div>Rate</div>
              <div>Notes</div>
            </div>
            {parkingInfo.map((parking, index) => (
              <div
                key={parking.name}
                className={`grid grid-cols-4 gap-4 p-4 text-sm ${
                  index !== parkingInfo.length - 1 ? 'border-b border-[var(--color-neutral-200)]' : ''
                }`}
              >
                <div className="font-medium text-[var(--color-text-primary)]">{parking.name}</div>
                <div className="text-[var(--color-text-secondary)]">{parking.type}</div>
                <div className="text-[#B8860B] font-medium">{parking.rate}</div>
                <div className="text-[var(--color-text-muted)]">{parking.notes}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#C9A24A]/10 rounded-sm border border-[#C9A24A]/20">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#C9A24A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)] mb-2">EV Charging</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Electric vehicle charging stations are available at several locations throughout
                  Auburn, including downtown and at the Auburn Recreation District.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function QuickTips() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-neutral-100)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="section-label mb-4">Before You Go</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
              Travel Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Fuel,
                title: 'Fill Up Before the Mountains',
                text: 'If heading to/from Tahoe, gas prices increase significantly in mountain communities.',
              },
              {
                icon: Clock,
                title: 'Avoid Rush Hour',
                text: 'Sacramento traffic peaks 7-9am and 4-6pm. Plan around these times for a smoother drive.',
              },
              {
                icon: Navigation,
                title: 'Check Road Conditions',
                text: 'In winter, I-80 can require chains over Donner Summit. Check CalTrans before traveling.',
              },
              {
                icon: MapPin,
                title: 'Use Foresthill Road Exit',
                text: 'For Old Town Auburn, take the Foresthill Road exit from I-80 for the most direct access.',
              },
            ].map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-sm"
                >
                  <Icon className="w-6 h-6 text-[#C9A24A] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[var(--color-text-primary)] mb-2">{tip.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{tip.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
          <span className="section-label mb-6">Ready to Visit?</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            Plan the Rest of Your Trip
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            Now that you know how to get here, explore where to stay and what to do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan/stay"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A24A] text-white font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-[#B8860B] transition-colors"
            >
              Where to Stay
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

export default function GettingHerePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DrivingRoutes />
        <AirportsSection />
        <TransportOptions />
        <ParkingSection />
        <QuickTips />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
