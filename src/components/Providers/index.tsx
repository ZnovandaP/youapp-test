import NavMenuContextProvider from '@/lib/context/NavMenu';
import * as React from 'react';

type ProvidersProps = {
  children: React.ReactNode
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <NavMenuContextProvider>
      {children}
    </NavMenuContextProvider>
  );
}
