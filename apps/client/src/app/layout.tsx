import '@/styles/globals.css';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { pretendard } from './fonts';

export const metadata: Metadata = { title: '쪼잉' };

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
