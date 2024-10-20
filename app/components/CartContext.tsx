"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  totalItems: number | null;
  setTotalItems: React.Dispatch<React.SetStateAction<number | null>>;
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
  const [totalItems, setTotalItems] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTotalItems = localStorage.getItem("totalCartItems");
      if (storedTotalItems) {
        setTotalItems(Number(storedTotalItems));
      } else {
        setTotalItems(0);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && totalItems !== null) {
      localStorage.setItem("totalCartItems", totalItems.toString());
    }
  }, [totalItems]);

  if (totalItems === null) {
    return null;
  }

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
