"use client";
import React, { ReactNode } from "react";
import { toast } from "react-toastify";
import useCartStore from "../(main)/store/CartStore";
import { Product } from "../types/types";

// Notify function for success messages
const notify = (message: string) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });

// Handle add to cart functionality
export const handleAddToCart = (product: Product) => {
  const { id, name, image, priceCents } = product;
  const addToCart = useCartStore.getState().addToCart;

  const existingItem = useCartStore
    .getState()
    .cartItems.find((i) => i.id === id);

  if (existingItem) {
    toast.info("Item already exists in the cart", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  } else {
    addToCart({ id, name, image, quantity: 1, price: priceCents / 100 });
    notify(`Added ${name} to cart!`);
  }
};

// Button Component
interface AddToCartButtonProps {
  children: ReactNode;
  product: Product;
  className?: string;
}

export const AddToCartExportButton: React.FC<AddToCartButtonProps> = ({
  children,
  product,
}) => {
  return <span onClick={() => handleAddToCart(product)}>{children}</span>;
};
