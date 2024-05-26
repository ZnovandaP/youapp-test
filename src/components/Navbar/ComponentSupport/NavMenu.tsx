import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavMenuProps = {
  className?: string
};

export default function NavMenu({ className = '' }: NavMenuProps) {
  return (
    <ul className={cn(
      'flex flex-col md:flex-row md:justify-end md:items-center gap-4',
      className,
    )}
    >
      <li>
        <Button variant="outline" className="w-full" size="md">
          Register
        </Button>
      </li>
      <li>
        <Button variant="fancy" className="w-full" size="md">
          Login
        </Button>
      </li>
    </ul>
  );
}
