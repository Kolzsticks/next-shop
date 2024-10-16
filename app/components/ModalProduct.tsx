"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

interface ModalProductProps {
  handleClose: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ handleClose }) => {
 

  return (
    <>
      <div
        className="custom-modal fade show"
        id="modalProduct"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="productLabel"
        style={{ display: "block", overflowY: "auto", overflowX: "hidden" }}
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true" className="icon-close2" />
              </button>
              <div className="row">
                <div className="col-md-6">
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={1}
                  >
                    {/* Add SwiperSlide for each image */}
                    <SwiperSlide>
                      <div className="img-place">
                        <img src="/img/Faux_Fur_Jacket_(2).jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img-place">
                        <img src="/img/Faux_Fur_Jacket_(3).jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img-place">
                        <img src="/img/Faux_Fur_Jacket.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img-place">
                        <img src="/img/Faux_Fur_Jacket_(1).jpg" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-md-6">
                  <h4 className="modal-title" id="productLabel">
                    Product Title
                  </h4>
                  <div className="ratings text-warning">
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star-o" />
                  </div>
                  <p className="mt-3">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua...
                  </p>
                  <p>
                    <span className="fs-large fw-bold">Availability:</span> 240
                  </p>
                  <p className="fs-large fw-bold mb-1 mt-3">Color:</p>
                  <div className="color-pick">
                    <span className="color-item bg-danger" />
                    <span className="color-item bg-warning" />
                    <span className="color-item bg-success" />
                    <span className="color-item bg-primary" />
                    <span className="color-item bg-dark" />
                  </div>
                  <p className="fs-large fw-bold mb-1 mt-3">Size:</p>
                  <div className="btn-group btn-group-gap">
                    <button className="btn btn-theme-outline btn-sm">XS</button>
                    <button className="btn btn-theme-outline btn-sm">S</button>
                    <button className="btn btn-theme-outline btn-sm">M</button>
                    <button className="btn btn-theme-outline btn-sm">L</button>
                    <button className="btn btn-theme-outline btn-sm">XL</button>
                  </div>
                  <p className="fs-large fw-bold mb-1 mt-3">Quantity:</p>
                  <div className="number-input">
                    <button className="btn btn-theme btn-sm btn-decrease">
                      <span className="icon-minus" />
                    </button>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      min={0}
                      max={250}
                    />
                    <button className="btn btn-theme btn-sm btn-increase">
                      <span className="icon-plus" />
                    </button>
                  </div>
                  <h5 className="mt-4 mb-3">
                    Price: <span className="fg-theme">$29.99</span>
                  </h5>
                  <a href="#" className="btn btn-theme-outline mr-2 my-1">
                    <span className="icon-add_shopping_cart" /> Add to Cart
                  </a>
                  <a href="checkout.html" className="btn btn-theme my-1">
                    Proceed Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
