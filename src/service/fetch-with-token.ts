/* eslint-disable import/prefer-default-export */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API_YOUAPP as string;

type FetchWithAuthParams = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  endpoint: string;
  options?: AxiosRequestConfig
};

/* export const fetchWithAuth = async ({ endpoint, options, method }: FetchWithAuthParams) => {
  try {
    const session = await getSession();
    const getAccessTokenFromSession = session?.user!;
    const { data } = await axios.request({
      ...options,
      method,
      url: `${baseUrl}/${endpoint}`,
      headers: {
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
 */
