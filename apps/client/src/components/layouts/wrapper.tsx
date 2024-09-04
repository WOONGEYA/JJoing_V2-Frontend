import { cn } from '@jjoing/ui';
import { ForwardedRef, forwardRef } from 'react';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = forwardRef(function Wrapper(
  { children, className }: WrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <section ref={ref} className={cn('w-full mx-auto max-w-[1032px]', className)}>
      {children}
    </section>
  );
});

export default Wrapper;
