import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.cnbcfm.com" },
      { protocol: "https", hostname: "a57.foxnews.com" },
      { protocol: "https", hostname: "cdn.vox-cdn.com" },
    ],
  },
};

export default nextConfig;
