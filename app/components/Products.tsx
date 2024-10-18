"use client";
import React, { useState, useEffect, useCallback } from "react";
import ModalProduct from "./ModalProduct";
import FancyBoxPreview from "./FancyBoxPreview";
import { motion } from "framer-motion";
import { Product } from "../types/types";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const ProductCard: React.FC<Product> = ({
  uid,
  id,
  image,
  name,
  priceCents,
  isColumn = false,
}) => {
  const [showProductPreviewModal, setShowProductPreviewModal] =
    useState<boolean>(false);
  const [showFullScreenPreview, setShowFullScreenPreview] =
    useState<boolean>(false);

  const { setTotalItems } = useCart();

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

  useEffect(() => {
    if (showProductPreviewModal || showFullScreenPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showProductPreviewModal, showFullScreenPreview]);

  const toggleProductPreviewModal = useCallback(() => {
    setShowProductPreviewModal((prev) => !prev);
  }, []);

  const toggleFullScreenPreview = useCallback(() => {
    setShowFullScreenPreview((prev) => !prev);
  }, []);

  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    const productId = Number(id);

    // Check if the product already exists in the cart
    const existingItem = existingCartItems.find(
      (item: CartItem) => item.id === productId
    );

    const updatedCartItems = existingItem
      ? existingCartItems.map((item: CartItem) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
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
            <div className="btn btn-fab btn-sm" onClick={handleAddToCart}>
              <span className="icon-shopping-cart" />
            </div>
            <div className="btn btn-fab btn-sm">
              <span className="icon-heart" />
            </div>
            <div
              className="btn btn-fab btn-sm"
              onClick={toggleFullScreenPreview}
            >
              <span className="icon-fullscreen fs-normal" />
            </div>
          </div>

          <div className="card-body">
            <div className="img-place">
              <img src={image} alt={name} />
            </div>
            <button
              className="btn btn-theme btn-rounded btn-sm btn-noanimate"
              onClick={toggleProductPreviewModal}
            >
              Quick View
            </button>
          </div>

          <div className="card-footer">
            <div className="caption">
              <a href="product-details.html" className="product-title">
                {name}
              </a>
              <p className="fg-theme">${(priceCents / 100).toFixed(2)}</p>
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

      {showProductPreviewModal && (
        <ModalProduct handleClose={toggleProductPreviewModal} />
      )}
    </>
  );
};

export default React.memo(ProductCard);
