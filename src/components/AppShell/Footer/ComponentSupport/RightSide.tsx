import * as React from 'react';
import { about, help, knowledge } from '@/lib/constant/youapp-links';
import LinkYouappList from './LinkYouappList';

export default function RightSide() {
  return (
    <div className="flex flex-col gap-x-6 gap-y-8 justify-center lg:flex-row lg:w-[35%] lg:justify-end">
      <LinkYouappList links={knowledge} label="Knowledge" />
      <LinkYouappList links={about} label="About" />
      <LinkYouappList links={help} label="Help" />
    </div>
  );
}
