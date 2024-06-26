import * as React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-full px-4',

        'sm:max-w-[600px]',

        'md:max-w-[768px]',

        'lg:max-w-[900px]',

        'xl:max-w-[1150px]',

        '2xl:max-w-[1280px]',

        className,
      )}
    >
      {children}
    </div>
  );
}
