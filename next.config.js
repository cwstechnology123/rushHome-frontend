/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.followupboss.com', 'bright-media01.prd.brightmls.com', 'bright-media02.prd.brightmls.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'rushhome.com' }],
      destination: 'https://www.rushhome.com/:path*',
      permanent: true
    }
  ]
}

module.exports = nextConfig
