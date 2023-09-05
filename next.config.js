/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.pixabay.com", protocol: "https" }],
  },
};

module.exports = nextConfig;
