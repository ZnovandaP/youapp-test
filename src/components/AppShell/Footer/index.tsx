'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';
import Container from '@/components/Container';
import useOpenNavMenu from '@/hooks/useOpenNavMenu';
import LeftSide from './ComponentSupport/LeftSide';
import RightSide from './ComponentSupport/RightSide';

export default function Footer() {
  const { dispatch } = useOpenNavMenu();

  return (
    <footer className="bg-main p-8" onClick={() => dispatch({ type: 'close' })}>
      <Container className="p-0">
        <section className="flex flex-col lg:flex-row gap-y-8 gap-x-4 justify-between">
          <LeftSide />
          <RightSide />
        </section>
      </Container>
    </footer>

  );
}
