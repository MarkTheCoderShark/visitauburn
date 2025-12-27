import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        background: "#FBFBF8",
        foreground: "#111111",

        // Text colors
        text: {
          primary: "#111111",
          secondary: "#333333",
          muted: "#666666",
        },

        // Accent colors
        accent: {
          DEFAULT: "#C9A24A",
          50: "#FCF8EE",
          100: "#F7EDDA",
          200: "#EDDAB5",
          300: "#E2C58F",
          400: "#D5B36A",
          500: "#C9A24A",
          600: "#A98436",
          700: "#7F6328",
          800: "#55421B",
          900: "#2B210E",
        },

        // Secondary (sage) colors
        secondary: {
          DEFAULT: "#6F7F68",
          50: "#F3F5F2",
          100: "#E4E9E2",
          200: "#C9D3C5",
          300: "#AEBDA8",
          400: "#8F9E88",
          500: "#6F7F68",
          600: "#5A6754",
          700: "#444E40",
          800: "#2E352B",
          900: "#171B15",
        },

        // Neutral grays
        neutral: {
          50: "#FBFBF8",
          100: "#F5F5F2",
          200: "#EBEBEA",
          300: "#DDDDD9",
          400: "#B5B5B0",
          500: "#8A8A85",
          600: "#666663",
          700: "#4D4D4A",
          800: "#333330",
          900: "#111111",
        },
      },

      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Display sizes for hero text
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],

        // Heading sizes
        "heading-xl": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", letterSpacing: "0" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", letterSpacing: "0" }],

        // Body sizes
        "body-xl": ["1.25rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],

        // Caption and label sizes
        caption: ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        label: ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.05em" }],
      },

      spacing: {
        // Section spacing
        "section-sm": "3rem",
        "section-md": "5rem",
        "section-lg": "8rem",
        "section-xl": "10rem",

        // Container padding
        "container-x": "1.5rem",
        "container-x-lg": "2.5rem",
      },

      maxWidth: {
        container: "1280px",
        content: "720px",
        prose: "65ch",
      },

      borderRadius: {
        soft: "0.375rem",
        medium: "0.5rem",
        large: "1rem",
      },

      boxShadow: {
        subtle: "0 1px 2px rgba(17, 17, 17, 0.04)",
        soft: "0 4px 12px rgba(17, 17, 17, 0.06)",
        medium: "0 8px 24px rgba(17, 17, 17, 0.08)",
        elevated: "0 16px 48px rgba(17, 17, 17, 0.12)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "400ms",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
