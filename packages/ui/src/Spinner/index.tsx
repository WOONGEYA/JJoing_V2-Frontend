import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { Flex } from '..';

type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm';
};

const SpinnerVariants = cva(
  'animate-spin rounded-full border-solid border-gray-500 border-t-primary',
  {
    variants: {
      size: {
        lg: 'w-16 h-16 border-8',
        md: 'w-12 h-12 border-[6px]',
        sm: 'w-8 h-8 border-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <Flex justify="center" items="center">
      <div className={cn(SpinnerVariants({ size }))} />
    </Flex>
  );
};

export default Spinner;
