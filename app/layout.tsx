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
