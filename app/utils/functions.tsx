import { Product } from "../types/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json", {
      next: { revalidate: 10 }
      // cache: 'force-cache'
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

// debounce.ts
export function debounce(fn: Function, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}


export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Truncate and add ellipsis
  }
  return text;
};


// Helper function to clean the text for robust searching
export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/['",.-]/g, "") // Remove apostrophes, commas, hyphens, and periods
    .normalize("NFD") // Normalize characters with accents
    .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
};


export const getFirstName = (fullName: string) => {
  // Check if the full name exists and is a string
  if (fullName) {
    const nameParts = fullName.split(" ");
    return nameParts[0]; // Return the first part (first name)
  }
  
  return 'Guest'; // Return 'Guest' if no name is provided
};


