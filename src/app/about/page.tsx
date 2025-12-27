import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'About Auburn | Visit Auburn, California',
  description: 'Discover the rich history and vibrant community of Auburn, California - the heart of Gold Country since 1848.',
};

const timeline = [
  {
    year: '1848',
    title: 'Gold Discovery',
    description: 'Gold is discovered at nearby Sutter\'s Mill, sparking the California Gold Rush and the founding of Auburn.',
  },
  {
    year: '1850',
    title: 'County Seat',
    description: 'Auburn becomes the county seat of Placer County, establishing its role as a regional center.',
  },
  {
    year: '1865',
    title: 'Railroad Arrives',
    description: 'The Central Pacific Railroad reaches Auburn, connecting the town to Sacramento and beyond.',
  },
  {
    year: '1898',
    title: 'Courthouse Built',
    description: 'The iconic Placer County Courthouse is constructed, becoming a beloved landmark.',
  },
  {
    year: '1974',
    title: 'Western States',
    description: 'The first Western States Endurance Run finishes in Auburn, launching a legendary tradition.',
  },
  {
    year: 'Today',
    title: 'Thriving Community',
    description: 'Auburn continues to grow while honoring its heritage as the heart of Gold Country.',
  },
];

const values = [
  {
    title: 'Preserve Our Heritage',
    description: 'We protect and celebrate the historic character of our Gold Rush-era downtown and natural landscapes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Support Local',
    description: 'Our local businesses, farmers, and artisans are the backbone of our community and visitor experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Protect Nature',
    description: 'We are stewards of our rivers, trails, and wild spaces, ensuring they remain pristine for future generations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
  {
    title: 'Welcome All',
    description: 'Auburn is a welcoming destination for visitors of all backgrounds, abilities, and interests.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-stone-900 py-20 lg:py-32">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent" />

          <Container className="relative">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                The Heart of Gold Country
              </h1>
              <p className="text-lg md:text-xl text-stone-300 leading-relaxed">
                Since 1848, Auburn has been a place where adventure meets history,
                where natural beauty inspires, and where community thrives. Welcome
                to California&apos;s original gold town.
              </p>
            </div>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/20 to-terracotta/20 rounded-2xl" />

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">
                  A Legacy of Gold Rush Spirit
                </h2>
                <div className="prose prose-stone max-w-none">
                  <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    Auburn&apos;s story begins with the discovery of gold in 1848, when prospectors
                    flooded into the Sierra Nevada foothills in search of fortune. What they
                    found was more than gold - they discovered a place of extraordinary natural
                    beauty at the confluence of ancient rivers.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    Today, that pioneering spirit lives on. Auburn has evolved from a mining
                    camp into a thriving community that honors its heritage while embracing
                    the future. Our historic downtown, preserved Gold Rush-era buildings,
                    and world-renowned trails tell the story of a place shaped by dreams,
                    determination, and the land itself.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Whether you come to explore our trails, taste our farm-to-fork cuisine,
                    or simply wander our charming streets, you&apos;ll discover why Auburn
                    has been capturing hearts for nearly two centuries.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="bg-cream py-16 lg:py-24">
          <Container>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                Our Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900">
                A Brief History
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year bubble */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <span className="text-2xl font-semibold text-gold-dark">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-stone-900 mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Our Values / Stewardship */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-dark mb-2">
                Our Commitment
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
                Stewardship Values
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                As stewards of this special place, we are committed to preserving what makes
                Auburn extraordinary for visitors today and generations to come.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-8 bg-white rounded-2xl border border-border"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gold/10 text-gold-dark flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-stone-900 py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-semibold text-gold mb-2">175+</p>
                <p className="text-stone-400">Years of History</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-semibold text-gold mb-2">42K</p>
                <p className="text-stone-400">Acres of Parkland</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-semibold text-gold mb-2">100+</p>
                <p className="text-stone-400">Miles of Trails</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-semibold text-gold mb-2">300</p>
                <p className="text-stone-400">Days of Sunshine</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Community Quote */}
        <section className="py-16 lg:py-24">
          <Container size="narrow">
            <blockquote className="text-center">
              <svg className="w-12 h-12 mx-auto text-gold/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl font-medium text-stone-700 leading-relaxed mb-6">
                &quot;Auburn is not just a place to visit - it&apos;s a place that becomes part of you.
                The trails, the history, the community spirit... it all comes together to create
                something truly special.&quot;
              </p>
              <footer className="text-muted">
                <cite className="not-italic font-medium text-stone-900">
                  Local Resident
                </cite>
              </footer>
            </blockquote>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-cream py-16 lg:py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                Ready to Experience Auburn?
              </h2>
              <p className="text-muted mb-8">
                Start planning your Gold Country adventure today.
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
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-base font-medium text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Explore Things To Do
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
