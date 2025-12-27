import Hero from '@/components/sections/Hero';
import CategoryGrid from '@/components/sections/CategoryGrid';
import StatsRow from '@/components/sections/StatsRow';
import { FeatureSplitOldTown, FeatureSplitTrails } from '@/components/sections/FeatureSplit';
import SeasonalTabs from '@/components/sections/SeasonalTabs';
import StayGrid from '@/components/sections/StayGrid';
import EventsList from '@/components/sections/EventsList';
import GuideFeatures from '@/components/sections/GuideFeatures';
import StewardshipCallout from '@/components/sections/StewardshipCallout';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Full-screen Hero */}
        <Hero />

        {/* Section 2: Quick Explore - Category Cards */}
        <CategoryGrid />

        {/* Section 3: Auburn at a Glance - Stats */}
        <StatsRow />

        {/* Section 4: Editorial Feature Splits */}
        <FeatureSplitOldTown />
        <FeatureSplitTrails />

        {/* Section 5: Seasonal Explorer */}
        <SeasonalTabs />

        {/* Section 6: Places to Stay */}
        <StayGrid />

        {/* Section 7: Events This Week */}
        <EventsList />

        {/* Section 8: Featured Guides */}
        <GuideFeatures />

        {/* Section 9: Stewardship / Values */}
        <StewardshipCallout />

        {/* Section 10: Newsletter Signup */}
        <NewsletterSignup />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </>
  );
}
