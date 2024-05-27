import * as React from 'react';
import Login from '@/modules/auth/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Youapp Test',
  description: 'Login Page | Youapp Test',
};

export default function LoginPage() {
  return (
    <Login />
  );
}
