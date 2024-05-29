'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  FormField, FormItem, FormControl, FormMessage, Form,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ImSpinner9 } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@/components/ui/DatePicker';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useInterest from '@/hooks/useInterests';
import InterestInput from '@/components/InterestInput';
import { createProfile } from '@/service/profile';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const createProfileSchema = z.object({
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
  interests: z.string(),
});

export type CreateProfileValues = z.infer<typeof createProfileSchema>;

export default function FormCreateProfile() {
  const { data } = useInterest();
  const { toast } = useToast();
  const { push } = useRouter();
  const form = useForm<CreateProfileValues>({
    resolver: zodResolver(createProfileSchema),
    defaultValues: {
      name: '',
      birthday: new Date(),
      height: '',
      weight: '',
      interests: '',
    },
  });

  async function onSubmit(values: CreateProfileValues) {
    const body = {
      name: values.name,
      birthday: new Date(values.birthday).toISOString(),
      height: parseInt(values.height, 10),
      weight: parseInt(values.weight, 10),
      interests: data,
    };

    try {
      const res = await createProfile(body);
      toast({
        variant: 'default',
        title: 'Create Profile Error',
        description: `${res.message}, Welcome to Youapp ${res.data.name}!!`,
      });

      push(`/profile/${res.data.name}`);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Create Profile Error',
        description: `Message: ${error.message}`,
      });
    }
  }

  const fieldIsError = Object.values(form.formState.errors).length > 0;

  return (
    <div className="pl-6 md:p-0 mt-6">
      <h1 className="text-2xl text-left md:mt-0 md:text-4xl md:text-center font-bold">
        Create Profile
      </h1>
      <Form {...form}>
        <form className="mt-8 flex flex-col gap-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" autoComplete="name" placeholder="Enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    autoComplete="cc-number"
                    placeholder="Enter height body (Cm)"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your body height in centimeters (Cm)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    autoComplete="cc-number"
                    placeholder="Enter weight body (Kg)"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your body weight in kilogram (Kg)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InterestInput field={field} />
                </FormControl>
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
            ) : 'Create Profile'}
          </Button>
        </form>
      </Form>
    </div>

  );
}
