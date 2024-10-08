import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/Pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});
