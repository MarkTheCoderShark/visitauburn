import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

// Sample events data - would come from CMS in production
const events: Record<string, {
  name: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  price: string;
  website?: string;
  ticketUrl?: string;
  organizer: string;
  contactEmail?: string;
}> = {
  'gold-country-fair': {
    name: 'Gold Country Fair',
    date: 'September 12-15, 2025',
    time: '10:00 AM - 10:00 PM',
    location: 'Gold Country Fairgrounds',
    address: '1273 High Street, Auburn, CA 95603',
    description: 'Annual county fair featuring livestock shows, carnival rides, live entertainment, and local food vendors.',
    longDescription: `The Gold Country Fair is Placer County's premier annual celebration, bringing together the best of our agricultural heritage with modern entertainment and family fun.

Highlights include:
- Livestock shows and 4-H competitions
- Carnival rides and midway games
- Live music and entertainment on multiple stages
- Local food vendors and craft beer garden
- Exhibits showcasing local arts, crafts, and agriculture
- Kids' activities and educational programs

This beloved tradition has been bringing the community together for over 80 years. Join us for four days of celebration in the heart of Gold Country.`,
    category: 'Festival',
    image: '/images/events/gold-country-fair.jpg',
    price: '$12 adults, $8 seniors, Free for kids under 6',
    website: 'https://goldcountryfair.com',
    ticketUrl: 'https://goldcountryfair.com/tickets',
    organizer: 'Placer County Fair Association',
    contactEmail: 'info@goldcountryfair.com',
  },
  'old-town-art-walk': {
    name: 'Old Town Art Walk',
    date: 'First Friday of Every Month',
    time: '5:00 PM - 8:00 PM',
    location: 'Old Town Auburn',
    address: 'Lincoln Way & Sacramento Street, Auburn, CA',
    description: 'Monthly celebration of local art featuring gallery openings, live music, and wine tastings throughout historic Old Town.',
    longDescription: `Experience Auburn's vibrant arts community during our monthly Art Walk. Stroll through historic Old Town as galleries open their doors, restaurants offer special menus, and musicians fill the streets with live music.

What to expect:
- Gallery openings with artist receptions
- Live music performances on every block
- Wine and beer tastings at participating locations
- Pop-up artisan vendors
- Special dining offers at local restaurants
- Free admission to all galleries

The Art Walk is a wonderful way to explore Old Town's unique shops and galleries while enjoying the company of fellow art lovers. Most parking is free after 5 PM.`,
    category: 'Arts & Culture',
    image: '/images/events/art-walk.jpg',
    price: 'Free',
    website: 'https://oldtownauburn.com/artwalk',
    organizer: 'Old Town Auburn Association',
  },
  'western-states-endurance-run': {
    name: 'Western States Endurance Run',
    date: 'June 28-29, 2025',
    time: '5:00 AM Start (Squaw Valley)',
    location: 'Squaw Valley to Auburn',
    address: 'Finish: Placer High School, 675 Aguilar St, Auburn, CA',
    description: 'The world\'s oldest 100-mile trail race, finishing at Placer High School. A legendary endurance event.',
    longDescription: `The Western States Endurance Run is the world's oldest and most prestigious 100-mile trail race. Starting in Squaw Valley and finishing at Placer High School in Auburn, the race covers some of the most challenging and beautiful terrain in the Sierra Nevada.

The race began in 1974 and has become the gold standard for ultramarathon running. Spectators can watch runners finish throughout the day on Saturday, with the final cutoff at 11:00 AM on Sunday.

Best spectator spots:
- Placer High School finish line (emotional and inspiring)
- No Hands Bridge (scenic river crossing)
- Auburn Dam Overlook (panoramic views)

The finish line atmosphere is electric, as runners complete their 100-mile journey with family, friends, and the Auburn community cheering them on.`,
    category: 'Sports',
    image: '/images/events/western-states.jpg',
    price: 'Free to spectate',
    website: 'https://www.wser.org',
    organizer: 'Western States Endurance Run Foundation',
  },
};

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events[slug];

  if (!event) {
    return {
      title: 'Event Not Found | Visit Auburn',
    };
  }

  return {
    title: `${event.name} | Events in Auburn, California`,
    description: event.description,
  };
}

export function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ slug }));
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events[slug];

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section spacing="none" className="relative">
          <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-terracotta to-stone-800">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <Container className="relative h-full flex flex-col justify-end pb-12">
              <nav className="mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-stone-300">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/events" className="hover:text-white transition-colors">
                      Events
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-gold-light truncate max-w-[200px]">{event.name}</li>
                </ol>
              </nav>

              <div className="flex items-start gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-gold text-stone-900 text-xs font-semibold rounded-full">
                  {event.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
                {event.name}
              </h1>
              <p className="text-lg text-stone-300 max-w-2xl">
                {event.description}
              </p>
            </Container>
          </div>
        </Section>

        {/* Event Details */}
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-stone max-w-none">
                  <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                    About This Event
                  </h2>
                  {event.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-stone-600 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">
                    Location
                  </h3>
                  <div className="aspect-[16/9] bg-stone-100 rounded-xl flex items-center justify-center">
                    <div className="text-center text-muted">
                      <svg className="w-12 h-12 mx-auto mb-2 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="text-sm">Map placeholder</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {event.address}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-cream rounded-2xl p-6 space-y-6">
                  {/* Date & Time */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                      Date & Time
                    </h3>
                    <p className="text-lg font-medium text-stone-900">{event.date}</p>
                    <p className="text-muted">{event.time}</p>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                      Location
                    </h3>
                    <p className="text-lg font-medium text-stone-900">{event.location}</p>
                    <p className="text-sm text-muted">{event.address}</p>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                      Admission
                    </h3>
                    <p className="text-lg font-medium text-stone-900">{event.price}</p>
                  </div>

                  {/* Organizer */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                      Organizer
                    </h3>
                    <p className="text-stone-900">{event.organizer}</p>
                    {event.contactEmail && (
                      <a href={`mailto:${event.contactEmail}`} className="text-sm text-gold-dark hover:text-gold">
                        {event.contactEmail}
                      </a>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 space-y-3">
                    {event.ticketUrl && (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                      >
                        Get Tickets
                      </a>
                    )}
                    {event.website && (
                      <a
                        href={event.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:bg-white transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>

                  {/* Share */}
                  <div className="pt-4 border-t border-stone-200">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                      Share This Event
                    </h3>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-gold-dark hover:border-gold transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-gold-dark hover:border-gold transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-gold-dark hover:border-gold transition-colors"
                        aria-label="Copy link"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Back to Events */}
        <Section background="cream" spacing="sm">
          <Container>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to All Events
            </Link>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
