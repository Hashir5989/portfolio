/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['maps.google.com', 'maps.googleapis.com'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
