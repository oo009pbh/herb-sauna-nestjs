import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/_styles')],
    prependData: `@import 'mixins'; @import 'variables';`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
