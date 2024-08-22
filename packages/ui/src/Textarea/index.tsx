import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

type TextareaProps = {
  color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  height?: number;
  placeholder?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaVariants = cva('', {
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

const Textarea = forwardRef(function Textarea(
  {
    color,
    height = 200,
    placeholder = '내용을 입력해주세요.',
    className,
    ...props
  }: TextareaProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cn(
        TextareaVariants({ color }),
        'border-[1.5px] flex py-2 px-3 rounded-[0.6rem] border-gray-300 focus-within:border-gray-400 transition duration-80 ease-in-out',
        className
      )}
      style={{ height }}
      ref={ref}
    >
      <textarea
        placeholder={placeholder}
        className="outline-0 placeholder:text-gray-300 text-sm resize-none size-full"
        {...props}
      />
    </div>
  );
});

export default Textarea;
