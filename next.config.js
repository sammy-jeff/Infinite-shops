/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            
          },
        ],
      },
      experimental: {
        serverActions: true,
      },
    compiler:{
      removeConsole:process.env.NODE_ENV==='production'
    }
}

module.exports = nextConfig
