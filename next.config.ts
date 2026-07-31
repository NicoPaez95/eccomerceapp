import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  basePath: "/shop",
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shop",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;