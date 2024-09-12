import sharedConfig from '@jjoing/ui/tailwind.config.js';

module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@jjoing/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
};
