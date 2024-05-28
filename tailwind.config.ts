/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1150px',
      '2xl': '1280px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at -200%, #09141a 5% , #0d1d23 20% , #1f4247 )',
      },
      colors: {
        main: '#09141a',
        second: '#0d1d23',
        third: '#1f4247',
        destructive: '#991b1b',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;

export default config;
