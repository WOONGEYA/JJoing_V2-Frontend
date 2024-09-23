import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/providers/Providers';
import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

export const metadata = { title: '쪼잉' };

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body className="font-pretendard">
        <Providers>
          <Header />
          <div className="pt-[64px]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
