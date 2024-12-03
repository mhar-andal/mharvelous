import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts',
      },
    },
  },
  /* config options here */
  images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
  },
}

export default nextConfig
