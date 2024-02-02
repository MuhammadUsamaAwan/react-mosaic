import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const chipVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        success: 'border-transparent bg-success text-success-foreground',
        warning: 'border-transparent bg-warning text-warning-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof chipVariants>;

function Chip({ className, variant, ...props }: ChipProps) {
  return <div className={cn(chipVariants({ variant }), className)} {...props} />;
}

export { Chip, chipVariants };
