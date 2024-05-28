import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    username: string
    email: string
    accessToken: string
  }

  interface Session {
    user: User
  }
}
