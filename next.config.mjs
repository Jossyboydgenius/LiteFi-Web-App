/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://litefi-backend.onrender.com',
    BACKEND_API_URL: 'https://litefi-backend.onrender.com',
  },
  serverExternalPackages: [],
};

export default nextConfig; 