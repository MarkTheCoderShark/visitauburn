import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'sacramentolove.com',
      },
      {
        protocol: 'https',
        hostname: 'digital.ihg.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'powers-mansion.allhotelscalifornia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.parks.ca.gov',
      },
      {
        protocol: 'https',
        hostname: 'www.mercurynews.com',
      },
      {
        protocol: 'https',
        hostname: 'visit-eldorado.com',
      },
    ],
  },
};

export default nextConfig;
