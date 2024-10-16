// import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="site-footer">
  <div className="card-newsletter">
    <div className="row align-items-center">
      <div className="col-md-6 mt-2">
        <h4>Sign Up For Newsletter</h4>
        <p className="mb-0">Be the first to know. Sign Up Newsletter today</p>
      </div>
      <div className="col-md-6 mt-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter email..."
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-3 mt-3">
        <ul className="list-unstyled">
          <li className="fs-large fg-white">Customer Services</li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Order History</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-2 mt-3">
        <ul className="list-unstyled">
          <li className="fs-large fg-white">Information</li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Delivery Info</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms &amp; Condition</a>
          </li>
          <li>
            <a href="#">Warranty</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-5 col-md-4 col-lg-2 mt-3">
        <ul className="list-unstyled">
          <li className="fs-large fg-white">Follow Us</li>
          <li>
            <a href="#">
              <span className="icon-facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-twitter" /> Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-instagram" /> Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-pinterest" /> Pinterest
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-youtube" /> Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-7 col-md-8 col-lg-5 mt-3">
        <div className="fs-large fg-white">Get Apps</div>
        <a href="#" className="apps-download-container">
          <div className="row no-gutters fg-white align-items-center">
            <div className="col-4 text-center">
              <span className="icon icon-apple" />
            </div>
            <div className="col-8">
              <small>Download on the</small>
              <p className="fg-white mb-0">Apps Store</p>
            </div>
          </div>
        </a>
        <a href="#" className="apps-download-container">
          <div className="row no-gutters fg-white align-items-center">
            <div className="col-4 text-center">
              <span className="icon icon-android" />
            </div>
            <div className="col-8">
              <small>Get it on</small>
              <p className="fg-white mb-0">Google Play</p>
            </div>
          </div>
        </a>
        <br />
        <div className="fs-large fg-white mb-2 mt-3">Secure Payments</div>
        <div
          className="img-place auto-v justify-content-start"
          style={{ height: 30 }}
        >
          <img src="/img/payment.png" alt="Payments" height={30} />
        </div>
      </div>
    </div>
    <hr className="mt-5 mb-4" />
    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item fs-small">
        <a href="#">Online Shopping</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Promotions</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">My Orders</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Help</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Customer Services</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Discount</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Support</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Most Popular</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">New Arrivals</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Special Products</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Premium Products</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Manufactures</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Our Stories</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Shipping</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Payments</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Refunds</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Checkout</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Terms &amp; Conditions</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Policy</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Shopping</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">Site Map</a>
      </li>
      <li className="list-inline-item fs-small">
        <a href="#">FAQ</a>
      </li>
    </ul>
    <p className="text-center fg-white">
      Copyright © 2022 Shoperce. Designed and Developed by{" "}
      <a href="https://graygrids.com/" rel="nofollow">
        GrayGrids
      </a>
    </p>
  </div>
</div>

    </>
  )
}

export default Footer