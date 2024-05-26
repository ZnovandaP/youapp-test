import * as React from 'react';
import YouAppMobileImage from './components/YouAppMobileImage';
import ServiceAppList from './components/ServiceAppList';
import DownloaderAppList from './components/DownloaderAppList';
import PrologueHome from './components/PrologueHome';
import FeaturedOnList from './components/FeaturedOnList';

export default function Home() {
  return (
    <section className="flex flex-col gap-16">
      <section className="flex flex-col gap-8 md:flex-row justify-between">
        <div className="flex flex-col gap-4 md:gap-8 md:w-[55%]">
          <PrologueHome />

          <ServiceAppList />

          <YouAppMobileImage className="md:hidden block" />

          <DownloaderAppList />
        </div>

        <YouAppMobileImage className="hidden md:block w-full md:w-[45%]" />
      </section>

      <FeaturedOnList />
    </section>
  );
}
