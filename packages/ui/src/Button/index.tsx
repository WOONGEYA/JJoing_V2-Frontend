import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

type ButtonProps = {
  size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
  color?: 'primary' | 'black' | 'white' | 'gray';
  bgColor?: 'primary' | 'black' | 'white' | 'gray';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

const ButtonVariants = cva('', {
  variants: {
    size: {
      full: 'w-full rounded-lg py-3 font-bold',
      xl: 'w-48 rounded-lg py-3 font-bold',
      lg: 'w-40 rounded-lg py-3 font-semibold',
      md: 'w-36 rounded-lg py-3 font-semibold',
      sm: 'w-32 rounded-lg py-3 font-medium',
    },
    color: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      gray: 'text-slate-300',
    },
    bgColor: {
      white: 'bg-white',
      black: 'bg-black',
      primary: 'bg-primary',
      gray: 'bg-slate-400',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  compoundVariants: [
    { bgColor: 'white', disabled: false, class: 'hover:bg-gray-300' },
    { bgColor: 'black', disabled: false, class: 'hover:bg-gray-900' },
    { bgColor: 'primary', disabled: false, class: 'hover:bg-red' },
    { bgColor: 'gray', disabled: false, class: 'hover:bg-slate-600' },
  ],
  defaultVariants: {
    size: 'lg',
    color: 'white',
    bgColor: 'primary',
    disabled: false,
  },
});

const Button = forwardRef(function Button(
  { size, color, bgColor, onClick, className, children, disabled, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        ButtonVariants({
          size,
          color,
          bgColor,
          disabled,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
