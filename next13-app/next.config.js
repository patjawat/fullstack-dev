/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_KEY: '427318e3f2f0ef98e94e654de7ffe39c',
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
          },
        ],
      },
}

module.exports = nextConfig
