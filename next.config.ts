// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/shop',
  output: 'standalone',
  trailingSlash: true,
};

export default nextConfig;