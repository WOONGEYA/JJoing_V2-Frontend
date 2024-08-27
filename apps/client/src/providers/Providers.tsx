'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Providers;
