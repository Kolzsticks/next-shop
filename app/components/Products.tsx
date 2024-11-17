"use client";

import React, { useState, useCallback } from "react";
import FancyBoxPreview from "./FancyBoxPreview";
import { motion } from "framer-motion";
import { Product } from "../types/types";
import { toast } from "react-toastify";
import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "../(main)/store/CartStore";

const notify = (message: string) =>
  toast.success(message, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });

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
  const addToCart = useCartStore((state) => state.addToCart); // Get addToCart from Zustand

  const toggleFullScreenPreview = useCallback(() => {
    setShowFullScreenPreview((prev) => !prev);
  }, []);

  const addToWishList = () => notify("Added to WishList");

  const handleAddToCart = () => {
    const existingItem = useCartStore
      .getState()
      .cartItems.find((i) => i.id === id);

    if (existingItem) {
      // Notify that the item already exists in the cart
      toast.info("Item already exists in the cart", {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      // If the item doesn't exist, add it to the cart
      addToCart({ id, name, image, quantity: 1, price: priceCents / 100 });
      notify(`Added ${name} to cart!`);
    }
  };

  return (
    <>
      <div className={`col-sm-6 col-md-4 ${isColumn ? "col-lg-12" : ""}`}>
        <motion.div
          className="card card-product"
          initial={{ opacity: 0, x: uid % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
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
            <Link prefetch={true}
              href={`/product/product-detail/${id}#top-nav`}
              className="btn btn-theme btn-rounded btn-sm btn-noanimate"
            >
              View Details
            </Link>
          </div>

          <div className="card-footer">
            <div className="caption">
              <Link prefetch={true}
                href={`/product/product-detail/${id}#top-nav`}
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