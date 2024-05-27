import Link from 'next/link';
import * as React from 'react';

type ReminderAuthProps = {
  label: string
  href: string
  labelLink: string
};

export default function ReminderAuth({ href, label, labelLink }: ReminderAuthProps) {
  return (
    <p className="mt-6 flex-center gap-2 text-center font-semibold">
      {label}
      <Link href={href} className="text-gradient-gold font-semibold">
        {labelLink}
      </Link>
    </p>
  );
}
