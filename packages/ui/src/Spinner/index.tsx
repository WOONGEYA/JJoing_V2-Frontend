import { cva } from 'class-variance-authority';
import { cn } from '..';

type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm';
};

const SpinnerVariants = cva(
  'animate-spin rounded-full border-8 border-solid border-gray-500 border-t-primary',
  {
    variants: {
      size: {
        lg: 'w-16 h-16',
        md: 'w-12 h-12',
        sm: 'w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Spinner = ({ size = 'md' }: SpinnerProps) => {
  return <div className={cn(SpinnerVariants({ size }))} />;
};

export default Spinner;
