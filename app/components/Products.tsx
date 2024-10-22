"use client";

import React, { useState, useCallback } from "react";
import FancyBoxPreview from "./FancyBoxPreview";
import { motion } from "framer-motion";
import { Product } from "../types/types";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRating from "./StarRating";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

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

// Helper function to handle adding items to cart
const handleCartUpdate = (
  id: number,
  name: string,
  image: string,
  priceCents: number,
  setTotalItems: (count: number) => void
) => {
  const existingCartItems = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );
  const productId = Number(id);

  const existingItem = existingCartItems.find(
    (item: CartItem) => item.id === productId
  );

  const updatedCartItems = existingItem
    ? existingCartItems.map((item: CartItem) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [
        ...existingCartItems,
        { id: productId, name, image, quantity: 1, price: priceCents / 100 },
      ];

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  notify(
    existingItem ? `Item already exists in cart!` : `Added ${name} to cart!`
  );
  setTotalItems(updatedCartItems.length);
};

const ProductCard: React.FC<Product> = ({
  uid,
  id,
  image,
  name,
  priceCents,
  rating,
  isColumn = false,
}) => {
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);
  const { setTotalItems } = useCart();

  // Toggle fullscreen image preview
  const toggleFullScreenPreview = useCallback(() => {
    setShowFullScreenPreview((prev) => !prev);
  }, []);

  // Notify the user when added to wishlist
  const addToWishList = () => notify("Added to WishList");

  // Add product to cart
  const handleAddToCart = () => {
    handleCartUpdate(id, name, image, priceCents, setTotalItems);
  };

  return (
    <>
      <div className={`col-sm-6 col-md-4 ${isColumn ? "col-lg-12" : ""}`}>
        <motion.div
          className="card card-product"
          initial={{ opacity: 0, x: uid % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: false }}
        >
          <div className="card-header">
            <button className="btn btn-fab btn-sm" onClick={handleAddToCart}>
              <span className="icon-shopping-cart" />
            </button>
            <button className="btn btn-fab btn-sm" onClick={addToWishList}>
              <span className="icon-heart" />
            </button>
            <button
              className="btn btn-fab btn-sm"
              onClick={toggleFullScreenPreview}
            >
              <span className="icon-fullscreen fs-normal" />
            </button>
          </div>

          <div className="card-body">
            <div className="img-place">
              <img src={image} alt={name} />
            </div>
            <Link
              href={`product/product-detail/${id}`}
              className="btn btn-theme btn-rounded btn-sm btn-noanimate"
            >
              Quick View
            </Link>
          </div>

          <div className="card-footer">
            <div className="caption">
              <Link
                href={`product/product-detail/${id}`}
                className="product-title"
              >
                {name}
              </Link>
              <p className="fg-theme">${(priceCents / 100).toFixed(2)}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "15px", marginRight: "10px" }}>
                {rating.stars}
              </span>
              <StarRating rating={rating.stars} />
            </div>
          </div>
        </motion.div>
      </div>

      {showFullScreenPreview && (
        <FancyBoxPreview
          imageUrl={image}
          handleClose={toggleFullScreenPreview}
        />
      )}
    </>
  );
};

export default React.memo(ProductCard);
