/* eslint-disable @typescript-eslint/no-throw-literal */
import axios, { AxiosError } from 'axios';
import { baseUrl } from './fetch-with-token';

export type AuthParams = {
  email: string;
  username: string;
  password: string;
};

export type LoginResponse = {
  message: string
  access_token?: string
};

export type RegisterResponse = {
  message: string
};

const login = async (body: AuthParams): Promise<LoginResponse> => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/login`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'htttp://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });
    console.log(data);

    return data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};

const register = async (body: AuthParams): Promise<RegisterResponse> => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/register`, body);

    return data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(error.message);
  }
};

export { login, register };
