/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  poweredByHeader: false,
  reactStrictMode: true,
  generateEtags: true,
  distDir: "build",
  trailingSlash: true,
};

export default nextConfig;
