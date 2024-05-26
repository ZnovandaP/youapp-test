import * as React from 'react';
import downloadApps from '@/lib/constant/download-apps';
import Image from 'next/image';
import Link from 'next/link';

export default function LeftSide() {
  return (
    <div className="flex flex-col gap-6 lg:w-[65%]">
      <Link href="/" className="flex-center lg:justify-start">
        <Image
          src="/youapp-full.png"
          alt="logo youapp"
          width={150}
          height={150}
          className="h-14 w-auto object-contain"
        />
      </Link>

      <p className="text-center text-balance text-sm lg:text-wrap lg:text-base lg:text-left">
        YouApp integrates Western, Indian, and Eastern philosophies such as Astrology,
        Horoscopes (星座), Chinese Zodiac (生肖), and BaZi (八字) to offer immersive matching
        experiences, vibrant communities, exciting experiences & events,
        and connections with like-minded groups and communities.
      </p>

      <div className="flex-center flex-col md:flex-row lg:justify-start gap-4">
        {
            downloadApps.map((download) => (
              <Link
                target="_blank"
                href={download.href}
                key={`${download.title}`}
                className="block"
              >
                <Image
                  src={download.btnIconPath}
                  alt={`Download Youapp ${download.title}`}
                  width={150}
                  height={150}
                  loading="lazy"
                  className="h-11  w-auto object-top object-contain"
                />
              </Link>
            ))
          }
      </div>
    </div>
  );
}
