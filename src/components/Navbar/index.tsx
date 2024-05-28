'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Container from '../Container';
import NavMenuMobile from './ComponentSupport/NavMenuMobile';
import NavMenu from './ComponentSupport/NavMenu';

const scrollYPositionActive = 40;

export default function Navbar() {
  const [navBgIsActive, setNavBgIsActive] = React.useState(false);
  const pathname = usePathname();

  const hideNavbar = () => {
    const path = ['/login', '/register'];

    return path.includes(pathname);
  };

  const changeStyleNavbarScroll = () => {
    if (window.scrollY > scrollYPositionActive) {
      setNavBgIsActive(true);
    } else {
      setNavBgIsActive(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changeStyleNavbarScroll);

    return () => {
      window.removeEventListener('scroll', changeStyleNavbarScroll);
    };
  }, []);

  return !hideNavbar() ? (
    <nav className={cn(
      'sticky top-0 z-50 py-4 transition-all duration-300',
      navBgIsActive && 'bg-white/10 backdrop-blur-md border-b border-teal-500',
    )}
    >
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/youapp-full.png"
            alt="logo youapp"
            width={150}
            height={150}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <NavMenuMobile />

        <NavMenu className="hidden md:flex" />
      </Container>
    </nav>
  )
    : null;
}
