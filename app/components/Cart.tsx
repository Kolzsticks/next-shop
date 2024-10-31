"use client";

import Link from "next/link";
import { useEffect } from "react";
import useCartStore from "../(main)/store/CartStore";
import Image from "next/image";

interface CartButtonProps {
  handleCartClick: () => void;
}

const Cart: React.FC<CartButtonProps> = ({ handleCartClick }) => {
  const { cartItems, totalItems, loadCart, removeFromCart, updateQuantity } =
    useCartStore();

  useEffect(() => {
    loadCart(); // Load cart items from localStorage
  }, [loadCart]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="charm right show" id="cartView">
      <div className="charm-header bg-white fg-dark">
        <span onClick={handleCartClick} className="btn-back">
          <span className="icon-arrow_back fs-large" />
        </span>
        <p className="ml-3 mb-0 fs-large">
          Your Cart{" "}
          <span className="badge bg-theme fg-white ml-2 fs-normal">
            {totalItems}
          </span>
        </p>
      </div>
      <div className="charm-content">
        <ul className="product-cart-list">
          {cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <div className="img-place">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className="caption">
                <h5>{item.name}</h5>
                <div className="mb-0">
                  Qty:
                  <div className="d-inline-flex number-input number-input-sm">
                    <button
                      className="btn btn-theme btn-sm btn-decrease"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <span className="icon-minus" />
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      name="number"
                      value={item.quantity}
                      readOnly
                      style={{ height: "30px" }}
                    />
                    <button
                      className="btn btn-theme btn-sm btn-increase"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <span className="icon-plus" />
                    </button>
                  </div>
                </div>
                <p className="mb-0">
                  Price:{" "}
                  <span className="fg-theme">${item.price.toFixed(2)}</span>
                </p>
              </div>
              <button
                className="btn btn-fab btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                <span className="icon-trash-o" />
              </button>
            </li>
          ))}
        </ul>
        <div className="product-cart-invoice">
          <h5 className="d-flex flex-row justify-content-between">
            <span>SubTotal :</span>
            <span className="text-right text-secondary">
              ${subtotal.toFixed(2)}
            </span>
          </h5>
          <div className="text-center mt-4">
            <Link
              href="/checkout"
              onClick={handleCartClick}
              className="btn btn-theme btn-block"
            >
              Proceed Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
