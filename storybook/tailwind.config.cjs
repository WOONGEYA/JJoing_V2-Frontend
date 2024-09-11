import sharedConfig from '@jjoing/ui/tailwind.config.js';

module.exports = {
  ...sharedConfig,
  content: [
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
};
