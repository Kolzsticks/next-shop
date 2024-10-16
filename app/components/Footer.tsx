const Footer = () => {
  const customerServices = [
    "Contact Us",
    "Returns",
    "Order History",
    "Site Map",
    "My Account",
  ];

  const information = [
    "About Us",
    "Delivery Info",
    "Privacy Policy",
    "Terms & Condition",
    "Warranty",
    "FAQ",
  ];

  const followUs = [
    { platform: "Facebook", icon: "icon-facebook" },
    { platform: "Twitter", icon: "icon-twitter" },
    { platform: "Instagram", icon: "icon-instagram" },
    { platform: "Pinterest", icon: "icon-pinterest" },
    { platform: "YouTube", icon: "icon-youtube" },
  ];

  const links = [
    "Online Shopping",
    "Promotions",
    "My Orders",
    "Help",
    "Customer Services",
    "Discount",
    "Support",
    "Most Popular",
    "New Arrivals",
    "Special Products",
    "Premium Products",
    "Manufactures",
    "Our Stories",
    "Shipping",
    "Payments",
    "Refunds",
    "Checkout",
    "Terms & Conditions",
    "Policy",
    "Shopping",
    "Site Map",
    "FAQ",
  ];

  return (
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
              {customerServices.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-6 col-lg-2 mt-3">
            <ul className="list-unstyled">
              <li className="fs-large fg-white">Information</li>
              {information.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-5 col-md-4 col-lg-2 mt-3">
            <ul className="list-unstyled">
              <li className="fs-large fg-white">Follow Us</li>
              {followUs.map((social, index) => (
                <li key={index}>
                  <a href="#">
                    <span className={social.icon} /> {social.platform}
                  </a>
                </li>
              ))}
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
          {links.map((link, index) => (
            <li className="list-inline-item fs-small" key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>

        <p className="text-center fg-white">
          Copyright © 2022 Shoperce. Designed and Developed by{" "}
          <a href="https://graygrids.com/" rel="nofollow">
            GrayGrids
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
