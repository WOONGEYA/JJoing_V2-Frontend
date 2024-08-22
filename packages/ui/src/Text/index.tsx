import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

type TextProps = {
  size?: 'xl' | 'x' | 'lg' | 'md' | 'sm' | 'xs';
  color?: 'white' | 'black' | 'primary' | 'secondary' | 'gray';
  weight?: 'bold' | 'semibold' | 'medium' | 'light';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const TextVariants = cva('', {
  variants: {
    size: {
      xl: 'text-3xl leading-[22px]',
      x: 'text-2xl',
      lg: 'text-xl',
      md: 'text-lg',
      sm: 'text-base',
      xs: 'text-sm',
    },
    color: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      secondary: 'text-secondary',
      gray: 'text-slate-400',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      light: 'font-light',
    },
    defaultVariants: {
      size: 'md',
      color: 'black',
      weight: 'medium',
    },
  },
});

const Text = forwardRef(function Text(
  { size, color, weight, onClick, className, children, ...props }: TextProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <span
      ref={ref}
      {...props}
      className={cn(TextVariants({ size, color, weight }), className)}
      onClick={onClick}
    >
      {children}
    </span>
  );
});

export default Text;
