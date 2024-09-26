'use client';

import { OverlayProvider } from '@toss/use-overlay';
import { LazyMotion, domAnimation } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <OverlayProvider>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </OverlayProvider>
  );
};

export default Providers;
