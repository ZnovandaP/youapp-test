/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { IoArrowBack } from 'react-icons/io5';
import { RiEdit2Line } from 'react-icons/ri';
import { horoscopeIcons, zodiacIcons } from '@/lib/constant/icons';
import { ResponseGetProfile, getProfile } from '@/service/profile';
import { format } from 'date-fns';
import AboutForm from './AboutForm';

type AboutBoxProps = {
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
};

export default function AboutBox({ isEdit, setIsEdit }: AboutBoxProps) {
  const [data, setData] = React.useState<null | ResponseGetProfile['data']>(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, [isEdit]);
  return (
    <div className="bg-neutral-800 ring-1 ring-teal-600 rounded-md p-4 min-h-48 h-fit flex-1">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-base md:text-xl">
          About
        </h2>

        <Button
          variant="ghost"
          type="button"
          title={isEdit ? 'Back' : 'Edit about'}
          size="icon"
          onClick={() => setIsEdit(!isEdit)}
          className="text-2xl"
        >
          {isEdit ? (<IoArrowBack />) : (<RiEdit2Line />)}
        </Button>
      </div>

      <Separator className="my-4 bg-teal-600" />

      {isEdit ? data !== null && (
      <AboutForm setIsEdit={setIsEdit} data={data} />

      )
        : (
          <AboutProfileList />
        )}

    </div>
  );
}

function AboutProfileList() {
  const [data, setData] = React.useState<null | ResponseGetProfile['data']>(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      {data !== null ? (
        <ul className="flex flex-col gap-3">
          <li className="flex gap-2 flex-wrap">
            <p className="font-bold opacity-65">
              Birthday:
            </p>
            <p className="font-medium flex gap-1 flex-wrap">
              {
              data.birthday ? format(new Date(data.birthday), 'dd / MM / yyyy') : '-'
            }
              <span>
                {data?.birthday && `(Age ${new Date().getFullYear() - new Date(data.birthday).getFullYear()})`}
              </span>
            </p>

          </li>

          <li className="flex gap-2 flex-wrap">
            <p className="font-bold opacity-65">
              Horoscope:
            </p>

            <p className="flex gap-1 items-center flex-wrap">
              {horoscopeIcons[data.horoscope] || ''}
              <span className="font-medium">
                {data.horoscope || '-'}
              </span>
            </p>
          </li>

          <li className="flex gap-2 flex-wrap">
            <p className="font-bold opacity-65">
              Zodiac:
            </p>

            <p className="flex gap-1 items-center flex-wrap">
              {zodiacIcons[data.zodiac] || ''}
              <span className="font-medium">
                {data.zodiac || '-'}
              </span>
            </p>
          </li>

          <li className="flex gap-2 flex-wrap">
            <p className="font-bold opacity-65">
              Height:
            </p>

            <p className="flex gap-1 items-center">
              {`${data.height || '-'} cm` }
            </p>
          </li>

          <li className="flex gap-2 flex-wrap">
            <p className="font-bold opacity-65">
              Weight:
            </p>

            <p className="flex gap-1 items-center">
              {`${data.weight || '-'} kg` }
            </p>
          </li>
        </ul>
      ) : (
        <p className="font-semibold opacity-50">
          Add in your your to help others know you better
        </p>
      )}
    </div>
  );
}
