import * as React from 'react';
import Image from 'next/image';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="h-[75dvh] lg:h-[85dvh] flex-center">
      <div className="flex-center w-full gap-4">
        <div className="p-0 md:px-8 lg:p-6 rounded-lg lg:ring-1 lg:ring-teal-400/40 lg:bg-white/10 lg:backdrop-blur-xl w-full lg:w-[50%]">
          {children}
        </div>
        <Image
          src="/lattest_mobile.png"
          alt="Youapp Application"
          priority
          width={1000}
          height={1000}
          className="hidden lg:block object-center object-contain lg:w-[50%]"
        />

      </div>
    </section>
  );
}
