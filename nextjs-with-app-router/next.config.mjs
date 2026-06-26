/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // domains: ['www.berlinsbi.com'], // deprecated
    remotePatterns: [ // new instead of domains
      {
        protocol: 'https',
        hostname: 'www.berlinsbi.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
