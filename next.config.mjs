/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This explicitly instructs the compiler server to skip rendering optimization blocks
  experimental: {
    missingSuspenseWithCSRBypass: true,
  }
};

export default nextConfig;
