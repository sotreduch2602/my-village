import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-v2.mvillage.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
