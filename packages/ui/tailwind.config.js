/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38B57D',
        secondary: '#264466',
        primaryHover: '#2F9266',
        secondaryHover: '#182A3E',
      },
    },
  },
  plugins: [],
};
