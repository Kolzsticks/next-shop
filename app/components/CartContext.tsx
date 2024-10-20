"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  totalItems: number | null; // Allow `null` for initial loading state
  setTotalItems: React.Dispatch<React.SetStateAction<number | null>>; // Allow `null` in setter
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [totalItems, setTotalItems] = useState<number | null>(null); // Initial state is null for loading

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTotalItems = localStorage.getItem("totalCartItems");
      if (storedTotalItems) {
        setTotalItems(Number(storedTotalItems));
      } else {
        setTotalItems(0); // Set to 0 if no value found in localStorage
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && totalItems !== null) {
      // Only update localStorage after state is set
      localStorage.setItem("totalCartItems", totalItems.toString());
    }
  }, [totalItems]);

  // Fallback rendering until value is fetched
  if (totalItems === null) {
    return null; // Render a loading spinner or placeholder if needed
  }

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
