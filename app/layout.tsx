import type { Metadata } from 'next';
import '@/app/_styles/globals.scss';
import { hbFont, nanumGothicFont } from './_fonts';
import Header from '@organisms/header';
import Footer from '@organisms/footer';

export const metadata: Metadata = {
  title: '용문산 허브 찜질방',
  description:
    '자연 속에 있는 찜질방,\n' +
    '허브스팀으로 향기로운 찜질을 경험을 해보세요.',
  keywords: [
    '허브찜질방',
    '용문산 찜질방',
    '자연 찜질방',
    '허브 사우나',
    '향기 찜질',
    '스팀 찜질',
    '힐링 공간',
    '자연 속 휴식',
    '양평 찜질방',
    '용문산 여행',
    '허브 테라피',
    '건강 디톡스',
  ],
  authors: [{ name: '박병훈' }],
  robots: 'index, follow',
  icons: {
    icon: '/herb_sauna_logo.ico',
    apple: '/herb_sauna_logo.png',
  },
  openGraph: {
    title: '용문산 허브 찜질방',
    description:
      '자연 속에 있는 찜질방,\n' +
      '허브스팀으로 향기로운 찜질을 경험을 해보세요.',
    url: 'https://herbsauna.co.kr',
    siteName: '사이트 이름',
    images: [
      {
        url: 'https://herbsauna.co.kr/bg/bg-main.webp',
        width: 1200,
        height: 630,
        alt: 'OpenGraph 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '용문산 허브 찜질방',
    description:
      '자연 속에 있는 찜질방,\n' +
      '허브스팀으로 향기로운 찜질을 경험을 해보세요.',
    images: ['https://herbsauna.co.kr/bg/bg-main.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        cz-shortcut-listen='false'
        className={hbFont.className + ' ' + nanumGothicFont.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
