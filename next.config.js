/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.istanbultaksiplaka.com',
      },
    ],
  },
}

module.exports = nextConfig
