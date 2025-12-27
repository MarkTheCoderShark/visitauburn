import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Events & Festivals | Visit Auburn, California',
  description: 'Discover upcoming events, festivals, and activities in Auburn, California. From seasonal celebrations to weekly farmers markets.',
};

// Sample events data - would come from CMS in production
const events = [
  {
    id: 'gold-country-fair',
    name: 'Gold Country Fair',
    date: 'September 12-15, 2025',
    dateSort: '2025-09-12',
    time: '10:00 AM - 10:00 PM',
    location: 'Gold Country Fairgrounds',
    description: 'Annual county fair featuring livestock shows, carnival rides, live entertainment, and local food vendors.',
    category: 'Festival',
    image: '/images/events/gold-country-fair.jpg',
    featured: true,
  },
  {
    id: 'old-town-art-walk',
    name: 'Old Town Art Walk',
    date: 'First Friday of Every Month',
    dateSort: '2025-01-03',
    time: '5:00 PM - 8:00 PM',
    location: 'Old Town Auburn',
    description: 'Monthly celebration of local art featuring gallery openings, live music, and wine tastings throughout historic Old Town.',
    category: 'Arts & Culture',
    image: '/images/events/art-walk.jpg',
    featured: true,
  },
  {
    id: 'auburn-farmers-market',
    name: 'Auburn Farmers Market',
    date: 'Every Saturday',
    dateSort: '2025-01-04',
    time: '8:00 AM - 12:00 PM',
    location: 'Old Town Auburn',
    description: 'Year-round farmers market featuring fresh produce, artisan goods, baked items, and live music.',
    category: 'Market',
    image: '/images/events/farmers-market.jpg',
    featured: false,
  },
  {
    id: 'western-states-endurance-run',
    name: 'Western States Endurance Run',
    date: 'June 28-29, 2025',
    dateSort: '2025-06-28',
    time: '5:00 AM Start',
    location: 'Squaw Valley to Auburn',
    description: 'The world\'s oldest 100-mile trail race, finishing at Placer High School. A legendary endurance event.',
    category: 'Sports',
    image: '/images/events/western-states.jpg',
    featured: true,
  },
  {
    id: 'auburn-symphony',
    name: 'Auburn Symphony Season Opener',
    date: 'October 18, 2025',
    dateSort: '2025-10-18',
    time: '7:30 PM',
    location: 'Auburn Performing Arts Center',
    description: 'The Auburn Symphony Orchestra opens its new season with a celebration of classical masterworks.',
    category: 'Performing Arts',
    image: '/images/events/symphony.jpg',
    featured: false,
  },
  {
    id: 'holiday-lights',
    name: 'Holiday Lights in Old Town',
    date: 'December 6, 2025',
    dateSort: '2025-12-06',
    time: '5:00 PM - 9:00 PM',
    location: 'Old Town Auburn',
    description: 'Annual tree lighting ceremony with carolers, hot cocoa, Santa visits, and holiday shopping.',
    category: 'Holiday',
    image: '/images/events/holiday-lights.jpg',
    featured: false,
  },
];

const categories = ['All Events', 'Festival', 'Arts & Culture', 'Sports', 'Market', 'Performing Arts', 'Holiday'];

export default function EventsPage() {
  const featuredEvents = events.filter((e) => e.featured);
  const upcomingEvents = events;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="cream" spacing="lg">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-4">
                What&apos;s Happening
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6">
                Events & Festivals
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                From world-famous endurance races to charming small-town celebrations,
                there&apos;s always something happening in Auburn.
              </p>
            </div>
          </Container>
        </Section>

        {/* Featured Events */}
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Featured Events
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-stone-900 aspect-[4/5]"
                >
                  {/* Background placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta/80 to-stone-800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold text-stone-900 text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-gold-light text-sm font-medium mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-gold-light transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-stone-300 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-stone-400 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Filter Bar */}
        <Section spacing="sm" background="stone" className="border-y border-border">
          <Container>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-stone-600 mr-2">Filter:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Events'
                      ? 'bg-gold text-stone-900'
                      : 'bg-white text-stone-600 hover:bg-gold-light/20 border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </Section>

        {/* All Events List */}
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Image placeholder */}
                  <div className="md:w-64 lg:w-80 aspect-video md:aspect-auto bg-gradient-to-br from-sage/30 to-sage-dark/30 flex-shrink-0" />

                  {/* Content */}
                  <div className="flex-1 p-6 md:py-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-2.5 py-1 bg-cream text-xs font-medium text-stone-600 rounded-full">
                        {event.category}
                      </span>
                      <span className="text-sm text-gold-dark font-medium">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-gold-dark transition-colors">
                      <Link href={`/events/${event.id}`}>
                        {event.name}
                      </Link>
                    </h3>
                    <p className="text-muted text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center px-6 pb-6 md:pb-0 md:pr-8">
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2" aria-label="Pagination">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted hover:bg-stone-50"
                  disabled
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-gold text-stone-900 text-sm font-semibold"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg border border-border text-sm font-medium text-stone-600 hover:bg-stone-50"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg border border-border text-sm font-medium text-stone-600 hover:bg-stone-50"
                >
                  3
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-stone-600 hover:bg-stone-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </Container>
        </Section>

        {/* Submit Event CTA */}
        <Section background="dark">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Have an Event to Share?
              </h2>
              <p className="text-stone-400 mb-6">
                Submit your Auburn-area event and reach thousands of visitors and locals.
              </p>
              <Link
                href="/submit-event"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
              >
                Submit an Event
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
