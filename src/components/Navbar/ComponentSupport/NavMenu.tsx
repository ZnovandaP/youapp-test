'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn, useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import generateImageUserAvatar from '@/lib/utils/generate-avatar-image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type NavMenuProps = {
  className?: string
};

export default function NavMenu({ className = '' }: NavMenuProps) {
  const { status, data } = useSession();

  return status === 'authenticated' ? (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src={generateImageUserAvatar(data?.user?.username || data?.user?.email)}
            alt={`Avatar user: ${data?.user?.username || data?.user?.email}`}
          />
          <AvatarFallback>
            {data?.user?.username.slice(0, 2).toUpperCase()
        || data?.user?.email.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-4 mt-3 flex flex-col gap-4">
        <Button
          variant="fancy"
          className="w-full"
          size="md"
          asChild
        >
          <Link href={`/profile/${data?.user?.username}`}>
            Profile
          </Link>
        </Button>

        <Button
          className="w-full"
          type="button"
          variant="destructive"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </PopoverContent>
    </Popover>

  ) : (
    <ul className={cn(
      'flex flex-col md:flex-row md:justify-end md:items-center gap-4',
      className,
    )}
    >
      <li>
        <Button
          variant="outline"
          className="w-full"
          size="md"
          asChild
        >
          <Link href="/register">
            Register
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant="fancy"
          onClick={() => signIn()}
          className="w-full"
          size="md"
        >
          Login
        </Button>
      </li>
    </ul>
  );
}
