/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-global.cpcdn.com',
        // port: '',
        pathname: '/recipes',
      },
    ],
  },
}

export default nextConfig
