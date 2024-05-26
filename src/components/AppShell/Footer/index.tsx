import * as React from 'react';
import LeftSide from './ComponentSupport/LeftSide';
import RightSide from './ComponentSupport/RightSide';

export default function Footer() {
  return (
    <section className="flex flex-col lg:flex-row gap-y-8 gap-x-4 justify-between">
      <LeftSide />
      <RightSide />
    </section>
  );
}
