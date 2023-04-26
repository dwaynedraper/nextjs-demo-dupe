/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mms-delivery.sitecorecloud.io",
        pathname: "/api/media/**",
      },
    ],
    domains: ["mms-delivery.sitecorecloud.io"],
  },
  reactStrictMode: true,
};
