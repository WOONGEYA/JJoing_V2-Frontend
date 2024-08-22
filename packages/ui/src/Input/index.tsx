import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

type InputProps = {
  width?: number;
  color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  placeholder?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputVariants = cva('', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      black: 'text-black',
      gray: 'text-gray-500',
    },
  },
  defaultVariants: {
    color: 'black',
  },
});

const Input = forwardRef(function Input(
  {
    width = 250,
    color,
    placeholder = '검색어를 입력해주세요.',
    className,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const Style = { width };

  return (
    <div
      className={cn(
        InputVariants({ color }),
        'border-[1.5px] flex py-2 px-3 rounded-[0.6rem] h-10 border-gray-300 focus-within:border-gray-400 transition duration-80 ease-in-out',
        className
      )}
      style={Style}
      ref={ref}
    >
      <input
        placeholder={placeholder}
        className="outline-0 placeholder:text-gray-300 text-sm"
        style={{ width }}
        {...props}
      />
    </div>
  );
});

export default Input;
