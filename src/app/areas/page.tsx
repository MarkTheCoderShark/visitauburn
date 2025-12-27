import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, Container, Section } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Explore Areas | Auburn & Surrounding Gold Country Regions',
  description: 'Discover the diverse neighborhoods and regions around Auburn, California - from historic Old Town to mountain communities and river canyons.',
};

const areas = [
  {
    name: 'Downtown Auburn',
    slug: 'downtown',
    tagline: 'Historic Heart of Gold Country',
    description: 'Explore the charming Old Town district with its 1850s architecture, unique shops, farm-to-fork restaurants, and the iconic Placer County Courthouse. This is where Auburn\'s Gold Rush history comes alive.',
    highlights: ['Historic Old Town', 'Placer County Courthouse', 'Local Shops & Boutiques', 'Farm-to-Fork Dining'],
    image: '/images/areas/downtown.jpg',
  },
  {
    name: 'North Fork',
    slug: 'north-fork',
    tagline: 'Canyon Country Adventures',
    description: 'The North Fork of the American River carves through dramatic canyons offering world-class hiking, mountain biking, and water activities. Home to the famous Western States Trail.',
    highlights: ['Western States Trail', 'River Access', 'Mountain Biking', 'Swimming Holes'],
    image: '/images/areas/north-fork.jpg',
  },
  {
    name: 'Foresthill',
    slug: 'foresthill',
    tagline: 'Mountain Gateway',
    description: 'A historic logging community at 3,200 feet elevation, Foresthill offers access to the Tahoe National Forest, stunning viewpoints, and a quieter pace of mountain living.',
    highlights: ['Foresthill Bridge', 'Tahoe National Forest', 'Sugar Pine Reservoir', 'Historic Town'],
    image: '/images/areas/foresthill.jpg',
  },
  {
    name: 'Cool & Pilot Hill',
    slug: 'cool-pilot-hill',
    tagline: 'Wine Country Charm',
    description: 'Rolling hills dotted with vineyards and wineries make this region perfect for wine tasting, scenic drives, and agricultural tours through Gold Country\'s pastoral landscape.',
    highlights: ['Local Wineries', 'Scenic Drives', 'Farm Visits', 'Tasting Rooms'],
    image: '/images/areas/cool.jpg',
  },
  {
    name: 'Meadow Vista & Colfax',
    slug: 'meadow-vista',
    tagline: 'Railroad Heritage',
    description: 'These mountain communities along the historic transcontinental railroad route offer access to the Sierra Nevada, quaint downtowns, and connections to outdoor recreation.',
    highlights: ['Railroad History', 'Cape Horn Trail', 'Mountain Access', 'Small Town Charm'],
    image: '/images/areas/colfax.jpg',
  },
  {
    name: 'Auburn State Recreation Area',
    slug: 'auburn-sra',
    tagline: '30,000 Acres of Adventure',
    description: 'One of California\'s largest state recreation areas encompasses the canyons of the North and Middle forks of the American River with over 100 miles of trails.',
    highlights: ['100+ Miles of Trails', 'River Activities', 'Camping', 'Wildlife Viewing'],
    image: '/images/areas/auburn-sra.jpg',
  },
];

const nearbyDestinations = [
  { name: 'Lake Tahoe', distance: '60 miles', time: '1.5 hours' },
  { name: 'Sacramento', distance: '35 miles', time: '40 minutes' },
  { name: 'Napa Valley', distance: '90 miles', time: '2 hours' },
  { name: 'Yosemite', distance: '150 miles', time: '3 hours' },
];

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="cream" padding="large">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-4">
                Discover the Region
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6">
                Explore Auburn & Beyond
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                From the historic streets of Old Town to the rugged canyons of the
                American River, Auburn&apos;s diverse landscapes offer something for
                every type of explorer.
              </p>
            </div>
          </Container>
        </Section>

        {/* Areas Grid */}
        <Section>
          <Container>
            <div className="grid gap-8">
              {areas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className={`group grid gap-6 lg:gap-12 items-center ${
                    index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-sage/20 to-sage-dark/30 overflow-hidden relative group-hover:shadow-xl transition-shadow">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                      {area.tagline}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4 group-hover:text-gold-dark transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark group-hover:gap-3 transition-all">
                      Explore {area.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Map Section */}
        <Section background="stone">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                  Get Oriented
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                  Auburn & Surroundings
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Auburn is ideally located in the Sierra Nevada foothills, making it
                  a perfect base for exploring Northern California. Within a short drive,
                  you can reach mountain peaks, wine country, and the state capital.
                </p>

                {/* Nearby destinations */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-stone-900">Day Trip Distances</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {nearbyDestinations.map((dest) => (
                      <div key={dest.name} className="bg-white rounded-lg p-4">
                        <p className="font-medium text-stone-900">{dest.name}</p>
                        <p className="text-sm text-stone-500">{dest.distance} • {dest.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-stone-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-stone-500">Interactive Map</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="dark" padding="large">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Ready to Explore?
              </h2>
              <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
                Whether you&apos;re seeking outdoor adventure, historic charm, or wine
                country relaxation, Auburn has an area waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/things-to-do"
                  className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Things To Do
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
