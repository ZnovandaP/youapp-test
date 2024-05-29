import { AxiosError } from 'axios';
import { fetchWithToken } from './fetch-with-token';

export type ResponseGetProfile = {
  message: string
  data: {
    email: string
    username: string
    name: string
    birthday: string
    horoscope: string
    zodiac: string
    height: number,
    weight: number,
    interests: string[]
  }
};

const getProfile = async (): Promise<ResponseGetProfile> => {
  try {
    const res = await fetchWithToken({
      method: 'GET',
      endpoint: '/getProfile',
    });

    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};

export type SetProfileParams = {
  name: string
  birthday: string
  height: number
  weight: number
  interests: string[]
};

export type ResponseSetProfile = {
  message: string,
  data: {
    name: string
    birthday: string
    height: number
    weight: number
    interests: string[]
    horoscope: string
    zodiac: string
  }
};
const createProfile = async (body: SetProfileParams): Promise<ResponseSetProfile> => {
  try {
    const { data } = await fetchWithToken({
      method: 'POST',
      endpoint: '/createProfile',
      options: {
        data: body,
      },
    });

    return data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};

const updateProfile = async (body: SetProfileParams): Promise<ResponseSetProfile> => {
  try {
    const { data } = await fetchWithToken({
      method: 'PUT',
      endpoint: '/updateProfile',
      options: {
        data: body,
      },
    });

    return data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};

export { getProfile, createProfile, updateProfile };
