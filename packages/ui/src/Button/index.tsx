import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils';

const buttonVariants = cva(
  'flex gap-[6px] items-center justify-center disabled:opacity-30 transition duration-150',
  {
    variants: {
      bgColor: {
        primary: 'bg-primary hover:bg-primaryHover text-white',
        secondary: 'bg-secondary hover:bg-secondaryHover text-white',
        gray: 'bg-gray-500 hover:bg-gray-600 text-white',
        borderPrimary:
          'bg-white border-[1.5px] border-primary hover:bg-primary text-gray-800 hover:text-white',
        borderSecondary:
          'bg-white border-[1.5px] border-secondary hover:bg-secondary text-gray-800 hover:text-white',
        borderGray: 'bg-white border-[1.5px] border-gray-300 text-gray-800 cursor-auto',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
      height: {
        h64: 'h-[64px]',
        h55: 'h-[55px]',
        h50: 'h-[50px]',
        h45: 'h-[45px]',
      },
    },
    defaultVariants: {
      bgColor: 'primary',
      rounded: 'lg',
      height: 'h55',
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: number | '100%';
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, bgColor, rounded, width = '100%', height, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ bgColor, rounded, height }), className)}
        style={{ width }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
