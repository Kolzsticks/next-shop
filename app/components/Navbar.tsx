"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ModalSearch from "./ModalSearch";
import Modal from "./Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const categories = [
  {
    title: "Mens",
    items: ["Mens #1", "Mens #2", "Mens #3"],
  },
  {
    title: "Womens",
    items: ["Womens #1", "Womens #2", "Womens #3"],
  },
  {
    title: "Divided",
    items: ["Divided #1", "Divided #2", "Divided #3", "Divided #4"],
  },
  {
    title: "Kids",
    items: ["Kids #1", "Kids #2", "Kids #3"],
  },
  {
    title: "Moslem",
    items: ["Moslem #1", "Moslem #2", "Moslem #3", "Moslem #4"],
  },
  {
    title: "Accessories",
    items: [
      "Accessories #1",
      "Accessories #2",
      "Accessories #3",
      "Accessories #4",
      "Accessories #5",
    ],
  },
];

const socialLinks = [
  { className: "icon-facebook", bgClass: "bg-facebook" },
  { className: "icon-twitter", bgClass: "bg-twitter" },
  { className: "icon-google-plus", bgClass: "bg-google-plus" },
];

const navLinks = [
  { href: "/", label: "Home", iconClass: "icon-home2", isActive: true },
  { href: "/about", label: "About", iconClass: "icon-domain" },
  { href: "/contact", label: "Contact", iconClass: "icon-contacts" },
];

const dropdownLinks = [
  { href: "/product", label: "Product" },
  { href: "product-details.html", label: "Product Details" },
  { href: "/blog", label: "Blog" },
  { href: "blog-details.html", label: "Blog Details" },
  { href: "/checkout", label: "Checkout" },
];

const Navbar: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const {totalItems} = useCart();

  useEffect(() => {
    // Update local storage whenever totalItems changes
    localStorage.setItem('totalCartItems', totalItems.toString());
  }, [totalItems]);


  const handleCartClick = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowCart((prev) => !prev);
  };

  const handleShowSearchModal = () => {
    setShowSearchModal((prev) => !prev);
  };

  const handleShowMobileMenu = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      {/* Button Back to top */}
      <div className="back-to-top">
        <span className="icon-angle-up" />
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-whiter shadow-sm">
        <div className="container py-2">
          <Link href="/" className="navbar-brand mb-2 mb-sm-0">
            <img
              style={{ width: "30px" }}
              src="/img/logo.png"
              alt="shoperce logo"
            />
            <span className="fg-theme">Shop</span>erce
          </Link>
          <div className="navbar-collapse collapse" id="mobileNav">
            <ul className="navbar-nav">
              {navLinks.map(({ href, label, iconClass, isActive }, idx) => (
                <li key={idx} className="nav-item px-lg-2">
                  <Link
                    href={href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <div className="sr-only">
                      <span className={iconClass} />
                    </div>{" "}
                    {label}
                  </Link>
                </li>
              ))}
              <li className="nav-item px-lg-2 dropdown-hover dropdown-custom">
                <Link
                  href="/product"
                  className="nav-link dropdown-toggle-hover"
                >
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div>{" "}
                  Category
                </Link>
                <div className="dropdown-menu">
                  <div className="container py-2">
                    <div className="row px-md-4">
                      {categories.map(({ title, items }, idx) => (
                        <div key={idx} className="col-lg-3 my-2">
                          <ul className="list-unstyled">
                            <li className="lead fg-theme">{title}</li>
                            {items.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href="product.html"
                                  className="text-secondary"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover">
                <Link href="#" className="nav-link dropdown-toggle-hover mb-0">
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div>{" "}
                  Pages
                </Link>
                <div className="dropdown-menu">
                  {dropdownLinks.map(({ href, label }, idx) => (
                    <Link key={idx} href={href} className="dropdown-item">
                      {label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="nav justify-content-end">
              <li
                className="nav-item px-1 d-none d-lg-block"
                onClick={handleShowSearchModal}
              >
                <div className="btn btn-fab text-secondary">
                  <span className="icon icon-search" />
                </div>
              </li>
              <li className="nav-item px-1 dropdown" id="account">
                <div className="btn dropdown-toggle-hover text-secondary">
                  <span className="icon icon-user-circle-o" />
                  <span className="d-none d-md-inline-block">My Account</span>
                  <div className="dropdown-menu p-0 mt-0">
                    <div className="account-switch active">
                      <form className="card card-body border-0">
                        <h5 className="text-center border-bottom pb-3">
                          Login
                        </h5>
                        {/* Login Form */}
                        <FormFields />
                        <div className="text-center pb-3">
                          <small className="d-block mb-2">Login With</small>
                          <div className="social-connect">
                            {socialLinks.map(({ className, bgClass }, idx) => (
                              <Link
                                key={idx}
                                href="#"
                                className={`social-link ${bgClass} fg-white`}
                              >
                                <span className={className} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Register Form */}
                    <AccountSwitch />
                  </div>
                </div>
              </li>
              <li onClick={handleCartClick} className="nav-item px-1">
                <div className="btn btn-fab text-secondary">
                  <span className="icon icon-shopping-cart" />
                  <div className="badge badge-theme">{totalItems}</div>
                </div>
              </li>
              <li
                onClick={handleShowMobileMenu}
                className="nav-item d-lg-none px-1"
              >
                <div className="btn btn-fab text-secondary">
                  <span className="icon icon-menu" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showCart && (
        <>
          <Modal handleClicks={handleCartClick} />
          <Cart handleCartClick={handleCartClick}  />
        </>
      )}
      {showSearchModal && (
        <ModalSearch handleShowSearchModal={handleShowSearchModal} />
      )}
      {showMobileMenu && (
        <>
          <Modal handleClicks={handleShowMobileMenu} />
          <MobileMenu handleShowMobileMenu={handleShowMobileMenu} />
        </>
      )}
    </>
  );
};

const FormFields = () => (
  <>
    <div className="input-group floating-label my-2">
      <input type="text" id="usernameLogin" className="form-control" />
      <label htmlFor="usernameLogin" className="floating-control-label">
        Username
      </label>
    </div>
    <div className="input-group floating-label my-2">
      <input type="password" id="passwordLogin" className="form-control" />
      <label htmlFor="passwordLogin" className="floating-control-label">
        Password
      </label>
    </div>
    <div className="input-group justify-content-between my-2 align-items-center">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="remember" />
        <label htmlFor="remember" className="custom-control-label">
          Remember Me
        </label>
      </div>
      <Link href="#" className="fs-small fg-theme">
        Forgot Password?
      </Link>
    </div>
    <button type="submit" className="btn btn-theme btn-block mb-1">
      Login
    </button>
  </>
);

const AccountSwitch = () => (
  <div className="account-switch">
    <form className="card card-body border-0">
      <h5 className="text-center border-bottom pb-3">Register</h5>
      <FormFields />
    </form>
  </div>
);

export default Navbar;
