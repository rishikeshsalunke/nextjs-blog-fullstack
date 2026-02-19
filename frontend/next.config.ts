import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // frontend calls /api/...
        destination: 'https://nextjs-blog-fullstack.onrender.com/api/v1/blogs/:path*', // actual backend
      },
    ];
  },
};

export default nextConfig;
