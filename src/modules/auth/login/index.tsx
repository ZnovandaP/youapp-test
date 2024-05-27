'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { LuArrowLeft } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import FormLogin from '../components/FormLogin';

export default function Login() {
  const { push } = useRouter();

  return (
    <section className="">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 p-0 hover:p-3 transition-all duration-300"
          onClick={() => push('/')}
        >
          <LuArrowLeft className="text-xl" />
          Back
        </Button>
      </div>

      <FormLogin />
    </section>
  );
}
