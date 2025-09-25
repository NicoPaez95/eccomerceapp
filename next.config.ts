// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/shop',
  env: {
    PORT: '4000'
  }
}

module.exports = nextConfig