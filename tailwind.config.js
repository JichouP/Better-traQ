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
          primary: '#005BAC',
          secondary: '#F2994A',
          accent: '#EC4899',
          neutral: '#191D24',
          'base-100': '#ECF4FD',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#4899F9',
          secondary: '#F2994A',
          accent: '#EC4899',
          neutral: '#191D24',
          'base-100': '#2A3A44',
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
