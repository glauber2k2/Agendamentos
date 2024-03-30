/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.BASE_URL],
    },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
