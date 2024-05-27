'use client';

import * as React from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { Button } from './button';

const baseStyle = 'flex h-[51px] w-full rounded-[10px] bg-white/10 backdrop-blur-sm px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isShow, setIsShow] = React.useState(false);

    if (type === 'password') {
      return (
        <div className="relative">
          <input
            type={isShow ? 'text' : 'password'}
            className={cn(
              baseStyle,
              'pr-[60px]',
              className,
            )}
            ref={ref}
            {...props}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsShow(!isShow)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl"
          >
            {
              !isShow ? (<LuEyeOff />) : (<LuEye />)
            }
          </Button>
        </div>
      );
    }
    return (
      <input
        type={type}
        className={cn(
          baseStyle,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
