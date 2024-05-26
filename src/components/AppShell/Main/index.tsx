'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';
import Container from '@/components/Container';
import useOpenNavMenu from '@/hooks/useOpenNavMenu';

type MainProps = {
  children: React.ReactNode
};

export default function Main({ children }: MainProps) {
  const { dispatch } = useOpenNavMenu();

  return (
    <main className="min-h-[80dvh] pb-8" onClick={() => dispatch({ type: 'close' })}>
      <Container>
        {children}
      </Container>
    </main>
  );
}
