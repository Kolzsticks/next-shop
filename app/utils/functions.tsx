import { Product } from "../types/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json", {
      // next: { revalidate: 10 }
      cache: 'force-cache'
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    
    const data = await res.json();
    const fashionProducts = data.filter((product: Product) => product.category === "Fashion & Apparel");
    
    return fashionProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
