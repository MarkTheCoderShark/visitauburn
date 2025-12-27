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

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Visit Auburn Home">
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4L4 32H36L20 4Z"
          fill="url(#goldGradientFooter)"
          opacity="0.9"
        />
        <path
          d="M20 12L10 28H30L20 12Z"
          fill="white"
          opacity="0.2"
        />
        <circle cx="20" cy="22" r="4" fill="#C9A24A" />
        <circle cx="20" cy="22" r="2" fill="white" opacity="0.6" />
        <defs>
          <linearGradient id="goldGradientFooter" x1="20" y1="4" x2="20" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9A24A" />
            <stop offset="1" stopColor="#A98436" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-white leading-none">
          Visit Auburn
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-neutral-500)] font-medium mt-0.5">
          California
        </span>
      </div>
    </Link>
  );
}

function NewsletterSignup() {
  return (
    <div className="bg-[var(--color-neutral-800)] rounded-2xl p-6 lg:p-8">
      <h3 className="text-lg font-semibold text-white mb-2">
        Stay in the Loop
      </h3>
      <p className="text-[var(--color-neutral-400)] text-sm leading-relaxed mb-5">
        Get the latest on events, seasonal highlights, and travel tips delivered to your inbox.
      </p>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 pr-12 rounded-xl bg-[var(--color-neutral-700)] text-white placeholder:text-[var(--color-neutral-500)] border border-[var(--color-neutral-600)] focus:outline-none focus:ring-2 focus:ring-[#C9A24A] focus:border-transparent transition-all text-sm"
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#C9A24A] text-[var(--color-neutral-900)] rounded-lg hover:bg-[#E2C58F] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Subscribe to newsletter"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
        <p className="text-xs text-[var(--color-neutral-500)]">
          By subscribing, you agree to our{" "}
          <Link href="/privacy" className="text-[#C9A24A] hover:underline">
            Privacy Policy
          </Link>
          . Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-neutral-900)] text-white" role="contentinfo">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16 lg:py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand & Contact - 4 columns */}
            <div className="lg:col-span-4">
              <Logo />
              <p className="mt-5 text-[var(--color-neutral-400)] text-sm leading-relaxed max-w-xs">
                Discover the heart of Gold Country. Auburn, California offers
                rich history, stunning landscapes, and unforgettable experiences
                for every traveler.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+15308850540"
                  className="flex items-center gap-3 text-sm text-[var(--color-neutral-300)] hover:text-[#C9A24A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-neutral-800)] flex items-center justify-center group-hover:bg-[#C9A24A]/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(530) 885-0540</span>
                </a>
                <a
                  href="mailto:info@visitauburn.com"
                  className="flex items-center gap-3 text-sm text-[var(--color-neutral-300)] hover:text-[#C9A24A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-neutral-800)] flex items-center justify-center group-hover:bg-[#C9A24A]/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@visitauburn.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=601+Lincoln+Way+Auburn+CA+95603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[var(--color-neutral-300)] hover:text-[#C9A24A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-neutral-800)] flex items-center justify-center group-hover:bg-[#C9A24A]/10 transition-colors shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="pt-1.5">
                    601 Lincoln Way<br />
                    Auburn, CA 95603
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mt-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-neutral-800)] flex items-center justify-center text-[var(--color-neutral-400)] hover:bg-[#C9A24A] hover:text-[var(--color-neutral-900)] transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links - 5 columns */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-4">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs uppercase tracking-[0.1em] font-semibold text-[#C9A24A] mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-[var(--color-neutral-400)] hover:text-white transition-colors inline-flex items-center gap-1 group"
                          >
                            <span>{link.label}</span>
                            {link.external && (
                              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            )}
                          </Link>
                        </li>
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

          {/* Divider */}
          <div className="h-px bg-[var(--color-neutral-800)] my-10" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-300)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="text-xs text-[var(--color-neutral-500)] text-center md:text-right">
              &copy; {currentYear} Visit Auburn Tourism. All rights reserved.
            </p>
          </div>
        </div>
      </Container>

      {/* Accessibility Statement Bar */}
      <div className="bg-[var(--color-neutral-800)] border-t border-[var(--color-neutral-700)]">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[var(--color-neutral-500)] text-center sm:text-left">
              We are committed to making our website accessible to all visitors.{" "}
              <Link
                href="/accessibility"
                className="text-[#C9A24A] hover:underline"
              >
                Learn more about our accessibility efforts
              </Link>
              .
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-[var(--color-neutral-600)]">
                Proudly serving visitors since 1848
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
