import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../utils';

type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm';
} & HTMLAttributes<HTMLDivElement>;

const SpinnerVariants = cva(
  'animate-spin rounded-full border-solid border-gray-300 border-2 border-t-primary',
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

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className={cn(SpinnerVariants({ size }))} />
    </div>
  );
};

export default Spinner;
