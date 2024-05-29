import NavMenuContextProvider from '@/lib/context/NavMenu';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';
import InterestsContextProvider from '@/lib/context/Interests';

type ProvidersProps = {
  children: React.ReactNode
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NavMenuContextProvider>
        <InterestsContextProvider>
          {children}
        </InterestsContextProvider>
      </NavMenuContextProvider>
    </SessionProvider>
  );
}
