import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

type ButtonProps = {
  size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'gray';
  bgColor?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const ButtonVariants = cva('rounded-md py-3 transition duration-100', {
  variants: {
    size: {
      full: 'w-full bold',
      xl: 'w-64 font-semibold',
      lg: 'w-40 font-semibold',
      md: 'w-36 font-semibold',
      sm: 'w-32 font-medium',
    },
    color: {
      primary: 'text-primary',
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
    disabled: {
      true: 'cursor-not-allowed opacity-70',
    },
  },
  compoundVariants: [
    { bgColor: 'white', disabled: false, class: 'hover:bg-gray-300' },
    { bgColor: 'black', disabled: false, class: 'hover:bg-gray-900' },
    { bgColor: 'primary', disabled: false, class: 'hover:bg-primaryHover' },
    { bgColor: 'gray', disabled: false, class: 'hover:bg-slate-500' },
    { bgColor: 'secondary', disabled: false, class: 'hover:bg-secondaryHover' },
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
      className={cn(ButtonVariants({ size, color, bgColor, disabled }), className)}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
