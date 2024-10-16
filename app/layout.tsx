import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/ProgressBar";
import "./globals.css";

const liveSite = process.env.NEXT_LIVE_SITE_URL;

const currentDate = () => {
  return new Date().toISOString(); // Or any other format you need
};

export const metadata: Metadata = {
  title: "Shoperce",
  description: "Shop the latest summer arrivals with great discounts.",
  keywords: ["fashion", "clothing", "summer sale", "discounts"], // Add relevant keywords
  metadataBase: liveSite ? new URL(liveSite) : undefined, // Ensure liveSite is valid
  openGraph: {
    title: "Shop the latest summer arrivals with great discounts.",
    description: "Discover trendy summer clothing with amazing deals.", // Add a meaningful description
    url: liveSite || "", // Provide a fallback if liveSite is undefined
    type: "website",
    images: [
      {
        url: liveSite ? `${liveSite}/img/logo.png?v=${currentDate()}` : "",
        width: 1200,
        height: 600,
        alt: "Shoperce",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
