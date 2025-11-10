/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Note: Cloudflare Pages expects static output in `out`.
  // Using `distDir: 'out'` per deployment requirements.
  distDir: 'out',
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
