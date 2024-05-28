import * as React from 'react';
import { Button } from '@/components/ui/button';
import { LuArrowLeft } from 'react-icons/lu';
import Link from 'next/link';

type AuthWrapperProps = {
  children: React.ReactNode
};

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <section className="">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 p-0 hover:p-3 transition-all duration-300"
          asChild
        >
          <Link href="/">
            <LuArrowLeft className="text-xl" />
            Back
          </Link>
        </Button>
      </div>

      {children}
    </section>
  );
}
