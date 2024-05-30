'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  FormField, FormItem, FormControl, FormMessage, Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ImSpinner9 } from 'react-icons/im';
import { useToast } from '@/components/ui/use-toast';
import ReminderAuth from './ReminderAuth';

const authSchema = z.object({
  emailOrUsername: z.string()
    .min(1, 'This field must be filled'),
  password: z.string()
    .min(1, 'This field must be filled')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters'),
});

export type LoginValueType = z.infer<typeof authSchema>;

export default function FormLogin() {
  const form = useForm<LoginValueType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const { toast } = useToast();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const fieldIsError = Object.values(form.formState.errors).length > 0;

  async function onSubmit(values: LoginValueType) {
    const body = {
      email: '',
      username: '',
      password: values.password,
    };
    if (values.emailOrUsername.includes('@')) {
      body.email = values.emailOrUsername;
    } else {
      body.username = values.emailOrUsername;
    }

    try {
      const res = await signIn('credentials', {
        ...body,
        redirect: false,
        callbackUrl,
      });

      if (res?.ok) {
        toast({
          title: 'Login is success',
          description: `Welcome back!! ${body.username || body.email}`,
        });
        router.push('/profile/me');
      }

      if (res?.status === 401) {
        toast({
          variant: 'destructive',
          title: 'Login is failed!',
          description: 'Please check the field and try again.',
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error: Login is failed!',
        description: `Message: ${error.message}`,
      });
    }
  }

  return (
    <div className="pl-6 md:p-0 mt-6">
      <h1 className="text-2xl text-left md:mt-0 md:text-4xl md:text-center font-bold">
        Login
      </h1>

      <Form {...form}>
        <form className="mt-8 flex flex-col gap-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="emailOrUsername"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" autoComplete="username" placeholder="Enter Email/Username" {...field} />
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
            ) : 'Login'}
          </Button>
        </form>
      </Form>

      <ReminderAuth href="/register" label="Have an account?" labelLink="Register Here" />
    </div>
  );
}
