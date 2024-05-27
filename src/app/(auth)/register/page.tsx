import * as React from 'react';
import { Metadata } from 'next';
import Register from '@/modules/auth/register';

export const metadata: Metadata = {
  title: 'Register | Youapp Test',
  description: 'Register Page | Youapp Test',
};

export default function RegisterPage() {
  return (
    <Register />
  );
}
