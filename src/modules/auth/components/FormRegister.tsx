'use client';

import * as React from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form, FormControl, FormField, FormItem, FormMessage,
} from '@/components/ui/form';
import { register } from '@/service/auth';
import ReminderAuth from './ReminderAuth';

const authSchema = z.object({
  email: z.string()
    .min(1, 'This field must be filled')
    .email('Email patterns is not valid'),
  username: z.string()
    .min(1, 'This field must be filled')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters'),
  password: z.string()
    .min(1, 'This field must be filled')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters'),
});

export type RegisterValueType = z.infer<typeof authSchema>;

export default function FormRegister() {
  const form = useForm<RegisterValueType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const { toast } = useToast();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const fieldIsError = Object.values(form.formState.errors).length > 0;

  async function onSubmit(values: RegisterValueType) {
    try {
      const { message } = await register(values);

      if (message === 'User has been created successfully') {
        const res = await signIn('credentials', {
          ...values,
          redirect: false,
          callbackUrl,
        });

        if (res?.ok) {
          toast({
            title: message,
            duration: 3000,
          });

          router.push('/profile/create');
        }

        if (res?.status === 401) {
          toast({
            variant: 'destructive',
            title: 'Login is failed!',
            description: 'Please check the field and try again.',
            duration: 3000,
          });
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Register is failed!',
          description: 'User already exists',
          duration: 3000,
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error: Login is failed!',
        description: `Message: ${error.message}`,
        duration: 3000,
      });
    }
  }

  return (
    <div className="pl-6 md:p-0 mt-6">
      <h1 className="text-2xl text-left md:mt-0 md:text-4xl md:text-center font-bold">
        Register
      </h1>

      <Form {...form}>
        <form className="mt-8 flex flex-col gap-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" autoComplete="username" placeholder="Enter Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter Password"
                    {...field}
                  />
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
            ) : 'Register'}
          </Button>
        </form>
      </Form>

      <ReminderAuth href="/login" label="Have an account?" labelLink="Login Here" />
    </div>
  );
}
