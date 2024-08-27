import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

type ButtonProps = {
  size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'gray';
  bgColor?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  onClick?: () => void;
  outline?: boolean;
  round?: '3xl' | '2xl' | 'xl' | 'lg' | 'md';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const ButtonVariants = cva('transition duration-100', {
  variants: {
    size: {
      full: 'w-full bold text-2xl py-3',
      xl: 'w-52 font-semibold text-2xl py-3',
      lg: 'w-44 font-semibold text-xl py-3',
      md: 'w-[144px] font-medium text-xl py-2',
      sm: 'w-32 font-medium py-2',
    },
    color: {
      primary: 'text-black',
      secondary: 'text-secondary',
      white: 'text-white',
      black: 'text-black',
      gray: 'text-slate-300',
    },
    bgColor: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      white: 'bg-white',
      black: 'bg-black',
      gray: 'bg-slate-400',
    },
    round: {
      '3xl': 'rounded-3xl',
      '2xl': 'rounded-2xl',
      xl: 'rounded-xl',
      lg: 'rounded-lg',
      md: 'rounded-md',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-70',
    },
    outline: {
      true: 'bg-white border-2 border-primary text-black hover:bg-primary hover:text-white',
    },
  },
  compoundVariants: [
    { bgColor: 'white', disabled: false, outline: false, class: 'hover:bg-gray-300' },
    { bgColor: 'black', disabled: false, outline: false, class: 'hover:bg-gray-900' },
    {
      bgColor: 'primary',
      disabled: false,
      outline: false,
      class: 'hover:bg-primaryHover',
    },
    { bgColor: 'gray', disabled: false, outline: false, class: 'hover:bg-slate-500' },
    {
      bgColor: 'secondary',
      disabled: false,
      outline: false,
      class: 'hover:bg-secondaryHover',
    },
  ],
  defaultVariants: {
    size: 'lg',
    color: 'white',
    bgColor: 'primary',
    round: 'md',
    disabled: false,
    outline: false,
  },
});

const Button = forwardRef(function Button(
  {
    size,
    color,
    bgColor,
    onClick,
    outline,
    round,
    className,
    children,
    disabled,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        ButtonVariants({ size, color, bgColor, outline, round, disabled }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
