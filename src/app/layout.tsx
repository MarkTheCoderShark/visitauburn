import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Playfair Display - elegant serif for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Inter - clean sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Cormorant Garamond - premium editorial serif for hero typography
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBFBF8",
};

export const metadata: Metadata = {
  title: {
    default: "Visit Auburn, California | Gateway to Gold Country",
    template: "%s | Visit Auburn, California",
  },
  description:
    "Discover Auburn, California - the gateway to Gold Country. Explore historic Old Town, world-class trails, award-winning wineries, and stunning Sierra Nevada foothills. Plan your visit today.",
  keywords: [
    "Auburn California",
    "Visit Auburn",
    "Gold Country",
    "Sierra Nevada foothills",
    "Old Town Auburn",
    "California tourism",
    "hiking trails",
    "wine country",
    "historic downtown",
    "Placer County",
  ],
  authors: [{ name: "Visit Auburn" }],
  creator: "Visit Auburn",
  publisher: "Visit Auburn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://visitauburn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visitauburn.com",
    siteName: "Visit Auburn, California",
    title: "Visit Auburn, California | Gateway to Gold Country",
    description:
      "Discover Auburn, California - the gateway to Gold Country. Explore historic Old Town, world-class trails, award-winning wineries, and stunning Sierra Nevada foothills.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visit Auburn, California - Gateway to Gold Country",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Auburn, California | Gateway to Gold Country",
    description:
      "Discover Auburn, California - the gateway to Gold Country. Explore historic Old Town, world-class trails, and award-winning wineries.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
