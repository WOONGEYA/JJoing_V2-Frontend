import lineCamp from '@tailwindcss/line-clamp';
import { backgroundImage, colors, fontFamily, fontSize } from './src/themes';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily,
      backgroundImage,
    },
  },
  plugins: [lineCamp],
};
