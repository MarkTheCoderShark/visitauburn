"use client";

import { forwardRef, type ReactNode, type HTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type CardVariant = "default" | "elevated" | "outlined" | "filled";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  variant?: CardVariant;
  /** Enable hover lift animation */
  hoverable?: boolean;
  /** Make the card clickable (adds cursor and focus styles) */
  clickable?: boolean;
  /** Add padding inside the card */
  padding?: "none" | "sm" | "md" | "lg";
  /** Aspect ratio for image cards */
  aspectRatio?: "auto" | "square" | "video" | "portrait";
  /** Callback when card is clicked */
  onClick?: () => void;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-stone-200 shadow-sm",
  elevated:
    "bg-white shadow-lg shadow-stone-200/50",
  outlined:
    "bg-transparent border-2 border-stone-200",
  filled:
    "bg-stone-50",
};

const paddingStyles: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const aspectRatioStyles: Record<string, string> = {
  auto: "",
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      hoverable = true,
      clickable = false,
      padding = "md",
      aspectRatio = "auto",
      onClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const isInteractive = hoverable || clickable || !!onClick;

    const baseStyles = `
      relative
      rounded-xl
      overflow-hidden
      transition-shadow duration-300
    `;

    const interactiveStyles = isInteractive
      ? "cursor-pointer"
      : "";

    const focusStyles = clickable || onClick
      ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A] focus-visible:ring-offset-2"
      : "";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${aspectRatioStyles[aspectRatio]}
      ${interactiveStyles}
      ${focusStyles}
      ${className}
    `
      .replace(/\s+/g, " ")
      .trim();

    const motionProps: HTMLMotionProps<"div"> = {
      whileHover: hoverable
        ? {
            y: -4,
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }
        : undefined,
      whileTap: clickable || onClick ? { scale: 0.995 } : undefined,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    };

    return (
      <motion.div
        ref={ref}
        className={combinedClassName}
        onClick={onClick}
        tabIndex={clickable || onClick ? 0 : undefined}
        role={clickable || onClick ? "button" : undefined}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        {...motionProps}
        {...(props as HTMLMotionProps<"div">)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Card subcomponents for compositional API
interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

function CardImage({ src, alt, className = "", overlay = false }: CardImageProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

function CardTitle({ children, className = "", as: Component = "h3" }: CardTitleProps) {
  return (
    <Component
      className={`text-lg font-semibold text-stone-900 leading-tight ${className}`}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={`text-sm text-stone-600 mt-1.5 line-clamp-2 ${className}`}>
      {children}
    </p>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-stone-100 ${className}`}>
      {children}
    </div>
  );
}

export {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  type CardProps,
  type CardVariant,
};
