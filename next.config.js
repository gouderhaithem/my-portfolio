/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ["api.savepage.io"],
  },
  devIndicators: {
    buildActivity: false,
  },
};
module.exports = nextConfig;