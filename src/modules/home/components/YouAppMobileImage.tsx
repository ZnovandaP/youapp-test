import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type YouAppMobileImageProps = {
  className: string
};

export default function YouAppMobileImage({ className }: YouAppMobileImageProps) {
  return (
    <div className={cn(
      className,
    )}
    >
      <Image
        src="/lattest_mobile.png"
        alt="Youapp Application"
        width={1024}
        height={2100}
        priority
        className="object-contain object-top w-auto h-auto md:max-w-full"
      />
    </div>
  );
}
