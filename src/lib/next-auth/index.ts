import { AuthParams, login } from '@/service/auth';
import { NextAuthOptions, User } from 'next-auth';
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
      async authorize(credentials) {
        const body = credentials as AuthParams;

        try {
          const response = await login(body);
          if (response) {
            if (response.access_token) {
              return {
                email: credentials?.email,
                username: credentials?.username,
                accessToken: response.access_token,
              } as User;
            }
          }
        } catch (error) {
          return null;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === 'credentials') {
        token.accessToken = user.accessToken;
        token.email = user.email;
        token.username = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        if ('accessToken' in token) {
          session.user.accessToken = token.accessToken as string;
        }
        if ('email' in token) {
          session.user.email = token.email as string;
        }
        if ('username' in token) {
          session.user.username = token.username as string;
        }
      }
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
};

export default authOption;
