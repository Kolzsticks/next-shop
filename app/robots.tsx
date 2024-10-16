import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',      // Any private pages
          '/admin/',        // Admin backend (if applicable)
          '/checkout/',     // Checkout pages
          '/cart/',         // Cart pages
          '/login/',        // Login pages
          '/account/',      // User account pages
        ],
      },
    ],
    sitemap: './sitemap.xml', // Replace with your actual domain
  }
}
