// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '/shop',
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*',
            },
        ]
    }
}

module.exports = nextConfig