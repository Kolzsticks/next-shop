import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shoperce E-Commerce Store',
    short_name: 'Shoperce',
    description: 'Shop the latest products with great deals and discounts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f1f1f1',  // Set background color to match your brand
    theme_color: '#ff6600',       // Set a theme color for the toolbar (your brand color)
    icons: [
      {
        src: '/img/logo.png',  // Add icons in different sizes for better PWA support
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/logo.png',  // Larger icon for higher resolution devices
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    orientation: 'portrait',         // Ensures the app launches in portrait mode
    scope: '/',                      // Defines the scope of the app
    lang: 'en-US',                   // Language of the app
    categories: ['shopping', 'ecommerce'], // App categories (helps with app store listings)
  }
}
