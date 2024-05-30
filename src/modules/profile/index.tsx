'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { ResponseGetProfile, getProfile } from '@/service/profile';
import { useToast } from '@/components/ui/use-toast';
import Hero from './components/Hero';
import InterestsBox from './components/InterestsBox';
import AboutBox from './components/AboutBox';

export default function Profile() {
  const [isEditAbout, setIsEditAbout] = React.useState(false);
  const [data, setData] = React.useState({} as ResponseGetProfile['data']);
  const { toast } = useToast();

  React.useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await getProfile();
        setData(res.data);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error fetching profile',
          description: 'Please try again later',
        });
      }
    }
    fetchProfile();
  }, [isEditAbout]);

  return (
    <section className="mt-2 ">
      <Hero data={data} />

      <div className="flex flex-col mt-8 lg:flex-row justify-between gap-8">
        <InterestsBox />
        <AboutBox isEdit={isEditAbout} setIsEdit={setIsEditAbout} />
      </div>
    </section>
  );
}
