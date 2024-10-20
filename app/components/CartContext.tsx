"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
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
  const [totalItems, setTotalItems] = useState<number>(() => {
    const storedTotalItems = localStorage.getItem("totalCartItems");
    return storedTotalItems ? Number(storedTotalItems) : 0;
  });

  useEffect(() => {
    localStorage.setItem("totalCartItems", totalItems.toString());
  }, [totalItems]);

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
