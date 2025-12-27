"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Things To Do",
    href: "/things-to-do",
    children: [
      {
        label: "Outdoor Adventures",
        href: "/things-to-do/outdoor",
        description: "Hiking, biking, and water activities",
      },
      {
        label: "Arts & Culture",
        href: "/things-to-do/arts-culture",
        description: "Museums, galleries, and local art",
      },
      {
        label: "Food & Drink",
        href: "/things-to-do/food-drink",
        description: "Local restaurants and wine tasting",
      },
      {
        label: "Shopping",
        href: "/things-to-do/shopping",
        description: "Boutiques and local artisans",
      },
    ],
  },
  {
    label: "Plan Your Trip",
    href: "/plan",
    children: [
      {
        label: "Getting Here",
        href: "/plan/getting-here",
        description: "Directions and transportation",
      },
      {
        label: "Where to Stay",
        href: "/plan/stay",
        description: "Hotels, B&Bs, and vacation rentals",
      },
      {
        label: "Itineraries",
        href: "/plan/itineraries",
        description: "Curated trip ideas",
      },
      {
        label: "Travel Tips",
        href: "/plan/tips",
        description: "Local insights and advice",
      },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Stay", href: "/stay" },
  {
    label: "Explore Areas",
    href: "/explore",
    children: [
      {
        label: "Downtown Auburn",
        href: "/explore/downtown",
        description: "Historic Old Town district",
      },
      {
        label: "North Fork",
        href: "/explore/north-fork",
        description: "River canyons and trails",
      },
      {
        label: "Foresthill",
        href: "/explore/foresthill",
        description: "Mountain communities",
      },
      {
        label: "Gold Country",
        href: "/explore/gold-country",
        description: "Historic mining sites",
      },
    ],
  },
  { label: "About", href: "/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Visit Auburn Home">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Mountain silhouette */}
          <path
            d="M20 4L4 32H36L20 4Z"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          {/* Inner mountain detail */}
          <path
            d="M20 12L10 28H30L20 12Z"
            fill="white"
            opacity="0.3"
          />
          {/* Sun/gold accent */}
          <circle cx="20" cy="22" r="4" fill="#C9A24A" />
          <circle cx="20" cy="22" r="2" fill="white" opacity="0.6" />
          <defs>
            <linearGradient id="goldGradient" x1="20" y1="4" x2="20" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C9A24A" />
              <stop offset="1" stopColor="#A98436" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)] leading-none">
          Visit Auburn
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-medium mt-0.5">
          California
        </span>
      </div>
    </Link>
  );
}

interface DropdownMenuProps {
  items: NavChild[];
  isOpen: boolean;
}

function DropdownMenu({ items, isOpen }: DropdownMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-[0_16px_48px_rgba(17,17,17,0.12)] border border-[var(--color-neutral-100)] overflow-hidden z-50"
        >
          <div className="p-1.5">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={item.href}
                  className="group block px-4 py-3 rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-text-primary)] group-hover:text-[#C9A24A] transition-colors">
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--color-neutral-400)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  {item.description && (
                    <span className="block text-sm text-[var(--color-text-muted)] mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface NavLinkProps {
  item: NavItem;
}

function NavLink({ item }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => hasChildren && setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
      >
        <span>{item.label}</span>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        )}
      </Link>
      {hasChildren && item.children && (
        <DropdownMenu items={item.children} isOpen={isOpen} />
      )}
    </div>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[var(--color-neutral-900)]/50 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-neutral-200)]">
              <Logo />
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors rounded-lg hover:bg-[var(--color-neutral-100)]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-5">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[var(--color-neutral-100)] last:border-0"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full py-4 text-left font-medium text-[var(--color-text-primary)]"
                        aria-expanded={expandedItem === item.label}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2.5 text-[var(--color-text-secondary)] hover:text-[#C9A24A] transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-4 font-medium text-[var(--color-text-primary)] hover:text-[#C9A24A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="p-5 border-t border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)]">
              <Button fullWidth onClick={onClose}>
                Plan Your Trip
              </Button>
              <p className="text-xs text-center text-[var(--color-text-muted)] mt-3">
                Start planning your Auburn adventure
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button size="sm" variant="primary">
                Plan Your Trip
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-lg hover:bg-[var(--color-neutral-100)]"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
