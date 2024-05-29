/* eslint-disable import/prefer-default-export */

'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePicker({ field }: { field: any }) {
  return (
    <FormItem className="flex flex-col">
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="calendar"
              className={cn(
                'w-full pl-3 text-left font-base h-[51px]',
                !field.value && 'text-muted-foreground',
              )}
            >
              {field.value ? (
                format(field.value, 'PPP')
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 mt-2">
          <Calendar
            className="w-full"
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}
