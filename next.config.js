/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'logowik.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'static-00.iconduck.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tailwindcss.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'getbootstrap.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.vectorlogo.zone',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  