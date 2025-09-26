// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/shop',
  // Elimina esta línea, el PORT se define en el script start
  // env: {
  //   PORT: '4000'
  // },
  // Agrega esta configuración importante
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/shop/:path*',
        destination: '/:path*',
      },
    ];
  }
}

module.exports = nextConfig