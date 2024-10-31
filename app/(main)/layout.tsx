import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-toastify/ReactToastify.min.css";
import BottomMenu from "../components/BottomMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ToastContainer } from "react-toastify";

const liveSite = process.env.NEXT_LIVE_SITE_URL;
const featuredProducts = [
  {
    id: 1,
    title: "Summer Dress",
    image: "img/Skinny_Fit_Blazer.jpg",
    price: 30,
  },
  {
    id: 2,
    title: "Beach Hat",
    image: "img/campaign-men.jpg",
    price: 15,
  },
  // Add more products as needed
];
const currentDate = () => {
  return new Date().toISOString();
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "E-Commerce Landing Page",
  description: "Shop the latest summer arrivals with great discounts.",
  url: liveSite,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: featuredProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: `${liveSite}/${product.image}`,
        description: `Buy ${product.title} for ₦${product.price}.`,
        offers: {
          "@type": "Offer",
          priceCurrency: "NGN", // Correct currency code for Naira
          price: product.price.toString(),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: `${liveSite}/products/${product.id}`, // Full product URL
        },
      },
    })),
  },
};

export const metadata: Metadata = {
  title: "OnyxShop",
  description: "Shop the latest summer arrivals with great discounts.",
  keywords: ["fashion", "clothing", "summer sale", "discounts"],
  metadataBase: liveSite ? new URL(liveSite) : undefined,
  openGraph: {
    title: "Shop the latest summer arrivals with great discounts.",
    description: "Discover trendy summer clothing with amazing deals.",
    url: liveSite || "",
    type: "website",
    images: [
      {
        url: `/img/logo.png?v=${currentDate()}`,
        width: 1200,
        height: 600,
        alt: "OnyxShop",
      },
    ],
  },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToastContainer />
      <Navbar />
      {children}
      <BottomMenu />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
