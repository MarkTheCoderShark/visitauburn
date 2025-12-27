"use client";

import { type ReactNode, type HTMLAttributes } from "react";
import { motion, type Variants } from "framer-motion";

// Include aliases for backwards compatibility
type SectionSpacing = "none" | "small" | "sm" | "default" | "md" | "large" | "lg" | "xl";
type SectionBackground = "transparent" | "light" | "cream" | "dark" | "stone";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Vertical padding (alias for spacing) */
  padding?: SectionSpacing;
  /** Vertical padding */
  spacing?: SectionSpacing;
  /** Background color preset */
  background?: SectionBackground;
  /** Add border at bottom */
  bordered?: boolean;
  /** Animate on scroll into view */
  animate?: boolean;
  /** Full viewport height */
  fullHeight?: boolean;
}

// Normalize spacing values (support aliases)
const normalizeSpacing = (value: SectionSpacing): string => {
  const spacingMap: Record<SectionSpacing, string> = {
    none: "py-0",
    small: "py-8 md:py-12",
    sm: "py-8 md:py-12",
    default: "py-12 md:py-16 lg:py-20",
    md: "py-12 md:py-16 lg:py-20",
    large: "py-16 md:py-24 lg:py-32",
    lg: "py-16 md:py-24 lg:py-32",
    xl: "py-24 md:py-32 lg:py-40",
  };
  return spacingMap[value];
};

// Normalize background values (support aliases)
const normalizeBackground = (value: SectionBackground): string => {
  const backgroundMap: Record<SectionBackground, string> = {
    transparent: "bg-transparent",
    light: "bg-[var(--color-neutral-50)]",
    stone: "bg-[var(--color-neutral-100)]",
    cream: "bg-[var(--color-background)]",
    dark: "bg-[var(--color-neutral-900)] text-white",
  };
  return backgroundMap[value];
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function Section({
  children,
  padding,
  spacing = "md",
  background = "transparent",
  bordered = false,
  animate = true,
  fullHeight = false,
  className = "",
  ...props
}: SectionProps) {
  // Support both 'padding' and 'spacing' props (padding takes priority as alias)
  const effectiveSpacing = padding ?? spacing;

  const baseStyles = "relative w-full";
  const spacingStyles = normalizeSpacing(effectiveSpacing);
  const backgroundStyles = normalizeBackground(background);
  const borderStyles = bordered ? "border-b border-[var(--color-neutral-200)]" : "";
  const heightStyles = fullHeight ? "min-h-screen flex flex-col justify-center" : "";

  const combinedClassName = `
    ${baseStyles}
    ${spacingStyles}
    ${backgroundStyles}
    ${borderStyles}
    ${heightStyles}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  if (animate) {
    return (
      <motion.section
        className={combinedClassName}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section className={combinedClassName} {...props}>
      {children}
    </section>
  );
}

export { Section, type SectionProps, type SectionSpacing, type SectionBackground };
