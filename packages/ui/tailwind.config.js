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
        '1.5xl': [
          '22px',
          {
            lineHeight: '29px',
          },
        ],
      },
    },
  },
  plugins: [],
};
