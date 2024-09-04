const sharedConfig = require('@jjoing/ui/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...sharedConfig.theme?.extend.colors,
        lightPrimary: '#7DC7A4',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
        ...sharedConfig.theme?.extend.fontSize,
      },
      backgroundImage: {
        'main-gradient':
          'linear-gradient(to right, #e1fff2 0%, #f7fffc 30%, white 70%, white 100%)',
      },
    },
  },
  plugins: [],
};
