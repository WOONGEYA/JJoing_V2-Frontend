import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/providers/Providers';
import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

export const metadata = {
  title: '쪼잉',
  description: '쪼잉을 이용하여 프로젝트를 진행해보세요!',
};

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
