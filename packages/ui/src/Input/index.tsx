import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';
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
  },
  defaultVariants: {
    color: 'black',
  },
});

type InputProps = VariantProps<typeof InputVariants> &
  InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = 250,
      color,
      placeholder = '검색어를 입력해주세요.',
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          InputVariants({ color }),
          'border-[1.5px] flex py-2 px-3 rounded-[0.6rem] h-11 border-gray-300 focus-within:border-gray-400 transition duration-80 ease-in-out',
          className
        )}
        style={{ width }}
      >
        <input
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className="outline-0 placeholder:text-gray-300 text-sm w-full"
          {...props}
        />
      </div>
    );
  }
);

export default Input;
