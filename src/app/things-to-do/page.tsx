import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Things To Do in Auburn | Visit Auburn, California',
  description: 'Discover outdoor adventures, historic attractions, local dining, and unique experiences in Auburn, California - the heart of Gold Country.',
};

const categories = [
  {
    name: 'Outdoor Adventures',
    slug: 'outdoor-adventures',
    description: 'Hiking, biking, rafting, and more in the Sierra foothills',
    image: '/images/outdoor-adventures.jpg',
    count: 24,
  },
  {
    name: 'Historic Attractions',
    slug: 'historic-attractions',
    description: 'Gold Rush history, museums, and heritage sites',
    image: '/images/historic-attractions.jpg',
    count: 18,
  },
  {
    name: 'Dining & Drinks',
    slug: 'dining-drinks',
    description: 'Farm-to-fork restaurants, wineries, and craft breweries',
    image: '/images/dining-drinks.jpg',
    count: 32,
  },
  {
    name: 'Arts & Culture',
    slug: 'arts-culture',
    description: 'Galleries, theaters, live music, and local artisans',
    image: '/images/arts-culture.jpg',
    count: 15,
  },
  {
    name: 'Shopping',
    slug: 'shopping',
    description: 'Antique shops, boutiques, and local markets',
    image: '/images/shopping.jpg',
    count: 21,
  },
  {
    name: 'Family Fun',
    slug: 'family-fun',
    description: 'Kid-friendly activities and attractions',
    image: '/images/family-fun.jpg',
    count: 14,
  },
];

const featuredActivities = [
  {
    name: 'Western States Trail Run',
    category: 'Outdoor Adventures',
    description: 'Experience the legendary 100-mile endurance trail that starts right here in Auburn.',
    image: '/images/western-states-trail.jpg',
    href: '/things-to-do/outdoor-adventures/western-states-trail',
  },
  {
    name: 'Old Town Walking Tour',
    category: 'Historic Attractions',
    description: 'Discover Gold Rush history through the charming streets of Old Town Auburn.',
    image: '/images/old-town-tour.jpg',
    href: '/things-to-do/historic-attractions/old-town-tour',
  },
  {
    name: 'American River Rafting',
    category: 'Outdoor Adventures',
    description: 'Class II-IV rapids through stunning canyon scenery just minutes from downtown.',
    image: '/images/river-rafting.jpg',
    href: '/things-to-do/outdoor-adventures/river-rafting',
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="cream" spacing="lg">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-4">
                Explore Auburn
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6">
                Things To Do in Auburn
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                From world-class trails to Gold Rush history, farm-to-fork dining to
                thrilling river adventures - Auburn offers unforgettable experiences
                for every kind of traveler.
              </p>
            </div>
          </Container>
        </Section>

        {/* Category Cards Grid */}
        <Section>
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/things-to-do/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3] transition-transform hover:-translate-y-1"
                >
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium text-gold-light mb-2">
                      {category.count} experiences
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-gold-light transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm text-stone-300 line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Featured Activities */}
        <Section background="stone">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                  Don&apos;t Miss
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                  Featured Experiences
                </h2>
              </div>
              <Link
                href="/things-to-do/featured"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                View all featured
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredActivities.map((activity) => (
                <article
                  key={activity.name}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[3/2] bg-gradient-to-br from-sage to-sage-dark relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-gold-dark">
                      {activity.category}
                    </span>
                    <h3 className="text-xl font-semibold text-stone-900 mt-2 mb-3 group-hover:text-gold-dark transition-colors">
                      <Link href={activity.href}>
                        {activity.name}
                      </Link>
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {activity.description}
                    </p>
                    <Link
                      href={activity.href}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section background="dark" spacing="lg">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Ready to Plan Your Auburn Adventure?
              </h2>
              <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
                Download our visitor guide or contact us for personalized recommendations
                tailored to your interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
