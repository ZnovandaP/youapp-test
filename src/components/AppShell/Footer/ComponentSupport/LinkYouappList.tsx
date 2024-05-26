import Link from 'next/link';
import * as React from 'react';

type LinkYouappListProps = {
  label: string;
  links: { label: string; href: string }[];
};

export default function LinkYouappList({ links, label }: LinkYouappListProps) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-3">
      <h3 className="font-bold">
        {label}
      </h3>

      <ul className="flex flex-col items-center lg:items-start gap-2">
        {
          links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} target="blank">
                {link.label}
              </Link>
            </li>
          ))
            }
      </ul>
    </div>
  );
}
