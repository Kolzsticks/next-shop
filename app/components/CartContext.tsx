"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  totalItems: number;
  setTotalItems: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const savedTotalItems = localStorage.getItem("totalCartItems");
      setTotalItems(savedTotalItems ? parseInt(savedTotalItems, 10) : 0);
    }
  }, []);

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      localStorage.setItem("totalCartItems", totalItems.toString());
    }
  }, [totalItems]);

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
