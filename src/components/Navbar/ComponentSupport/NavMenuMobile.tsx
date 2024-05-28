import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Divide as Hamburger } from 'hamburger-react';
import useOpenNavMenu from '@/hooks/useOpenNavMenu';
import { useSession } from 'next-auth/react';
import NavMenu from './NavMenu';

export default function NavMenuMobile() {
  const { isOpen, dispatch } = useOpenNavMenu();
  const { status } = useSession();

  return status === 'unauthenticated' && (
    <Popover open={isOpen}>
      <PopoverTrigger>
        <div className="block md:hidden">
          <Hamburger toggle={() => dispatch({ type: 'toggle' })} size={28} toggled={isOpen} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-4 mt-3 md:hidden">
        <NavMenu />
      </PopoverContent>
    </Popover>
  );
}
