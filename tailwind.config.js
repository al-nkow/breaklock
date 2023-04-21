/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blblue: {
          500: '#39A1FF',
        },
        blred: {
          500: '#CF182A',
          700: '#A40C1B',
        },
      },
      fontFamily: {
        gilroyLight: ['Gilroy light', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
