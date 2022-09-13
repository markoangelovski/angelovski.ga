/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"]
  }
  // experimental: {
  //   // TODO: Remove this flag when working with CF images.
  //   images: {
  //     unoptimized: true
  //   }
  // }
};

module.exports = nextConfig;
