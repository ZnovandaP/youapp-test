import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API_YOUAPP as string;

type FetchWithAuthParams = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  endpoint: string;
  options?: AxiosRequestConfig
};

export const fetchWithToken = async ({ endpoint, options, method }: FetchWithAuthParams) => {
  try {
    const session = await getSession();
    const getAccessTokenFromSession = session?.user?.accessToken || '';

    const res = await axios.request({
      ...options,
      method,
      url: `${baseUrl}/api${endpoint}`,
      headers: {
        'x-access-token': getAccessTokenFromSession,
      },
    });
    return res;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};
