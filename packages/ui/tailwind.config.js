import sharedConfig from '@jjoing/design-token/tailwind.config.js';
import lineCamp from '@tailwindcss/line-clamp';

module.exports = {
  ...sharedConfig,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [lineCamp],
};
