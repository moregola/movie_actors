import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'upload.wikimedia.org',
      },
      {
        protocol:'https',
        hostname:'pt.wikipedia.org',
      }
    ]
  }
};

export default nextConfig;
