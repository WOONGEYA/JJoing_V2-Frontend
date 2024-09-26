import { cva, VariantProps } from 'class-variance-authority';
import { cloneElement, forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import { cn } from '../utils';

const InputVariants = cva('', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      black: 'text-black',
      gray: 'text-gray-800',
    },
    border: {
      gray: 'border-gray-300 focus-within:border-gray-400',
      none: 'border-none',
    },
  },
  defaultVariants: {
    color: 'black',
    border: 'gray',
  },
});

type InputProps = VariantProps<typeof InputVariants> &
  InputHTMLAttributes<HTMLInputElement> & {
    width?: number | '100%';
    children?: ReactElement;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = 250,
      color,
      border,
      placeholder = '검색어를 입력해주세요.',
      onChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          InputVariants({ color, border }),
          'border-[1.5px] flex py-2 px-3 rounded-[0.6rem] h-11 transition duration-80 ease-in-out relative',
          className
        )}
        style={{ width }}
      >
        {children &&
          cloneElement(children, {
            className: 'absolute top-[50%] translate-y-[-50%] left-[5%]',
          })}
        <input
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className={cn(
            'outline-0 placeholder:text-gray-300 text-sm w-full',
            children && 'pl-[10%]'
          )}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
