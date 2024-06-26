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
      compiler:{
        removeConsole:process.env.NODE_ENV==='production'
      }
};

export default nextConfig;
