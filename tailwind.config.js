/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#005bac',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          neutral: '#191D24',
          'base-100': '#f3f4f6',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#4899F9',
          secondary: '#3b82f6',
          accent: '#2563eb',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
