import Providers from '@/providers/Providers';
import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { pretendard } from './fonts';

export const metadata = { title: '쪼잉' };

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>
        <Providers>
          <div className="font-pretendard">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
