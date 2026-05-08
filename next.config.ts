import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Core Next.js configuration options */
  reactStrictMode: true,

  experimental: {
    // Preparing configuration for future Agentic UI (React Server Components)
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
