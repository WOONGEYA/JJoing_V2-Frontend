import { cva, VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../utils';

const SpinnerVariants = cva(
  'animate-spin rounded-full border-gray-300 border-[3px] border-t-primary',
  {
    variants: {
      size: {
        lg: 'size-12',
        md: 'size-10',
        sm: 'size-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

type SpinnerProps = VariantProps<typeof SpinnerVariants> & HTMLAttributes<HTMLDivElement>;

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className={cn(SpinnerVariants({ size }))} />
    </div>
  );
};

export default Spinner;
