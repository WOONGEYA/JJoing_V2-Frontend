import { backgroundImage, colors, fontFamily, fontSize } from './src';

module.exports = {
  content: ['./src/**/*.{ts}'],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily,
      backgroundImage,
    },
  },
};
