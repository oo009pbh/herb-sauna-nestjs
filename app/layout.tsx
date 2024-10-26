import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.scss";

const hbFont = localFont({
  src: [{
    path: "./fonts/Hakgyoansim Badasseugi TTF B.woff2",
    weight: "600"
  }, {
    path: "./fonts/Hakgyoansim Badasseugi TTF L.woff2",
    weight: "300"
  }],
});
const nanumGothicFont = localFont({
  src: [{
    path: "./fonts/NanumGothicExtraBold.woff2",
    weight: "700"
  }, {
    path: "./fonts/NanumGothicBold.woff2",
    weight: "600"
  }, {
    path: "./fonts/NanumGothic.woff2",
    weight: "400"
  }],
});

export const metadata: Metadata = {
  title: "용문산 허브 찜질방",
  description: "자연 속에 있는 찜질방,\n" +
    "허브스팀으로 향기로운 찜질을 경험을 해보세요.",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${hbFont.className} ${nanumGothicFont.className}`}
    >
    {children}
    </body>
    </html>
  );
}
