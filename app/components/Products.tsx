"use client";
import ModalProduct from "./ModalProduct";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<Product> = ({ id, title, price, image }) => {
  const [showProductPreviewModal, setShowProductPreviewModal] =
    useState<boolean>(false);

  const handleShowProductPreviewModal = () => {
    setShowProductPreviewModal((prev) => !prev);
    console.log("Button clicked"); // Ensure this log is triggered
  };

  const handleClickWithOverflow = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }

    handleShowProductPreviewModal();
  };

  return (
    <>
      <div className="col-sm-6 col-md-4">
        <div className="card card-product">
          <div className="card-header">
            <div className="btn btn-fab btn-sm">
              <span className="icon-heart" />
            </div>
            <div className="btn btn-fab btn-sm">
              <span className="icon-shopping-cart" />
            </div>
            <div className="btn btn-fab btn-sm">
              <span className="icon-fullscreen fs-normal" />
            </div>
          </div>
          <div className="card-body">
            <div className="img-place">
              <img src={image} alt={title} />
            </div>
            <button
              className="btn btn-theme btn-rounded btn-sm btn-noanimate"
              onClick={handleClickWithOverflow}
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
      {showProductPreviewModal && (
        <ModalProduct handleClose={handleClickWithOverflow} />
      )}
    </>
  );
};

export default ProductCard;
