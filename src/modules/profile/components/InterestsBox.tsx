/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import * as React from 'react';
import { getProfile, updateProfile } from '@/service/profile';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RiEdit2Line } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import { LuSave } from 'react-icons/lu';
import InterestInput from '@/components/InterestInput';
import useInterests from '@/hooks/useInterests';
import { useToast } from '@/components/ui/use-toast';

export default function InterestsBox() {
  const [isEdit, setIsEdit] = React.useState(false);
  const { toast } = useToast();
  const { data: interests } = useInterests();

  const handleEditInterests = async () => {
    try {
      await updateProfile({ interests });
      toast({
        title: 'Update Interests Success',
        description: 'You have successfully updated your interests',
      });
      setIsEdit(false);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update Interests failed:',
        description: error.message,
      });
    }
  };

  return (
    <div className="bg-neutral-800 ring-1 ring-teal-600 rounded-md p-4 min-h-48 h-fit flex-1">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-base md:text-xl">
          Interests
        </h2>

        {isEdit && (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            type="button"
            title="back"
            size="icon"
            onClick={() => setIsEdit(false)}
            className="text-2xl"
          >
            <IoArrowBack />
          </Button>

          <Button
            variant="outline"
            type="button"
            title="Save Change"
            size="icon"
            onClick={handleEditInterests}
            className="text-2xl"
          >
            <LuSave />
          </Button>
        </div>
        )}

        {!isEdit && (
          <Button
            variant="ghost"
            type="button"
            title="Edit Interests"
            size="icon"
            onClick={() => setIsEdit(true)}
            className="text-2xl"
          >
            <RiEdit2Line />
          </Button>
        )}
      </div>

      <Separator className="my-4 bg-teal-600" />

      {isEdit ? (
        <InterestInput />
      )
        : (
          <InterestList />
        )}

    </div>
  );
}
function InterestList() {
  const { data, dispatch } = useInterests();

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        dispatch({ type: 'init', payload: res.data.interests });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="h-full">
      {!data || data?.length < 1 ? (
        <p className="font-semibold opacity-50">
          Add in your interest to find a better match
        </p>
      ) : (
        <div className="flex items-center gap-4 flex-wrap">
          {data?.map((item) => (
            <div
              key={item}
              className="bg-white/30 ring-1 ring-teal-600 p-2 rounded-md h-9 min-w-[100px] flex-center text-white text-sm lg:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
