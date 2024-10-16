"use client";
import React, { useState, useEffect, useCallback } from "react";
import ModalProduct from "./ModalProduct";
import FancyBoxPreview from "./FancyBoxPreview";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isColumn: boolean;
}

const ProductCard: React.FC<Product> = ({ id, title, price, image, isColumn = false }) => {
  const [showProductPreviewModal, setShowProductPreviewModal] = useState<boolean>(false);
  const [showFullScreenPreview, setShowFullScreenPreview] = useState<boolean>(false);

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

  return (
    <>
      <div className={`col-sm-6 col-md-4 ${isColumn? 'col-lg-12': ''}`}>
        <div className="card card-product">
          <div className="card-header">
            <div className="btn btn-fab btn-sm">
              <span className="icon-heart" />
            </div>
            <div className="btn btn-fab btn-sm">
              <span className="icon-shopping-cart" />
            </div>
            <div className="btn btn-fab btn-sm" onClick={toggleFullScreenPreview}>
              <span className="icon-fullscreen fs-normal" />
            </div>
          </div>

          <div className="card-body">
            <div className="img-place">
              <img src={image} alt={title} />
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
                {title}
              </a>
              <p className="fg-theme">${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {showFullScreenPreview && (
        <FancyBoxPreview imageUrl={image} handleClose={toggleFullScreenPreview} />
      )}

      {showProductPreviewModal && (
        <ModalProduct handleClose={toggleProductPreviewModal} />
      )}
    </>
  );
};

export default React.memo(ProductCard);
