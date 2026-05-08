import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Absolute project root (directory that contains `app/` and this config file).
// Pinning Turbopack's root avoids it mis-inferring the App Router `app/` folder as
// the package root on some setups (pnpm/workspace or flaky FS), which surfaces as
// "app_dir must be a directory".
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [],

  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
