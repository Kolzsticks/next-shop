/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the output option for static HTML export
  // output: 'export',
  
  async headers() {
      return [
          {
              source: '/(.*)',  // Apply these headers to all routes
              headers: [
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

export default nextConfig;
