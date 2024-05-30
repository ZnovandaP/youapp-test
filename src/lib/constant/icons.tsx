import * as React from 'react';

import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,

} from 'react-icons/tb';

import {
  GiBoar,
  GiCow,
  GiGoat,
  GiHorseHead,
  GiMonkey,
  GiPig,
  GiRabbit,
  GiRat,
  GiRooster,
  GiSittingDog,
  GiSnake,
  GiSpikedDragonHead,
  GiTigerHead,
} from 'react-icons/gi';

export type Icons = {
  [key: string]: React.JSX.Element | string
};

export const horoscopeIcons: Icons = {
  Aquarius: <TbZodiacAquarius className="text-xl text-white" />,
  Capricorn: <TbZodiacCapricorn className="text-xl text-white" />,
  Aries: <TbZodiacAries className="text-xl text-white" />,
  Leo: <TbZodiacLeo className="text-xl text-white" />,
  Virgo: <TbZodiacVirgo className="text-xl text-white" />,
  Cancer: <TbZodiacCancer className="text-xl text-white" />,
  Pisces: <TbZodiacPisces className="text-xl text-white" />,
  Sagittarius: <TbZodiacSagittarius className="text-xl text-white" />,
  Libra: <TbZodiacLibra className="text-xl text-white" />,
  Gemini: <TbZodiacGemini className="text-xl text-white" />,
  Scorpio: <TbZodiacScorpio className="text-xl text-white" />,
  Taurus: <TbZodiacTaurus className="text-xl text-white" />,
};

export const zodiacIcons: Icons = {
  Monkey: <GiMonkey className="text-xl text-white" />,
  Goat: <GiGoat className="text-xl text-white" />,
  Horse: <GiHorseHead className="text-xl text-white" />,
  Snake: <GiSnake className="text-xl text-white" />,
  Dragon: <GiSpikedDragonHead className="text-xl text-white" />,
  Rabbit: <GiRabbit className="text-xl text-white" />,
  Tiger: <GiTigerHead className="text-xl text-white" />,
  Ox: <GiCow className="text-xl text-white" />,
  Rat: <GiRat className="text-xl text-white" />,
  Pig: <GiPig className="text-xl text-white" />,
  Boar: <GiBoar className="text-xl text-white" />,
  Dog: <GiSittingDog className="text-xl text-white" />,
  Rooster: <GiRooster className="text-xl text-white" />,
};
