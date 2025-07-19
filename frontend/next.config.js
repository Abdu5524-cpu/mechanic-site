/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options
};

module.exports = {
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
};