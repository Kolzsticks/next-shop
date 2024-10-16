
interface CartButtonProps {
  handleCartClick: () => void;
}

const Cart: React.FC<CartButtonProps> = ({handleCartClick}) => {

  return (
    <>
      <>
        {/* Cart */}
        <div className="charm right show" id="cartView">
          <div className="charm-header bg-white fg-dark">
            <span onClick={handleCartClick} className="btn-back" >
              <span className="icon-arrow_back fs-large" />
            </span>
            <p className="ml-3 mb-0 fs-large">
              Your Cart{" "}
              <span className="badge bg-theme fg-white ml-2 fs-normal">6</span>
            </p>
          </div>
          <div className="charm-content">
            <ul className="product-cart-list">
              <li className="cart-item">
                <div className="img-place">
                  <img src="/img/Super_Slim-fit_Pants.jpg" alt="" />
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
                  <img src="/img/Faux_Fur_Jacket.jpg" alt="" />
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
            <div className="product-cart-invoice">
              <h5 className="d-flex flex-row justify-content-between">
                <span>SubTotal :</span>
                <span className="text-right text-secondary">$39.91</span>
              </h5>
              <div className="text-center mt-4">
                <a href="/checkout" className="btn btn-theme btn-block">
                  Proceed Checkout
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End cart */}
      </>
    </>
  );
};

export default Cart;
