/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
    legacyBrowsers: false,
    newNextLinkBehavior: true,
  },
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
