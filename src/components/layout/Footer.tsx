"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  ChevronRight,
} from "lucide-react";
import { Container } from "../ui/Container";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { label: "Things To Do", href: "/things-to-do" },
      { label: "Events Calendar", href: "/events" },
      { label: "Places to Stay", href: "/stay" },
      { label: "Dining Guide", href: "/things-to-do/food-drink" },
      { label: "Local Wineries", href: "/things-to-do/wineries" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Getting Here", href: "/plan/getting-here" },
      { label: "Trip Itineraries", href: "/plan/itineraries" },
      { label: "Travel Tips", href: "/plan/tips" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Group Travel", href: "/plan/groups" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Downtown Auburn", href: "/explore/downtown" },
      { label: "Gold Country", href: "/explore/gold-country" },
      { label: "Outdoor Recreation", href: "/things-to-do/outdoor" },
      { label: "Arts & Culture", href: "/things-to-do/arts-culture" },
      { label: "Local History", href: "/about/history" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Visitor Center", href: "/visitor-center" },
      { label: "Maps & Guides", href: "/maps" },
      { label: "Partner With Us", href: "/partners" },
      { label: "Press Room", href: "/press" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/visitauburn", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/visitauburn", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/visitauburn", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/visitauburn", label: "YouTube" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

// Premium gold accent color
const goldAccent = "#C9A24A";
const goldLight = "#E2C58F";
const darkWarm = "#1A1714";
const darkWarmLight = "#252220";
const darkWarmLighter = "#2F2B28";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 group" aria-label="Visit Auburn Home">
      {/* Premium Logo Mark */}
      <div className="relative">
        <svg
          className="w-14 h-14"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer ring */}
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="url(#goldRingGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          {/* Mountain shape */}
          <path
            d="M28 12L12 40H44L28 12Z"
            fill="url(#goldMountainGradient)"
            opacity="0.95"
          />
          {/* Inner mountain highlight */}
          <path
            d="M28 20L18 36H38L28 20Z"
            fill={darkWarm}
            opacity="0.3"
          />
          {/* Sun/Gold nugget */}
          <circle cx="28" cy="28" r="5" fill={goldAccent} />
          <circle cx="28" cy="28" r="3" fill={goldLight} opacity="0.6" />
          {/* Subtle glow effect */}
          <circle cx="28" cy="28" r="7" fill={goldAccent} opacity="0.15" />
          <defs>
            <linearGradient id="goldRingGradient" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor={goldLight} />
              <stop offset="1" stopColor={goldAccent} />
            </linearGradient>
            <linearGradient id="goldMountainGradient" x1="28" y1="12" x2="28" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor={goldLight} />
              <stop offset="0.5" stopColor={goldAccent} />
              <stop offset="1" stopColor="#A98436" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className="text-2xl font-serif font-medium tracking-tight leading-none"
          style={{ color: goldAccent }}
        >
          Visit Auburn
        </span>
        <span
          className="text-[11px] uppercase tracking-[0.25em] font-medium mt-1.5"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          California
        </span>
      </div>
    </Link>
  );
}

function NewsletterSignup() {
  return (
    <div
      className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
      style={{ backgroundColor: darkWarmLight }}
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-5"
        style={{
          background: `radial-gradient(circle at top right, ${goldAccent}, transparent 70%)`,
        }}
      />

      {/* Section header with gold accent line */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-[2px]"
          style={{ backgroundColor: goldAccent }}
        />
        <span
          className="text-xs uppercase tracking-[0.15em] font-semibold"
          style={{ color: goldAccent }}
        >
          Newsletter
        </span>
      </div>

      <h3
        className="text-xl font-serif font-medium mb-3"
        style={{ color: '#FFFFFF' }}
      >
        Stay in the Loop
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        Get exclusive travel tips, seasonal highlights, and curated experiences delivered to your inbox.
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-4 pr-14 rounded-xl text-white placeholder:text-white/40 border focus:outline-none focus:border-[#C9A24A] transition-all text-sm"
            style={{
              backgroundColor: darkWarmLighter,
              borderColor: 'rgba(255,255,255,0.1)',
            }}
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-lg transition-all"
            style={{
              backgroundColor: goldAccent,
              color: darkWarm,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: goldLight,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Subscribe to newsletter"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
        <p
          className="text-xs"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          By subscribing, you agree to our{" "}
          <Link
            href="/privacy"
            className="hover:underline transition-colors"
            style={{ color: goldAccent }}
          >
            Privacy Policy
          </Link>
          . Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

function SocialLink({ social }: { social: typeof socialLinks[0] }) {
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all border"
      style={{
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,0.15)',
        color: 'rgba(255,255,255,0.6)',
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: goldAccent,
        borderColor: goldAccent,
        color: darkWarm,
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Follow us on ${social.label}`}
    >
      <social.icon className="w-5 h-5" />
    </motion.a>
  );
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="text-sm transition-colors inline-flex items-center gap-1.5 group py-1"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        <ChevronRight
          className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
          style={{ color: goldAccent }}
        />
        <span className="group-hover:text-white transition-colors">{link.label}</span>
        {link.external && (
          <ArrowUpRight
            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all"
            style={{ color: goldAccent }}
          />
        )}
      </Link>
    </li>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white relative overflow-hidden"
      role="contentinfo"
      style={{ backgroundColor: darkWarm }}
    >
      {/* Subtle top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${goldAccent}40, transparent)`,
        }}
      />

      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23C9A24A' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container>
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24 relative">
          {/* Top Section - Brand & Tagline */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
            <p
              className="text-lg lg:text-xl font-serif italic max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              "Where Gold Country History Meets Mountain Adventure"
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Contact & Social - 3 columns */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-[2px]"
                  style={{ backgroundColor: goldAccent }}
                />
                <span
                  className="text-xs uppercase tracking-[0.15em] font-semibold"
                  style={{ color: goldAccent }}
                >
                  Contact
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+15308850540"
                  className="flex items-center gap-4 text-sm transition-colors group"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
                    style={{
                      borderColor: 'rgba(255,255,255,0.15)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Phone className="w-4 h-4 group-hover:text-[#C9A24A] transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">(530) 885-0540</span>
                </a>
                <a
                  href="mailto:info@visitauburn.com"
                  className="flex items-center gap-4 text-sm transition-colors group"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
                    style={{
                      borderColor: 'rgba(255,255,255,0.15)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Mail className="w-4 h-4 group-hover:text-[#C9A24A] transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">info@visitauburn.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=601+Lincoln+Way+Auburn+CA+95603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-sm transition-colors group"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all border shrink-0"
                    style={{
                      borderColor: 'rgba(255,255,255,0.15)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <MapPin className="w-4 h-4 group-hover:text-[#C9A24A] transition-colors" />
                  </div>
                  <span className="pt-2.5 group-hover:text-white transition-colors leading-relaxed">
                    601 Lincoln Way<br />
                    Auburn, CA 95603
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} social={social} />
                ))}
              </div>
            </div>

            {/* Navigation Links - 6 columns */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h4
                      className="text-xs uppercase tracking-[0.15em] font-semibold mb-5"
                      style={{ color: goldAccent }}
                    >
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <FooterLinkItem key={link.href} link={link} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter - 3 columns */}
            <div className="lg:col-span-3">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        {/* Divider with gold accent */}
        <div
          className="h-px relative"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-px w-24 h-[2px]"
            style={{ backgroundColor: goldAccent }}
          />
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
                {legalLinks.map((link, index) => (
                  <li key={link.href} className="flex items-center gap-6">
                    <Link
                      href={link.href}
                      className="text-xs transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {link.label}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span
                        className="hidden sm:block w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p
              className="text-xs text-center lg:text-right"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              &copy; {currentYear} Visit Auburn Tourism. All rights reserved.
            </p>
          </div>
        </div>
      </Container>

      {/* Premium Bottom Bar */}
      <div
        className="border-t relative"
        style={{
          backgroundColor: darkWarmLight,
          borderColor: 'rgba(255,255,255,0.05)',
        }}
      >
        <Container>
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-center sm:text-left"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              We are committed to making our website accessible to all visitors.{" "}
              <Link
                href="/accessibility"
                className="hover:underline transition-colors"
                style={{ color: goldAccent }}
              >
                Learn more about our accessibility efforts
              </Link>
              .
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-[1px]"
                style={{ backgroundColor: goldAccent, opacity: 0.5 }}
              />
              <span
                className="text-xs font-serif italic"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Proudly serving visitors since 1848
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
