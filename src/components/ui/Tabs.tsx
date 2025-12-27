"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context for managing tab state
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs provider");
  }
  return context;
}

// Main Tabs Container
interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  /** Callback when tab changes */
  onValueChange?: (value: string) => void;
  className?: string;
}

function Tabs({
  children,
  defaultValue,
  onValueChange,
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTabState] = useState(defaultValue);

  const setActiveTab = useCallback(
    (id: string) => {
      setActiveTabState(id);
      onValueChange?.(id);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tab List - Container for tab triggers
interface TabListProps {
  children: ReactNode;
  /** Visual style of the tab list */
  variant?: "default" | "pills" | "underline";
  className?: string;
}

const listVariantStyles: Record<string, string> = {
  default: "bg-[var(--color-neutral-100)] p-1 rounded-lg",
  pills: "gap-2",
  underline: "border-b border-[var(--color-neutral-200)] gap-0",
};

function TabList({
  children,
  variant = "default",
  className = "",
}: TabListProps) {
  const baseStyles = "flex items-center";

  return (
    <div
      className={`${baseStyles} ${listVariantStyles[variant]} ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}

// Tab Trigger - Individual tab button
interface TabTriggerProps {
  children: ReactNode;
  value: string;
  /** Disable the tab */
  disabled?: boolean;
  /** Visual variant (should match parent TabList) */
  variant?: "default" | "pills" | "underline";
  /** Icon to show before label */
  icon?: ReactNode;
  className?: string;
}

const triggerVariantStyles: Record<
  string,
  { base: string; active: string; inactive: string }
> = {
  default: {
    base: "relative px-4 py-2 text-sm font-medium rounded-md transition-colors",
    active: "text-[var(--color-text-primary)]",
    inactive: "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
  },
  pills: {
    base: "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
    active: "text-[var(--color-text-primary)]",
    inactive: "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-neutral-100)]",
  },
  underline: {
    base: "relative px-4 py-3 text-sm font-medium transition-colors -mb-px",
    active: "text-[#C9A24A]",
    inactive: "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
  },
};

function TabTrigger({
  children,
  value,
  disabled = false,
  variant = "default",
  icon,
  className = "",
}: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;
  const styles = triggerVariantStyles[variant];

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`
        ${styles.base}
        ${isActive ? styles.active : styles.inactive}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A] focus-visible:ring-offset-2
        ${className}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}

      {/* Active indicator animations */}
      {isActive && variant === "default" && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white rounded-md shadow-sm -z-10"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}

      {isActive && variant === "pills" && (
        <motion.div
          layoutId="activeTabPill"
          className="absolute inset-0 bg-[#C9A24A]/10 border border-[#C9A24A]/30 rounded-full -z-10"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}

      {isActive && variant === "underline" && (
        <motion.div
          layoutId="activeTabUnderline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A24A]"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}
    </button>
  );
}

// Tab Content - Panel that shows for each tab
interface TabContentProps {
  children: ReactNode;
  value: string;
  /** Force render even when inactive (for preserving state) */
  forceMount?: boolean;
  className?: string;
}

function TabContent({
  children,
  value,
  forceMount = false,
  className = "",
}: TabContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive && !forceMount) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={value}
          role="tabpanel"
          id={`tabpanel-${value}`}
          aria-labelledby={`tab-${value}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`focus-visible:outline-none ${className}`}
          tabIndex={0}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  type TabsProps,
  type TabListProps,
  type TabTriggerProps,
  type TabContentProps,
};
