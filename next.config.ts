// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/shop',
  serverRuntimeConfig: {
    port: parseInt(process.env.PORT ?? '4000', 10),
    hostname: '0.0.0.0'
  }
}

module.exports = nextConfig