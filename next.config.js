/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['herokuapp.com'],
  },

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
