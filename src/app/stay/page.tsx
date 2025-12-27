import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Where to Stay | Visit Auburn, California',
  description: 'Find the perfect place to stay in Auburn, California. From charming B&Bs to modern hotels and vacation rentals.',
};

const accommodationTypes = [
  {
    name: 'Hotels & Motels',
    description: 'Comfortable accommodations with modern amenities',
    count: 12,
    image: '/images/stay/hotels.jpg',
    href: '/stay/hotels',
  },
  {
    name: 'Bed & Breakfasts',
    description: 'Charming inns with personalized hospitality',
    count: 8,
    image: '/images/stay/bnb.jpg',
    href: '/stay/bed-and-breakfasts',
  },
  {
    name: 'Vacation Rentals',
    description: 'Homes and cabins for extended stays',
    count: 24,
    image: '/images/stay/rentals.jpg',
    href: '/stay/vacation-rentals',
  },
  {
    name: 'Camping & RV',
    description: 'Connect with nature at local campgrounds',
    count: 6,
    image: '/images/stay/camping.jpg',
    href: '/stay/camping',
  },
];

const featuredStays = [
  {
    id: 'auburn-inn',
    name: 'The Auburn Inn',
    type: 'Boutique Hotel',
    description: 'Historic boutique hotel in the heart of Old Town with modern amenities and Gold Rush charm.',
    priceRange: '$$',
    rating: 4.8,
    reviewCount: 124,
    amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Pet Friendly'],
    image: '/images/stay/auburn-inn.jpg',
  },
  {
    id: 'power-house',
    name: 'The Power House B&B',
    type: 'Bed & Breakfast',
    description: 'Elegant 1898 Victorian home offering spacious rooms and gourmet breakfasts overlooking the canyon.',
    priceRange: '$$$',
    rating: 4.9,
    reviewCount: 89,
    amenities: ['Gourmet Breakfast', 'Garden', 'Wine Hour', 'Mountain Views'],
    image: '/images/stay/power-house.jpg',
  },
  {
    id: 'canyon-view-cottage',
    name: 'Canyon View Cottage',
    type: 'Vacation Rental',
    description: 'Secluded cottage with panoramic views of the American River canyon. Perfect for couples.',
    priceRange: '$$',
    rating: 4.7,
    reviewCount: 56,
    amenities: ['Full Kitchen', 'Hot Tub', 'River Access', 'Fireplace'],
    image: '/images/stay/canyon-cottage.jpg',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-gold' : 'text-stone-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-muted ml-1">({rating})</span>
    </div>
  );
}

export default function StayPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-cream py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-4">
                Accommodations
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6">
                Where to Stay in Auburn
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Rest easy in Gold Country. Whether you prefer historic charm, modern
                comfort, or a connection with nature, Auburn has the perfect place
                for your stay.
              </p>
            </div>
          </Container>
        </section>

        {/* Accommodation Types */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {accommodationTypes.map((type) => (
                <Link
                  key={type.name}
                  href={type.href}
                  className="group relative overflow-hidden rounded-2xl bg-stone-900 aspect-[3/4]"
                >
                  {/* Background placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sage to-stone-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium text-gold-light mb-2">
                      {type.count} options
                    </span>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-light transition-colors">
                      {type.name}
                    </h2>
                    <p className="text-sm text-stone-300">
                      {type.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Stays */}
        <section className="bg-stone-100 py-16 lg:py-24">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                  Hand-Picked
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                  Featured Accommodations
                </h2>
              </div>
              <Link
                href="/stay/featured"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                View all
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredStays.map((stay) => (
                <article
                  key={stay.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-terracotta/30 to-stone-300 relative overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-stone-700 rounded-full">
                        {stay.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-stone-900/80 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                        {stay.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-stone-900 group-hover:text-gold-dark transition-colors">
                        <Link href={`/stay/${stay.id}`}>
                          {stay.name}
                        </Link>
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <StarRating rating={stay.rating} />
                      <span className="text-sm text-muted">
                        {stay.reviewCount} reviews
                      </span>
                    </div>

                    <p className="text-muted text-sm mb-4 line-clamp-2">
                      {stay.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {stay.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-block px-2.5 py-1 bg-cream text-xs font-medium text-stone-600 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                      {stay.amenities.length > 3 && (
                        <span className="inline-block px-2.5 py-1 text-xs font-medium text-muted">
                          +{stay.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Booking Tips */}
        <section className="py-16 lg:py-24">
          <Container size="narrow">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                Planning Your Stay
              </h2>
              <p className="text-muted">
                Tips for finding the perfect accommodation in Auburn
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Book Early</h3>
                <p className="text-sm text-muted">
                  Peak season (May-October) fills up fast. Reserve 2-3 months ahead for best selection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Location Matters</h3>
                <p className="text-sm text-muted">
                  Old Town is walkable. Canyon stays offer nature. Highway 49 provides easy access.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Ask Us</h3>
                <p className="text-sm text-muted">
                  Not sure where to stay? Contact our visitor center for personalized recommendations.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-stone-900 py-16 lg:py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Need Help Finding the Right Stay?
              </h2>
              <p className="text-stone-400 mb-8">
                Our visitor services team can help match you with the perfect accommodation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-stone-900 hover:bg-gold-light transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base font-medium text-white hover:bg-stone-800 transition-colors"
                >
                  Plan Your Trip
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
