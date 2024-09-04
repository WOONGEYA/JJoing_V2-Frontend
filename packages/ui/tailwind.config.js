/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F9266',
        secondary: '#264466',
        primaryHover: '#257250',
        secondaryHover: '#182A3E',
      },
      fontSize: {
        f24: [
          '24px',
          {
            lineHeight: '29px',
          },
        ],
        f34: [
          '34px',
          {
            lineHeight: '29px',
          },
        ],
      },
    },
  },
  plugins: [],
};
