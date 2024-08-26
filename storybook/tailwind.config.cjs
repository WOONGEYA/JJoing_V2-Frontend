const sharedConfig = require('@jjoing/ui/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
};
