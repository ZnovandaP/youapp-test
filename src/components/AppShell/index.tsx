'use client';

import * as React from 'react';
import NextTopLoader from 'nextjs-toploader';
import Main from './Main';
import Navbar from '../Navbar';
import Footer from './Footer';
import Providers from '../Providers';
import { Toaster } from '../ui/toaster';

type AppShellProps = {
  children: React.ReactNode
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <Providers>
      <NextTopLoader color="#10b981" />
      <header className="inline">
        <Navbar />
      </header>

      <Main>
        {children}
      </Main>

      <Toaster />

      <Footer />
    </Providers>
  );
}
