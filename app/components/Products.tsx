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
import Image from "next/image";


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
              <Image
                src={image}
                alt={name}
                width={180}
                height={240}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCABTAFMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpTTGp9NagCJqjapWqNhQBHSijFKBQAop4poFPFADhS0CloAKKWigB9NNOpDQBEwqMipmqM0AR4oApaUUAKBTwKaKeKAFFLQKWgAopaKAFpDS00mgBrVGaexqMmgBKBSZoBoAeKeKjBp4NADxTqYDS5oAdRSZooAM00mm7qaWoAGNRk0M1MLUALmlBqPdQGoAmBpwNQhqcGoAmBp2aiDUu6gCTNFR7qKAEzTSaTNNJoARjTCaGNMJoAXNANMzQDQBKGpwNRA04GgCYGlzUQNOzQA/NFMzRQA6mmiigCNqjNFFADaBRRQA4U8UUUAOFOoooAKKKKAP/2Q=="
              />
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
