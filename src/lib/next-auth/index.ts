import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOption: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 3 * 24 * 60 * 60, // 3 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          placeholder: 'Enter email',
          type: 'email',
        },
        username: {
          label: 'Username',
          placeholder: 'Enter username',
          type: 'text',
        },
        password: {
          label: 'Password',
          placeholder: 'Enter password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {

      },
    }),
  ],
};

export default authOption;
