import { cn } from '@jjoing/ui';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={cn('w-full mx-auto max-w-[1032px]', className)}>
      {children}
    </section>
  );
};

export default Wrapper;
