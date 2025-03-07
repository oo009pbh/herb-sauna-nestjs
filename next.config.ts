import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/_styles')],
    prependData: `@import 'mixins'; @import 'variables';`,
  },
};

export default nextConfig;
