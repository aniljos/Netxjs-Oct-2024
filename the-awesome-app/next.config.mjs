/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '9000',
            pathname: '/images/**',
          },
        ]
    }
};

export default nextConfig;
