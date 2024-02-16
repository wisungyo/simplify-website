/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=31536000, immutable",
    },
  ],
};

module.exports = nextConfig;
