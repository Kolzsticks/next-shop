import HomeSection from "./(main)/homepage/page";
import Parallax from "@/app/components/Parallax";
import NewSection from "@/app/NewFonts/NewSection";
import Secure from "@/app/components/Secure";

// Sample featuredProducts array (replace this with your actual data)
const featuredProducts = [
  {
    id: 1,
    title: "Summer Dress",
    image: "/img/summer-dress.jpg", // Adjust the path as needed
    price: 30,
  },
  {
    id: 2,
    title: "Beach Hat",
    image: "/img/beach-hat.jpg", // Adjust the path as needed
    price: 15,
  },
  // Add more products as needed
];

const Page = () => {
  const baseUrl = process.env.NEXT_LIVE_SITE_URL;

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
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          image: `${baseUrl}/${product.image}`,
          description: `Buy ${product.title} for ₦${product.price}.`,
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN", // Correct currency code for Naira
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
      <Parallax />
      <NewSection />
      <Secure />
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default Page;
