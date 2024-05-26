import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import downloadApps from '@/lib/constant/download-apps';

export default function DownloaderAppList() {
  return (
    <div className="flex-center md:justify-start gap-4 md:gap-8">
      {
          downloadApps.map((downloader) => (
            <div key={downloader.title} className="flex flex-col gap-2 md:gap-4">
              <Link href={downloader.href}>
                <Image
                  src={downloader.qrCodePath}
                  alt={`Download YouApp on ${downloader.title}`}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="object-contain w-[120px] h-[120px] m-auto"
                />
              </Link>

              <Link
                href={downloader.href}
              >
                <Image
                  src={downloader.btnIconPath}
                  alt={`Download YouApp on ${downloader.title}`}
                  width={300}
                  height={300}
                  className="object-contain object-top w-[120px] h-auto m-auto"
                />
              </Link>
            </div>
          ))
        }
    </div>
  );
}
