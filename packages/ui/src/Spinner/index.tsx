import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { Flex } from '..';

type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm';
};

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
    <Flex justify="center" items="center">
      <div className={cn(SpinnerVariants({ size }))} />
    </Flex>
  );
};

export default Spinner;
