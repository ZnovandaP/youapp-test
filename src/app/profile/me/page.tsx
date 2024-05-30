import * as React from 'react';
import Profile from '@/modules/profile';
import { getProfile } from '@/service/profile';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await getProfile();

    return {
      title: `${res.data.username} | Profile`,
      description: 'Profile | Youapp Test',
    };
  } catch (error) {
    return {
      title: 'Profile | Youapp Test',
      description: 'Profile | Youapp Test',
    };
  }
}

export default async function ProfilePage() {
  return (
    <Profile />
  );
}
