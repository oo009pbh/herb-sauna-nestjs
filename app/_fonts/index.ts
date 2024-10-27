import localFont from "next/font/local";

export const hbFont = localFont({
  src: [{
    path: "./Hakgyoansim Badasseugi TTF B.woff2",
    weight: "600"
  }, {
    path: "./Hakgyoansim Badasseugi TTF L.woff2",
    weight: "300"
  }],
});
export const nanumGothicFont = localFont({
  src: [{
    path: "./NanumGothicExtraBold.woff2",
    weight: "700"
  }, {
    path: "./NanumGothicBold.woff2",
    weight: "600"
  }, {
    path: "./NanumGothic.woff2",
    weight: "400"
  }],
});