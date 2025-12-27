import { type ReactNode, type HTMLAttributes } from "react";

// Include aliases for backwards compatibility
type ContainerSize = "narrow" | "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  /** Remove horizontal padding */
  noPadding?: boolean;
  /** Center the container */
  centered?: boolean;
  /** HTML element to render as */
  as?: "div" | "section" | "article" | "main" | "aside";
}

const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-2xl",    // 672px - for focused content
  sm: "max-w-3xl",        // 768px
  md: "max-w-5xl",        // 1024px
  lg: "max-w-6xl",        // 1152px
  xl: "max-w-7xl",        // 1280px
  full: "max-w-full",
};

function Container({
  children,
  size = "xl",
  noPadding = false,
  centered = true,
  as: Component = "div",
  className = "",
  ...props
}: ContainerProps) {
  const baseStyles = "w-full";

  const paddingStyles = noPadding
    ? ""
    : "px-4 sm:px-6 lg:px-8";

  const centerStyles = centered ? "mx-auto" : "";

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${paddingStyles}
    ${centerStyles}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}

export { Container, type ContainerProps, type ContainerSize };
