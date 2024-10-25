import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="site-section py-5">
        <div className="container">
          <h2 className="text-center">Checkout &amp; Payments</h2>
          <div className="row justify-content-center mt-5">
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
            <div className="col-lg-6 px-lg-5">
              <h5 className="text-secondary">Your Orders</h5>
              <ul className="product-cart-list">
                <li className="cart-item">
                  <div className="img-place">
                    <Image
                      src="/img/Super_Slim-fit_Pants.jpg"
                      alt=""
                      width={400}
                      height={400}
                      unoptimized={true}
                    />
                  </div>
                  <div className="caption">
                    <h5>Product Name</h5>
                    <div className="mb-0">
                      Qty:
                      <div className="d-inline-flex number-input number-input-sm">
                        <button className="btn btn-theme btn-sm btn-decrease">
                          <span className="icon-minus" />
                        </button>
                        <input
                          type="number"
                          className="form-control"
                          name="number"
                          defaultValue={4}
                          min={0}
                          max={250}
                        />
                        <button className="btn btn-theme btn-sm btn-increase">
                          <span className="icon-plus" />
                        </button>
                      </div>
                    </div>
                    <p className="mb-0">
                      Price: <span className="fg-theme">$19.99</span>
                    </p>
                  </div>
                  <button className="btn btn-fab btn-sm">
                    <span className="icon-trash-o" />
                  </button>
                </li>
                <li className="cart-item">
                  <div className="img-place">
                    <Image
                      src="/img/Super_Slim-fit_Pants.jpg"
                      alt=""
                      width={400}
                      height={400}
                      unoptimized={true}
                    />
                  </div>
                  <div className="caption">
                    <h5>Product Name</h5>
                    <div className="mb-0">
                      Qty:
                      <div className="d-inline-flex number-input number-input-sm">
                        <button className="btn btn-theme btn-sm btn-decrease">
                          <span className="icon-minus" />
                        </button>
                        <input
                          type="number"
                          className="form-control"
                          name="number"
                          defaultValue={2}
                          min={0}
                          max={250}
                        />
                        <button className="btn btn-theme btn-sm btn-increase">
                          <span className="icon-plus" />
                        </button>
                      </div>
                    </div>
                    <p className="mb-0">
                      Price: <span className="fg-theme">$19.99</span>
                    </p>
                  </div>
                  <button className="btn btn-fab btn-sm">
                    <span className="icon-trash-o" />
                  </button>
                </li>
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
                  <span className="text-right text-secondary">$39.91</span>
                </h6>
                <h6 className="d-flex flex-row justify-content-between">
                  <span>Shipping </span>
                  <span className="text-right text-secondary">$3.99</span>
                </h6>
                <h5 className="d-flex flex-row justify-content-between mt-3">
                  <span>Total </span>
                  <span className="text-right text-secondary">$43.8</span>
                </h5>
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
