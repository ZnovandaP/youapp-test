import * as React from 'react';
import {
  Form, FormControl, FormField, FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

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

export type AuthValueType = z.infer<typeof authSchema>;

type FormAuthProps = {
  handleSubmit: (values: AuthValueType) => void
  labelButton?: string
};

export default function FormAuth({ handleSubmit, labelButton = 'Login' }: FormAuthProps) {
  const form = useForm<AuthValueType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const fieldIsError = Object.values(form.formState.errors).length > 0;

  function onSubmit(values: AuthValueType) {
    handleSubmit(values);
  }

  return (
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
          {labelButton}
        </Button>
      </form>
    </Form>
  );
}
