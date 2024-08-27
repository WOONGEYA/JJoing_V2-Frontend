'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

interface StickerProps {
  stickerUrl: string;
  width: number;
  height: number;
}

const initial = {
  opacity: 0,
  scale: 0.35,
};

const animate = {
  opacity: 1,
  scale: 1,
};

const transition = {
  duration: 0.1,
  scale: { type: 'spring', damping: 8, stiffness: 100, restDelta: 0.001 },
};

export const Sticker = ({ stickerUrl, width, height }: StickerProps) => {
  return (
    <m.div
      className="absolute"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <Image alt="Target" src={stickerUrl} width={width} height={height} priority />
    </m.div>
  );
};
