import * as React from 'react';
import CreateProfile from '@/modules/profile/create-profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Profile | Youapp Test',
  description: 'Create Profile Page | Youapp Test',
};

export default function CreateProfilePage() {
  return (
    <section className="h-[75dvh] lg:h-[85dvh] flex-center">
      <CreateProfile />
    </section>
  );
}
