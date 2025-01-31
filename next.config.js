/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['images.unsplash.com'],
  },
  basePath: '/shelvey-ai',
  assetPrefix: '/shelvey-ai/',
}

module.exports = nextConfig 