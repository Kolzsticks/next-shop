import { Product } from "../types/types";


export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/clothe_brands/products.json", {
      // cache: 'no-store',
      next: {revalidate: 10}
    
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    // console.log("Fetched Products:", data); 
    return data as Product[]; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};
