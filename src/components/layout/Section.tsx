import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'stone' | 'dark';
  padding?: 'default' | 'large' | 'small' | 'none';
}

export function Section({
  children,
  className,
  background = 'white',
  padding = 'default',
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          // Background variants
          'bg-white': background === 'white',
          'bg-cream': background === 'cream',
          'bg-stone-100': background === 'stone',
          'bg-stone-900 text-white': background === 'dark',
          // Padding variants
          'py-16 lg:py-24': padding === 'default',
          'py-24 lg:py-32': padding === 'large',
          'py-10 lg:py-14': padding === 'small',
          'py-0': padding === 'none',
        },
        className
      )}
    >
      {children}
    </section>
  );
}
