import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Plan Your Visit | Visit Auburn, California',
  description: 'Everything you need to plan your trip to Auburn, California. Getting here, where to stay, itineraries, and travel tips.',
};

const planningTools = [
  {
    title: 'Getting Here',
    description: 'Directions, airports, and transportation options',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m2.25 0v6m-6-6H6.375a2.625 2.625 0 00-2.625 2.625v6a2.625 2.625 0 002.625 2.625h.75m6-12h.008v.008h-.008V6.75zm0 3h.008v.008h-.008V9.75z" />
      </svg>
    ),
    href: '/plan/getting-here',
  },
  {
    title: 'Where to Stay',
    description: 'Hotels, B&Bs, vacation rentals, and camping',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    href: '/stay',
  },
  {
    title: 'Trip Itineraries',
    description: 'Curated day trips and multi-day adventures',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    href: '/plan/itineraries',
  },
  {
    title: 'Travel Tips',
    description: 'Best times to visit, what to pack, local insights',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    href: '/plan/tips',
  },
];

const itineraries = [
  {
    title: 'Perfect Day in Auburn',
    duration: '1 Day',
    description: 'Experience the best of Auburn in a single day - history, nature, and great food.',
    highlights: ['Old Town Walking Tour', 'Lunch at Local Favorite', 'Hidden Falls Hike', 'Sunset at Confluence'],
    image: '/images/itineraries/perfect-day.jpg',
    href: '/plan/itineraries/perfect-day',
  },
  {
    title: 'Gold Country Weekend',
    duration: '2-3 Days',
    description: 'Immerse yourself in Gold Rush history and Sierra foothill beauty.',
    highlights: ['Historic Museums', 'Wine Tasting', 'River Adventures', 'Farm-to-Fork Dining'],
    image: '/images/itineraries/weekend.jpg',
    href: '/plan/itineraries/gold-country-weekend',
  },
  {
    title: 'Outdoor Adventure Week',
    duration: '5-7 Days',
    description: 'The ultimate active vacation in the Sierra Nevada foothills.',
    highlights: ['Trail Running', 'Mountain Biking', 'River Rafting', 'Rock Climbing'],
    image: '/images/itineraries/adventure.jpg',
    href: '/plan/itineraries/outdoor-adventure',
  },
];

const quickFacts = [
  { label: 'Distance from Sacramento', value: '35 miles (40 min)' },
  { label: 'Distance from San Francisco', value: '120 miles (2 hours)' },
  { label: 'Nearest Airport', value: 'Sacramento (SMF)' },
  { label: 'Elevation', value: '1,255 feet' },
  { label: 'Best Weather', value: 'April - October' },
  { label: 'Population', value: '14,000+' },
];

export default function PlanPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-stone-900 py-20 lg:py-32">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-dark/20 to-transparent" />

          <Container className="relative">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold mb-4">
                Start Your Adventure
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                Plan Your Visit to Auburn
              </h1>
              <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-8">
                Everything you need to make the most of your Gold Country adventure.
                From getting here to finding the perfect stay, we&apos;ve got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#itineraries"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                >
                  Browse Itineraries
                </Link>
                <Link
                  href="/stay"
                  className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Find Accommodations
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Planning Tools Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
                Planning Tools
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                Everything you need to plan your perfect Auburn getaway
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {planningTools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group p-8 bg-white rounded-2xl border border-border hover:border-gold hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 text-gold-dark flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-stone-900 transition-colors">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-gold-dark transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Quick Facts */}
        <section className="bg-cream py-16 lg:py-20">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-stone-900 mb-2">
                Quick Facts
              </h2>
              <p className="text-muted">
                Essential information for planning your trip
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <p className="text-lg md:text-xl font-semibold text-gold-dark mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm text-muted">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="py-16 lg:py-24 scroll-mt-24">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                  Curated Experiences
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                  Trip Itineraries
                </h2>
              </div>
              <Link
                href="/plan/itineraries"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                View all itineraries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {itineraries.map((itinerary) => (
                <article
                  key={itinerary.title}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-sage/30 to-terracotta/30 relative">
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-stone-700 rounded-full">
                        {itinerary.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-gold-dark transition-colors">
                      <Link href={itinerary.href}>
                        {itinerary.title}
                      </Link>
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {itinerary.description}
                    </p>
                    <ul className="space-y-2">
                      {itinerary.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-stone-600">
                          <svg className="w-4 h-4 text-gold-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={itinerary.href}
                      className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
                    >
                      View itinerary
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Visitor Guide Download */}
        <section className="bg-stone-100 py-16 lg:py-20">
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Guide preview placeholder */}
              <div className="w-full max-w-xs lg:w-1/3">
                <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-terracotta/20 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gold-dark mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p className="text-sm font-medium text-stone-600">Visitor Guide 2025</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                  Download Our Free Visitor Guide
                </h2>
                <p className="text-muted mb-6 max-w-xl">
                  Get our comprehensive guide to Auburn and Gold Country. Includes maps,
                  seasonal highlights, local recommendations, and insider tips to make
                  your visit unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/visitor-guide"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download PDF
                  </Link>
                  <Link
                    href="/visitor-center"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:bg-white transition-colors"
                  >
                    Request Printed Copy
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                Questions About Your Trip?
              </h2>
              <p className="text-muted mb-6">
                Our friendly visitor services team is here to help with personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+15308850540"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (530) 885-0540
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
