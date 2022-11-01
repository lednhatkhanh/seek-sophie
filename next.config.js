/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    newNextLinkBehavior: true,
  },
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
