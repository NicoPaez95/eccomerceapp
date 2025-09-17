import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/shop', // ← Esto es lo más importante
  output: 'standalone', // Recomendado para producción
  // Otras configuraciones opcionales:
  trailingSlash: true, // Opcional: fuerza trailing slashes en URLs
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/shop/',
  //       permanent: true,
  //       basePath: false
  //     }
  //   ]
  // }
};

export default nextConfig;