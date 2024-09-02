import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../utils';

type TextProps = {
  size?: 'xxl' | 'xl' | 'x' | 'lg' | 'md' | 'sm' | 'xs';
  color?: 'white' | 'black' | 'primary' | 'secondary' | 'gray400' | 'gray' | 'gray800';
  weight?: 'bold' | 'semibold' | 'medium' | 'light';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const TextVariants = cva('', {
  variants: {
    size: {
      xxl: 'text-[57px] leading-[63px]',
      xl: 'text-5xl leading-[58px]',
      x: 'text-1.5xl',
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
      gray400: 'text-gray-400',
      gray: 'text-slate-600',
      gray800: 'text-slate-800',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      light: 'font-light',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'gray800',
    weight: 'medium',
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
