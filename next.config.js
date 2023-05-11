/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
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
};
