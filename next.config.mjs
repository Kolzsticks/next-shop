import withPWAInit from "@ducanh2912/next-pwa";

// Initialize PWA configuration
const withPWA = withPWAInit({
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/offline",
  },
  // disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kolzsticks.github.io',
        port: '',
        pathname: '/Free-Ecommerce-Products-Api/**',
        search: '',
      },
    ],
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',  // Apply these headers to all routes
        headers: [
          // {
          //   key: 'Cache-Control',
          //   value: 'public, max-age=31536000, immutable', // 1 year cache for static images
          // },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',  // Prevent MIME type sniffing
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',  // Prevent clickjacking attacks
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',  // Control how much referrer information is shared
          },
        ],
      },
    ];
  },
};

// Wrap your existing Next.js configuration with the PWA settings
export default withPWA(nextConfig);
