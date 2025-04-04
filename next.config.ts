import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
        pathname: '**', 
      },
      {
        protocol: 'http', 
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
