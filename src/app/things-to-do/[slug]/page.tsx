import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

// Category data - in production this would come from a CMS or database
const categories: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  heroImage: string;
}> = {
  'outdoor-adventures': {
    name: 'Outdoor Adventures',
    description: 'Hiking, biking, rafting, and more in the Sierra foothills',
    longDescription: 'Auburn sits at the gateway to some of California\'s most spectacular outdoor recreation. From world-renowned trails to thrilling river rapids, the Sierra Nevada foothills offer year-round adventures for every skill level.',
    heroImage: '/images/outdoor-hero.jpg',
  },
  'historic-attractions': {
    name: 'Historic Attractions',
    description: 'Gold Rush history, museums, and heritage sites',
    longDescription: 'Step back in time and discover Auburn\'s rich Gold Rush heritage. Our historic Old Town district, museums, and heritage sites tell the story of California\'s pioneering past.',
    heroImage: '/images/historic-hero.jpg',
  },
  'dining-drinks': {
    name: 'Dining & Drinks',
    description: 'Farm-to-fork restaurants, wineries, and craft breweries',
    longDescription: 'Savor the flavors of the Sierra foothills at Auburn\'s acclaimed restaurants, wineries, and craft breweries. Our farm-to-fork dining scene celebrates local producers and California\'s culinary heritage.',
    heroImage: '/images/dining-hero.jpg',
  },
  'arts-culture': {
    name: 'Arts & Culture',
    description: 'Galleries, theaters, live music, and local artisans',
    longDescription: 'Auburn\'s vibrant arts community brings creativity to every corner of our town. From gallery walks to live performances, discover the artists and makers who call Gold Country home.',
    heroImage: '/images/arts-hero.jpg',
  },
  'shopping': {
    name: 'Shopping',
    description: 'Antique shops, boutiques, and local markets',
    longDescription: 'Browse Auburn\'s eclectic mix of antique shops, boutiques, and artisan markets. Find unique treasures, locally-made goods, and one-of-a-kind gifts throughout Old Town and beyond.',
    heroImage: '/images/shopping-hero.jpg',
  },
  'family-fun': {
    name: 'Family Fun',
    description: 'Kid-friendly activities and attractions',
    longDescription: 'Create lasting family memories in Auburn. From hands-on museum exhibits to scenic parks and easy hiking trails, our family-friendly attractions make Gold Country the perfect destination for all ages.',
    heroImage: '/images/family-hero.jpg',
  },
};

// Sample listings - in production this would come from a CMS
const sampleListings = [
  {
    id: '1',
    name: 'Hidden Falls Regional Park',
    description: 'Over 30 miles of trails through oak woodlands and waterfalls',
    image: '/images/hidden-falls.jpg',
    tags: ['Hiking', 'Nature', 'Waterfalls'],
  },
  {
    id: '2',
    name: 'American River Canyon',
    description: 'Spectacular canyon views and swimming holes',
    image: '/images/river-canyon.jpg',
    tags: ['Swimming', 'Scenic Views', 'Photography'],
  },
  {
    id: '3',
    name: 'Cool Bike Trail',
    description: 'Paved multi-use path perfect for cycling',
    image: '/images/bike-trail.jpg',
    tags: ['Biking', 'Walking', 'Accessible'],
  },
  {
    id: '4',
    name: 'Western States Trail',
    description: 'Historic trail famous for the 100-mile endurance run',
    image: '/images/western-states.jpg',
    tags: ['Trail Running', 'Hiking', 'Historic'],
  },
  {
    id: '5',
    name: 'Auburn State Recreation Area',
    description: '42,000 acres of outdoor recreation opportunities',
    image: '/images/asra.jpg',
    tags: ['Camping', 'Multi-Sport', 'River Access'],
  },
  {
    id: '6',
    name: 'Confluence Point',
    description: 'Where the North and Middle forks meet',
    image: '/images/confluence.jpg',
    tags: ['Swimming', 'Picnic', 'Scenic'],
  },
];

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    return {
      title: 'Category Not Found | Visit Auburn',
    };
  }

  return {
    title: `${category.name} | Things To Do in Auburn, California`,
    description: category.description,
  };
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section spacing="none" className="relative">
          <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-sage-dark to-stone-800">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

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
                    <Link href="/things-to-do" className="hover:text-white transition-colors">
                      Things To Do
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-gold-light">{category.name}</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
                {category.name}
              </h1>
              <p className="text-lg md:text-xl text-stone-300 max-w-2xl">
                {category.description}
              </p>
            </Container>
          </div>
        </Section>

        {/* Description */}
        <Section background="cream" spacing="md">
          <Container size="narrow">
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed text-center">
              {category.longDescription}
            </p>
          </Container>
        </Section>

        {/* Filter Bar */}
        <Section spacing="sm" className="border-b border-border sticky top-20 bg-white/95 backdrop-blur-sm z-30">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted">Showing</span>
                <span className="text-sm font-medium">{sampleListings.length} experiences</span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  className="rounded-lg border border-border bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Sort by"
                >
                  <option>Most Popular</option>
                  <option>Alphabetical</option>
                  <option>Recently Added</option>
                </select>
              </div>
            </div>
          </Container>
        </Section>

        {/* Listings Grid */}
        <Section>
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sampleListings.map((listing) => (
                <article
                  key={listing.id}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage/30 to-sage-dark/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-gold-dark transition-colors">
                      <Link href={`/things-to-do/${slug}/${listing.id}`}>
                        {listing.name}
                      </Link>
                    </h3>
                    <p className="text-muted text-sm mb-4 line-clamp-2">
                      {listing.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {listing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-1 bg-cream text-xs font-medium text-stone-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-3 text-base font-medium text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Load More
              </button>
            </div>
          </Container>
        </Section>

        {/* Related Categories */}
        <Section background="stone">
          <Container>
            <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">
              Explore More Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(categories)
                .filter(([key]) => key !== slug)
                .slice(0, 4)
                .map(([key, cat]) => (
                  <Link
                    key={key}
                    href={`/things-to-do/${key}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 py-2.5 text-sm font-medium text-stone-700 hover:border-gold hover:text-gold-dark transition-colors"
                  >
                    {cat.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
