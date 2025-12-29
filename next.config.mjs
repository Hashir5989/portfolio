/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['maps.google.com', 'maps.googleapis.com'],
  },
  // Removed basePath configuration that was causing CSS loading issues
};

export default nextConfig;
