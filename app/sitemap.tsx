import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'daily',  // Homepages often change daily with new deals or products
      priority: 1,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/product',
      lastModified: new Date(),
      changeFrequency: 'weekly',  // Product listing page
      priority: 0.9,
    },
    {
      url: '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: '/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: '/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    // Add individual product pages dynamically
    ...generateProductPages(),
  ]
}

// Helper function to generate product pages dynamically
function generateProductPages(): MetadataRoute.Sitemap {
  const products = [
    // Example products, replace this array with dynamic product data
    { id: 1, lastModified: new Date('2023-10-01'), url: '/products/1' },
    { id: 2, lastModified: new Date('2023-10-05'), url: '/products/2' },
    { id: 3, lastModified: new Date('2023-10-10'), url: '/products/3' },
  ]

  return products.map(product => ({
    url: product.url,
    lastModified: product.lastModified,
    changeFrequency: 'daily',  // Change frequency can vary based on how often products change
    priority: 0.9,
  }))
}
