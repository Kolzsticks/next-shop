'use client'
import Image from "next/image";
import useCartStore from "../store/CartStore";
import { useEffect } from "react";

const page = () => {
  const { cartItems, totalItems, loadCart, removeFromCart, updateQuantity } =
    useCartStore();

    const deliveryFee = 3.99;

    useEffect(() => {
      loadCart(); // Load cart items from localStorage
    }, [loadCart]);

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );


  return (
    <>
      <div className="site-section py-5">
        <div className="container">
          <h2 className="text-center font-bold text-2xl">Checkout {`(${totalItems} items)`}</h2>
          <div className="row justify-content-center mt-5">
          <div className="col-lg-6 px-lg-5">
              <h5 className="text-secondary">Your Orders</h5>
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
                      min={1}
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
              <div className="py-2 mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon Code"
                  />
                  <button className="btn btn-theme">Apply</button>
                </div>
              </div>
              <div className="product-cart-invoice">
                <h6 className="d-flex flex-row justify-content-between">
                  <span>SubTotal </span>
                  <span className="text-right text-secondary">${subtotal.toFixed(2)}</span>
                </h6>
                <h6 className="d-flex flex-row justify-content-between">
                  <span>Delivery </span>
                  <span className="text-right text-secondary">${deliveryFee.toFixed(2)}</span>
                </h6>
                <h5 className="d-flex flex-row justify-content-between mt-3">
                  <span>Total </span>
                  <span className="text-right text-secondary">${(subtotal + deliveryFee).toFixed(2)}</span>
                </h5>
              </div>
            </div>
            <div className="col-lg-6 px-lg-5">
              <h5 className="text-secondary">Shipping Details</h5>
              <hr />
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="input-group floating-label my-2">
                    <input
                      type="number"
                      id="contactPayment"
                      className="form-control"
                    />
                    <label
                      htmlFor="contactPayment"
                      className="floating-control-label"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group floating-label my-2">
                    <input
                      type="text"
                      id="emailPayment"
                      className="form-control"
                    />
                    <label
                      htmlFor="emailPayment"
                      className="floating-control-label"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group floating-label my-2">
                    <textarea
                      id="address"
                      className="form-control"
                      rows={8}
                      defaultValue={""}
                    />
                    <label htmlFor="address" className="floating-control-label">
                      Address
                    </label>
                  </div>
                </div>
              </div>
              <h5 className="text-secondary">Payment Details</h5>
              <hr />
              <div className="row mb-5">
                <div className="col-12">
                  <div className="input-group">
                    <div className="input-group floating-label my-2">
                      <input
                        type="text"
                        id="namePayment"
                        className="form-control"
                        defaultValue="Mikhail Abdillah"
                      />
                      <label
                        htmlFor="namePayment"
                        className="floating-control-label"
                      >
                        Name on Card
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group floating-label my-2">
                    <input
                      type="number"
                      id="cardNumberPayment"
                      className="form-control"
                    />
                    <label
                      htmlFor="cardNumberPayment"
                      className="floating-control-label"
                    >
                      Card Number
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-6 px-2">
                      <div className="input-group floating-label my-2">
                        <input
                          type="number"
                          id="expPayment"
                          className="form-control"
                        />
                        <label
                          htmlFor="expPayment"
                          className="floating-control-label"
                        >
                          Expire Date
                        </label>
                      </div>
                    </div>
                    <div className="col-6 px-2">
                      <div className="input-group floating-label my-2">
                        <input
                          type="number"
                          id="CVVPayment"
                          className="form-control"
                        />
                        <label
                          htmlFor="CVVPayment"
                          className="floating-control-label"
                        >
                          CVV Code
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-theme">
              <span className="icon-next_week" /> Confirm &amp; Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
