import React from "react";

const Secure = () => {
  return (
    <>
      <div className="site-section info-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-info text-center border-0">
                <div className="card-body">
                  <div className="img-place">
                    <img src="/img/svg/payment.svg" alt="" />
                  </div>
                  <h5>100% Secure Payments</h5>
                  <p>
                    We offer competitive prices on our 100 million plus product
                    range.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-info text-center">
                <div className="card-body">
                  <div className="img-place">
                    <img src="/img/svg/around-world.svg" alt="" />
                  </div>
                  <h5>World Wide Delivery</h5>
                  <p>
                    We offer competitive prices on our 100 million plus product
                    range.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-info text-center">
                <div className="card-body">
                  <div className="img-place">
                    <img src="/img/svg/customer-service.svg" alt="" />
                  </div>
                  <h5>24/7 Help Center</h5>
                  <p>
                    We offer competitive prices on our 100 million plus product
                    range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secure;
