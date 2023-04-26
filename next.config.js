/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.unsplash.com"],
  },
};

module.exports = nextConfig;
