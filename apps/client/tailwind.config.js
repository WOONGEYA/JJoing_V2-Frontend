/** @type {import('tailwindcss').Config} */

const commonConfig = require('@jjoing/ui/tailwind.config.js');

module.exports = {
  ...commonConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
