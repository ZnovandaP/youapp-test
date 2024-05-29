/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import * as React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useInterests from '@/hooks/useInterests';
import { getProfile } from '@/service/profile';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type InterestInputProps = {
  field: any
};

export default function InterestInput({ field }: InterestInputProps) {
  const { toast } = useToast();
  const { data, dispatch } = useInterests();

  const handleDelete = (item: string) => {
    dispatch({ type: 'delete', payload: item });
  };

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        dispatch({ type: 'init', payload: res.data.interests });
      } catch (error: any) {
        toast({
          title: `Fetching Profile Error: ${error.message}`,
          variant: 'destructive',
        });
      }
    };
    fetchProfile();
  }, []);

  const handleAdd = (inputField: any) => {
    if (inputField.value) {
      dispatch({ type: 'add', payload: inputField.value });
      inputField.onChange('');
    } else {
      toast({
        title: 'Fill Interest field!!',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-center">
        <Input
          type="text"
          autoComplete="name"
          placeholder="Enter your interest"
          {...field}
          className="rounded-tr-sm rounded-br-sm"
        />
        <Button
          type="button"
          variant="outline"
          className="h-[51px]"
          onClick={() => { handleAdd(field); }}
        >
          Add
        </Button>
      </div>

      {data.length > 0 && (
      <InterestsItemWrapper>
        {/* item */}
        {data.length > 0 && data.filter(
          (category, index, self) => (self.indexOf(category) === index),
        ).map((item) => (
          <InterestsItem key={item} item={item} handleDelete={handleDelete} />
        ))}
      </InterestsItemWrapper>
      )}
    </div>
  );
}

export function InterestsItemWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-4 ring-1 ring-teal-500 bg-white/20 backdrop-blur rounded-md p-4 h-auto max-h-32 overflow-y-auto scrollbar-none ">
      {children}
    </div>
  );
}

export function InterestsItem({ item, handleDelete }:
{ item: string, handleDelete: (item: string) => void }) {
  return (
    <div
      key={item}
      className="bg-white/30 ring-1 ring-white/60 pl-2 py-2 pr-0 rounded-md h-9 min-w-[100px] flex items-center justify-between text-white"
    >
      <span className="w-[95%] pr-2">
        {item}
      </span>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => handleDelete(item)}
        className="text-2xl pr-2 pl-2 text-white flex-center"
      >
        <TiDeleteOutline />
      </Button>
    </div>
  );
}
