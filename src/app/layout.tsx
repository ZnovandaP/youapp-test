import * as React from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';
import AppShell from '@/components/AppShell';

const fontInter = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Youapp Test',
  description: 'Youapp test Frontend Developer building project web app with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        fontInter.variable,
        'bg-gradient-main font-inter text-neutral-200 text-pretty',
        'scrollbar-thumb-neutral-900',
      )}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
