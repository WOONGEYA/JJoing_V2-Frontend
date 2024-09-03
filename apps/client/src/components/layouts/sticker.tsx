'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

type StickerProps = {
  stickerUrl: string;
  width: number;
  height: number;
};

export const Sticker = ({ stickerUrl, width, height }: StickerProps) => {
  return (
    <m.div
      className="absolute"
      initial={{ opacity: 0, scale: 0.35 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        scale: { type: 'spring', damping: 8, stiffness: 100, restDelta: 0.001 },
      }}
    >
      <Image alt="Target" src={stickerUrl} width={width} height={height} priority />
    </m.div>
  );
};
