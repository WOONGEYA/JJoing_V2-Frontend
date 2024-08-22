const sharedConfig = require('@jjoing/ui/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
};
