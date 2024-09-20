import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

const TextVariants = cva('leading-5', {
  variants: {
    type: {
      heading: 'text-[57px] leading-[63px] font-bold',
      title1: 'text-5xl leading-[58px] font-semibold',
      title2: 'text-f22 font-medium',
      title3: 'text-xl font-semibold',
      body1: 'text-lg font-medium',
      body2: 'text-base font-medium',
      body3: 'text-sm font-medium',
    },
  },
  defaultVariants: {},
});

type TextProps = VariantProps<typeof TextVariants> & HTMLAttributes<HTMLDivElement>;

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ type, onClick, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(TextVariants({ type }), className)}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
);

export default Text;
