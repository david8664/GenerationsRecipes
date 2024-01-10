/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
        pathname: "/dufocpryn/image/upload/v1694096237/",
      },
      { hostname: "cdn.pixabay.com", protocol: "https" },
    ],
  },
};

module.exports = nextConfig;
