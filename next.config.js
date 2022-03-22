/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "randomuser.me",
      "127.0.0.1",
    ],
  },
};

module.exports = nextConfig
