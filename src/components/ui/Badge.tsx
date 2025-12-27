import { type ReactNode, type HTMLAttributes } from "react";

type BadgeVariant = "default" | "sage" | "gold" | "terracotta" | "outline";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Add dot indicator before text */
  withDot?: boolean;
  /** Make badge removable with X button */
  removable?: boolean;
  /** Callback when remove button is clicked */
  onRemove?: () => void;
  /** Icon to display before text */
  icon?: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-stone-100 text-stone-700",
  sage: "bg-[#6F7F68]/15 text-[#566052]",
  gold: "bg-[#C9A24A]/15 text-[#A88A3D]",
  terracotta: "bg-[#C17A5E]/15 text-[#A86650]",
  outline: "bg-transparent border border-stone-300 text-stone-600",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-sm",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-stone-500",
  sage: "bg-[#6F7F68]",
  gold: "bg-[#C9A24A]",
  terracotta: "bg-[#C17A5E]",
  outline: "bg-stone-400",
};

function Badge({
  children,
  variant = "default",
  size = "md",
  withDot = false,
  removable = false,
  onRemove,
  icon,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles = `
    inline-flex items-center
    font-medium
    rounded-full
    whitespace-nowrap
    transition-colors duration-200
  `;

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <span className={combinedClassName} {...props}>
      {withDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="mr-1.5 shrink-0">{icon}</span>}
      {children}
      {removable && onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1.5 -mr-0.5 p-0.5 rounded-full hover:bg-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#C9A24A]"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}

export { Badge, type BadgeProps, type BadgeVariant, type BadgeSize };
