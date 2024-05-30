'use client';

import * as React from 'react';
import { DatePicker } from '@/components/ui/DatePicker';
import {
  FormField, FormItem, FormControl, FormMessage, Form,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ImSpinner9 } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResponseGetProfile, updateProfile } from '@/service/profile';
import { useToast } from '@/components/ui/use-toast';

const editAboutSchema = z.object({
  name: z.string()
    .min(1, 'This field must be filled')
    .max(50, 'Name must be less than 50 characters'),
  birthday: z.date({
    required_error: 'A date of birth is required.',
  }),
  height: z.string({
    required_error: 'Height is required.',
  })
    .max(3, 'Height must be less than 3 characters'),
  weight: z.string({
    required_error: 'Weight is required.',
  })
    .max(3, 'Weight must be less than 3 characters'),
});

type EditAboutValues = z.infer<typeof editAboutSchema>;

type AboutFormProps = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: ResponseGetProfile['data'];
};

export default function AboutForm({ setIsEdit, data }: AboutFormProps) {
  const { toast } = useToast();

  const form = useForm<EditAboutValues>({
    resolver: zodResolver(editAboutSchema),
    defaultValues: {
      name: data.name,
      birthday: new Date(data.birthday),
      height: data.height.toString(),
      weight: data.weight.toString(),
    },
  });

  const fieldIsError = Object.values(form.formState.errors).length > 0;

  const handleUpdateAbout = async (values: EditAboutValues) => {
    try {
      await updateProfile({
        name: values.name,
        birthday: new Date(values.birthday).toISOString(),
        height: parseInt(values.height, 10),
        weight: parseInt(values.weight, 10),
      });

      toast({
        variant: 'default',
        title: 'Update About Success',
      });
      setIsEdit(false);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update About Error:',
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form className="mt-8 flex flex-col gap-y-8" onSubmit={form.handleSubmit(handleUpdateAbout)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center  w-full">
                <FormLabel className="w-[120px] mr-4 text-nowrap text-base opacity-70">
                  Display name:
                </FormLabel>
                <FormControl className="w-[100%]">
                  <Input type="text" autoComplete="name" placeholder="Enter name" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="min-w-[120px] text-nowrap text-base opacity-70">
                  Birthday:
                </FormLabel>
                <DatePicker field={field} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="horoscope"
          render={() => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="min-w-[120px] text-nowrap text-base opacity-70">
                  Horoscope:
                </FormLabel>
                <FormControl className="w-full">
                  <Input type="text" disabled value={data.horoscope} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="zodiac"
          render={() => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="min-w-[120px] text-nowrap text-base opacity-70">
                  Zodiac:
                </FormLabel>
                <FormControl className="w-full">
                  <Input type="text" disabled value={data.zodiac} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="min-w-[120px] text-nowrap text-base opacity-70">
                  Height:
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    autoComplete="cc-number"
                    placeholder="Enter height body (Cm)"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="min-w-[120px] text-nowrap text-base opacity-70">
                  Weight:
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    autoComplete="cc-number"
                    placeholder="Enter weight body (Kg)"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="fancy"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting || fieldIsError}
        >
          {form.formState.isSubmitting ? (
            <ImSpinner9 className="animate-spin text-2xl text-white" />
          ) : 'Save & Updpate'}
        </Button>
      </form>
    </Form>
  );
}
