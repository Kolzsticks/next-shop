'use client'

import React from 'react'
import { Product } from '@/app/types/types';

// Function to fetch products
 const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost/eApi/");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    console.log("Fetched Products:", data); 
    return data as Product[]; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const page = () => {
  const prod = fetchProducts();
  console.log(prod)
  return (
    <div>page</div>
  )
}

export default page