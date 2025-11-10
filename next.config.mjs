/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use default `.next` for build artifacts; export writes to `out/` automatically.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
