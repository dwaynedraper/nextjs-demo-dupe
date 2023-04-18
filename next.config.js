/** @type {import('next').NextConfig} */
//
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mms-delivery.sitecorecloud.io",
        pathname: "/api/media/**",
      },
    ],
  },
  reactStrictMode: true,
  images: {
    domains: ["mms-delivery.sitecorecloud.io"]
  }
};
