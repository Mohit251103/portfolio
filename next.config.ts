import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname:"i.pinimg.com"}, {hostname:"editor.analyticsvidhya.com"}]
  }
};

export default nextConfig;
