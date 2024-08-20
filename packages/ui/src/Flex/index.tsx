import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { CSSProperties, ForwardedRef, forwardRef } from 'react';

type FlexProps = {
  items?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around';
  direction?: 'row' | 'col';
  wrap?: 'wrap' | 'noWrap';
  gap?: CSSProperties['gap'];
  className?: string;
  children?: React.ReactNode;
};

const FlexVariants = cva('flex', {
  variants: {
    items: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      evenly: 'justify-evenly',
      around: 'justify-around',
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    wrap: {
      wrap: 'flex-wrap',
      noWrap: 'flex-nowrap',
    },
  },
});

const Flex = forwardRef(function Flex(
  { items, justify, direction, wrap, gap, className, children, ...props }: FlexProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={cn(FlexVariants({ items, justify, wrap, direction }), className)}
      style={{ gap }}
      {...props}
    >
      {children}
    </div>
  );
});

export default Flex;
