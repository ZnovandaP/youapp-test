import * as React from 'react';
import Image from 'next/image';
import serviceIcon from '@/lib/constant/service-icon';

export default function ServiceAppList() {
  return (
    <div className="flex my-4 gap-2 overflow-x-auto overflow-y-hidden select-none max-h-[78px] scrollbar-none">
      {
            serviceIcon.map((icon) => (
              <div
                className="flex justify-start items-center snap-center flex-col gap-2 min-w-[78px] max-w-fit"
                key={icon.title}
              >
                <Image
                  src={icon.iconPath}
                  alt={icon.title}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="object-contain h-8 w-8"
                />

                <p className="text-center text-sm min-w-[78px]">
                  {icon.title}
                </p>
              </div>
            ))
          }
    </div>
  );
}
