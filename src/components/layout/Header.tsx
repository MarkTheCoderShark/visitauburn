"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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

interface LogoProps {
  isScrolled: boolean;
}

function Logo({ isScrolled }: LogoProps) {
  return (
    <Link href="/" className="flex items-center group" aria-label="Visit Auburn Home">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Image
          src="/images/logo.png"
          alt="Visit Auburn California"
          width={160}
          height={60}
          className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 ${
            isScrolled ? "" : "brightness-0 invert"
          }`}
          priority
        />
      </motion.div>
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
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(17,17,17,0.15)] border border-white/20 overflow-hidden z-50"
        >
          {/* Decorative top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

          <div className="p-2">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className="group block px-4 py-3.5 rounded-xl hover:bg-[var(--color-neutral-50)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-text-primary)] group-hover:text-[#C9A24A] transition-colors duration-300">
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--color-neutral-400)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  {item.description && (
                    <span className="block text-sm text-[var(--color-text-muted)] mt-1 group-hover:text-[var(--color-text-secondary)] transition-colors duration-300">
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
  isScrolled: boolean;
}

function NavLink({ item, isScrolled }: NavLinkProps) {
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
        className="group relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors duration-500"
        style={{ color: isScrolled ? '#C9A24A' : '#FFFFFF' }}
      >
        <span className="relative">
          {item.label}
          {/* Elegant underline animation */}
          <span
            className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#C9A24A] via-[#E2C58F] to-[#C9A24A] transition-all duration-300 ease-out ${
              isOpen ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </span>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <ChevronDown className="w-3.5 h-3.5 transition-colors duration-500" style={{ color: isScrolled ? '#C9A24A' : '#FFFFFF' }} />
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
          {/* Premium frosted backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-neutral-900)]/60 backdrop-blur-md z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Elegant slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white/98 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.15)] z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header with subtle border */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-neutral-100)]">
              <Logo isScrolled={true} />
              <motion.button
                onClick={onClose}
                className="p-2.5 -mr-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors rounded-xl hover:bg-[var(--color-neutral-100)]"
                aria-label="Close menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Navigation with premium styling */}
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
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
                        className="flex items-center justify-between w-full py-5 text-left font-medium text-[var(--color-text-primary)] hover:text-[#C9A24A] transition-colors duration-300"
                        aria-expanded={expandedItem === item.label}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
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
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-5 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-3 text-[var(--color-text-secondary)] hover:text-[#C9A24A] transition-colors duration-300"
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
                      className="block py-5 font-medium text-[var(--color-text-primary)] hover:text-[#C9A24A] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Premium CTA section */}
            <div className="p-6 border-t border-[var(--color-neutral-100)] bg-gradient-to-t from-[var(--color-neutral-50)] to-white">
              <Button fullWidth onClick={onClose}>
                Plan Your Trip
              </Button>
              <p className="text-xs text-center text-[var(--color-text-muted)] mt-4 tracking-wide">
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
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-white/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.1 }}
      >
        {/* Subtle gradient overlay when not scrolled for better text readability */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />
        )}

        {/* Premium accent line at top when scrolled */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            scaleX: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        />

        <Container>
          <div className="relative flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} isScrolled={isScrolled} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className={`px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all duration-500 backdrop-blur-sm ${
                    isScrolled
                      ? "border-[#C9A24A]/50 text-[#C9A24A] hover:border-[#C9A24A] hover:bg-[#C9A24A]/10"
                      : "border-white/50 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  Plan Your Trip
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2.5 -mr-2 rounded-xl transition-all duration-500 ${
                isScrolled
                  ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-neutral-100)]"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              }`}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              whileHover={{ scale: 1.05 }}
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

      {/* Spacer removed - hero should start from top for transparent header effect */}
    </>
  );
}
