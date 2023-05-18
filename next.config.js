/** @type {import('next').NextConfig} */


// TODO: After converting all content to headless CMS content instead of hardcoded values, change this.
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "mms-delivery.sitecorecloud.io",
      //   pathname: "/api/media/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "assets-us-01.kc-usercontent.com",
      //   port: "443",
      //   pathname: "/e345b878-cec5-0061-03f6-8d06aac8c381/**",
      // },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**"
      }
    ],
    domains: ["mms-delivery.sitecorecloud.io"],
  },
};
