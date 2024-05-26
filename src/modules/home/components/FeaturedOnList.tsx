import featuredOn from '@/lib/constant/featured_on';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function FeaturedOnList() {
  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <h2 className="text-2xl font-bold">
        As Featured On
      </h2>

      <div className="flex justify-center flex-wrap gap-8 px-24">
        {
          featuredOn.map((featured) => (
            <Link
              key={featured.title}
              href={featured.href}
              target="_blank"
              className="block h-9"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                width={300}
                height={300}
                loading="lazy"
                className="object-contain h-full w-auto"
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
