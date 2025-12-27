import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';

// Area data - in production this would come from a CMS
const areas: Record<string, {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  highlights: string[];
  thingsToDo: Array<{
    name: string;
    category: string;
    description: string;
    href: string;
  }>;
}> = {
  'old-town': {
    name: 'Old Town Auburn',
    tagline: 'Where Gold Rush History Meets Modern Charm',
    description: 'The historic heart of Auburn, featuring Gold Rush-era buildings, unique shops, acclaimed restaurants, and the iconic Placer County Courthouse.',
    longDescription: `Step into Old Town Auburn and journey back to the 1850s Gold Rush era. This charming historic district is the cultural and commercial heart of Auburn, featuring beautifully preserved buildings, tree-lined streets, and a vibrant community atmosphere.

Wander through unique boutiques and antique shops, savor farm-to-fork cuisine at acclaimed restaurants, and discover local wines at intimate tasting rooms. The iconic Placer County Courthouse stands as a testament to Auburn's rich heritage, while galleries and theaters showcase the area's thriving arts scene.

Old Town hosts the famous Art Walk on First Fridays, the year-round Farmers Market on Saturdays, and countless seasonal celebrations that bring the community together.`,
    heroImage: '/images/areas/old-town.jpg',
    highlights: [
      'Historic Gold Rush architecture',
      'Unique boutiques and antiques',
      'Farm-to-fork restaurants',
      'Monthly Art Walk events',
      'Saturday Farmers Market',
    ],
    thingsToDo: [
      {
        name: 'Placer County Courthouse',
        category: 'Historic Site',
        description: 'Iconic 1898 courthouse with stunning architecture and panoramic views.',
        href: '/things-to-do/historic-attractions/courthouse',
      },
      {
        name: 'Old Town Art Walk',
        category: 'Arts & Culture',
        description: 'Monthly celebration of local art with gallery openings and live music.',
        href: '/events/old-town-art-walk',
      },
      {
        name: 'Auburn Farmers Market',
        category: 'Market',
        description: 'Year-round Saturday market with local produce and artisan goods.',
        href: '/things-to-do/shopping/farmers-market',
      },
      {
        name: 'Bootleggers Old Town Tavern',
        category: 'Dining',
        description: 'Historic bar serving craft cocktails in a Gold Rush-era building.',
        href: '/things-to-do/dining-drinks/bootleggers',
      },
    ],
  },
  'canyon-river': {
    name: 'Canyon & River',
    tagline: 'Adventure Flows Through Here',
    description: 'Experience the dramatic American River Canyon with world-class trails, swimming holes, river rafting, and breathtaking natural beauty.',
    longDescription: `The American River Canyon is Auburn's natural playground, offering some of the most spectacular outdoor recreation in Northern California. The confluence of the North and Middle Forks creates a dramatic landscape of deep canyons, rushing rapids, and serene swimming holes.

Home to the legendary Western States Trail, this area attracts runners, hikers, and mountain bikers from around the world. The river itself offers everything from gentle floats to Class IV rapids, making it a premier destination for water enthusiasts of all skill levels.

The historic No Hands Bridge, spanning the North Fork, is an iconic landmark and a must-visit for photographers and history buffs alike. Nearby, the Auburn State Recreation Area encompasses over 42,000 acres of protected wilderness.`,
    heroImage: '/images/areas/canyon-river.jpg',
    highlights: [
      'American River confluence',
      'World-class trail running',
      'Class II-IV river rafting',
      'Historic No Hands Bridge',
      'Swimming holes and beaches',
    ],
    thingsToDo: [
      {
        name: 'Western States Trail',
        category: 'Outdoor Adventure',
        description: 'Legendary trail famous for the 100-mile endurance run.',
        href: '/things-to-do/outdoor-adventures/western-states-trail',
      },
      {
        name: 'American River Rafting',
        category: 'Water Sports',
        description: 'Whitewater adventures from Class II family floats to Class IV thrills.',
        href: '/things-to-do/outdoor-adventures/river-rafting',
      },
      {
        name: 'No Hands Bridge',
        category: 'Historic Site',
        description: 'Historic railroad bridge with stunning canyon views.',
        href: '/things-to-do/historic-attractions/no-hands-bridge',
      },
      {
        name: 'Confluence Point',
        category: 'Nature',
        description: 'Where the North and Middle Forks meet - perfect for swimming.',
        href: '/things-to-do/outdoor-adventures/confluence-point',
      },
    ],
  },
  'trails-parks': {
    name: 'Trails & Parks',
    tagline: 'Your Outdoor Escape Awaits',
    description: 'Explore miles of trails through oak woodlands, discover hidden waterfalls, and experience the natural beauty of the Sierra Nevada foothills.',
    longDescription: `Auburn and the surrounding Sierra Nevada foothills offer an incredible network of trails and parks for hikers, runners, mountain bikers, and nature lovers. From gentle walks through oak woodlands to challenging climbs with panoramic views, there's a trail for every ability level.

Hidden Falls Regional Park is a crown jewel, featuring over 30 miles of trails leading to stunning waterfalls that cascade through moss-covered canyons. The Auburn State Recreation Area offers everything from riverside paths to rugged backcountry routes.

The Cool Bike Trail provides a paved, accessible option for families and casual cyclists, while advanced riders can tackle technical single-track throughout the region. Spring brings wildflower displays, fall offers golden oak leaves, and winter reveals seasonal waterfalls at their most impressive.`,
    heroImage: '/images/areas/trails-parks.jpg',
    highlights: [
      'Hidden Falls Regional Park',
      'Auburn State Recreation Area',
      'Cool Bike Trail',
      'Seasonal waterfalls',
      'Oak woodland scenery',
    ],
    thingsToDo: [
      {
        name: 'Hidden Falls Regional Park',
        category: 'Hiking',
        description: 'Over 30 miles of trails through oak woodlands and waterfalls.',
        href: '/things-to-do/outdoor-adventures/hidden-falls',
      },
      {
        name: 'Auburn State Recreation Area',
        category: 'Parks',
        description: '42,000 acres of outdoor recreation opportunities.',
        href: '/things-to-do/outdoor-adventures/asra',
      },
      {
        name: 'Cool Bike Trail',
        category: 'Biking',
        description: 'Paved multi-use path perfect for cycling and walking.',
        href: '/things-to-do/outdoor-adventures/cool-bike-trail',
      },
      {
        name: 'Stagecoach Trail',
        category: 'Hiking',
        description: 'Historic route with canyon views and river access.',
        href: '/things-to-do/outdoor-adventures/stagecoach-trail',
      },
    ],
  },
};

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    return {
      title: 'Area Not Found | Visit Auburn',
    };
  }

  return {
    title: `${area.name} | Explore Auburn, California`,
    description: area.description,
  };
}

export function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-stone-900">
          {/* Background placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage-dark to-stone-800" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Content */}
          <Container className="relative h-full flex flex-col justify-end pb-16">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-stone-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/areas" className="hover:text-white transition-colors">
                    Explore Areas
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gold-light">{area.name}</li>
              </ol>
            </nav>

            <p className="text-gold-light text-sm font-medium tracking-wide mb-2">
              {area.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
              {area.name}
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl">
              {area.description}
            </p>
          </Container>
        </section>

        {/* Long Description */}
        <section className="bg-cream py-16 lg:py-20">
          <Container size="narrow">
            <div className="prose prose-stone prose-lg max-w-none">
              {area.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-stone-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <section className="py-16 lg:py-20">
          <Container>
            <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
              Highlights
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {area.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-border"
                >
                  <svg className="w-5 h-5 text-gold-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium text-stone-700">{highlight}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Things To Do in This Area */}
        <section className="bg-stone-100 py-16 lg:py-24">
          <Container>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                Explore
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                Things To Do in {area.name}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {area.thingsToDo.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex gap-6 p-6 bg-white rounded-2xl border border-border hover:border-gold hover:shadow-md transition-all"
                >
                  {/* Image placeholder */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-gradient-to-br from-gold/20 to-terracotta/20" />

                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium uppercase tracking-wider text-gold-dark">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 mt-1 mb-2 group-hover:text-gold-dark transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-dark group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/things-to-do"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                View all things to do
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>

        {/* Explore Other Areas */}
        <section className="py-16 lg:py-20">
          <Container>
            <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
              Explore Other Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(areas)
                .filter(([key]) => key !== slug)
                .map(([key, otherArea]) => (
                  <Link
                    key={key}
                    href={`/areas/${key}`}
                    className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border hover:border-gold hover:bg-cream transition-all"
                  >
                    <span className="font-medium text-stone-700 group-hover:text-gold-dark transition-colors">
                      {otherArea.name}
                    </span>
                    <svg className="w-4 h-4 text-stone-400 group-hover:text-gold-dark transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-stone-900 py-16 lg:py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Ready to Explore {area.name}?
              </h2>
              <p className="text-stone-400 mb-8">
                Plan your visit and discover everything this area has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/stay"
                  className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Find Nearby Stays
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
