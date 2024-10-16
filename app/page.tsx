import HomeSection from "./homepage/page";

// Sample featuredProducts array (replace this with your actual data)
const featuredProducts = [
  {
    id: 1,
    title: "Summer Dress",
    image: "images/summer-dress.jpg", // Adjust the path as needed
    price: 30,
  },
  {
    id: 2,
    title: "Beach Hat",
    image: "images/beach-hat.jpg", // Adjust the path as needed
    price: 15,
  },
  // Add more products as needed
];

const Page = () => {
  // Construct base URL
  const baseUrl = "https://yourwebsite.com"; // Replace with your actual website URL

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "E-Commerce Landing Page",
    description: "Shop the latest summer arrivals with great discounts.",
    url: baseUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: featuredProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1, // Position starts from 1
        item: {
          "@type": "Product",
          name: product.title,
          image: `${baseUrl}/${product.image}`, // Full URL for image
          description: `Buy ${product.title} for $${product.price}.`,
          offers: {
            "@type": "Offer",
            priceCurrency: "NAIRA",
            price: product.price.toString(),
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            url: `${baseUrl}/products/${product.id}`, // Full product URL
          },
        },
      })),
    },
  };

  return (
    <main>
      <HomeSection />
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default Page;
