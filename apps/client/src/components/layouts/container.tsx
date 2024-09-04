import { cn } from '@jjoing/ui';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <main className={cn('w-full', className)}>{children}</main>;
};

export default Container;
