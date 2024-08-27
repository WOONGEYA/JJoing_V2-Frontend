import { cn } from '@jjoing/ui';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <section className={cn('w-full', className)}>{children}</section>;
};

export default Container;
