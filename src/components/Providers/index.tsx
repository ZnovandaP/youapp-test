import NavMenuContextProvider from '@/lib/context/NavMenu';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

type ProvidersProps = {
  children: React.ReactNode
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NavMenuContextProvider>
        {children}
      </NavMenuContextProvider>
    </SessionProvider>
  );
}
