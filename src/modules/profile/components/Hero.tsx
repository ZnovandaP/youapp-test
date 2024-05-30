/* eslint-disable @typescript-eslint/dot-notation */
import * as React from 'react';
import generateImageUserAvatar from '@/lib/utils/generate-avatar-image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { horoscopeIcons, zodiacIcons } from '@/lib/constant/icons';
import { ResponseGetProfile } from '@/service/profile';
import { Badge } from '../../../components/ui/badge';

type HeroProps = {
  data: ResponseGetProfile['data']
};

export default function Hero({ data }: HeroProps) {
  return (
    <div className="w-full h-60 md:h-72 bg-main rounded-lg relative">
      <Image
        src="/aurora.webp"
        alt="Background Aurora"
        priority
        width={1920}
        height={1024}
        className="object-cover w-full h-full object-center rounded-lg"
      />
      <div
        className="w-full h-full bg-gradient-to-t from-main/70 from-30% via-white/70 to-transparent rounded-lg absolute top-0 mix-blend-multiply"
      />

      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-wrap justify-between items-center gap-y-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Avatar>
            <AvatarImage
              src={generateImageUserAvatar(data?.username || data?.email)}
              alt={`Avatar user: ${data?.username || data?.email}`}
            />
            <AvatarFallback>
              {data?.username || 'xx'
        || data?.email || 'xx'}
            </AvatarFallback>
          </Avatar>
          <div className="flex text-sm font-semibold md:text-base flex-col">
            <p>
              {`@${data?.username || 'username'}`}
            </p>
            <p>
              {data?.email || 'emailuser@mail.com'}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="default">
            {horoscopeIcons[data?.horoscope] || ''}
            {data?.horoscope || '-'}
          </Badge>
          <Badge variant="default">
            {zodiacIcons[data?.zodiac] || ''}
            {data?.zodiac || '-'}
          </Badge>
        </div>
      </div>
    </div>
  );
}
