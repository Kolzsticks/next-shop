import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',      
          '/admin/',       
          '/checkout/',   
          '/cart/',    
          '/login/',       
          '/account/',
          '/dashboard/'
        ],
      },
    ],
    sitemap: `${process.env.NEXT_LIVE_SITE_URL}/sitemap.xml`, // Replace with your actual domain
  }
}
