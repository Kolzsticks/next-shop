"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Modal from "./Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { fetchProducts } from "../utils/functions";
import { Product } from "../types/types";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", iconClass: "icon-home2", isActive: true },
  { href: "/about", label: "About", iconClass: "icon-domain" },
  { href: "/contact", label: "Contact", iconClass: "icon-contacts" },
];

const dropdownLinks = [
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Blog" },
];

const Navbar: React.FC = () => {
  // State to store products
  const [products, setProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { totalItems } = useCart();
  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.subCategory))
  );

  // Fetch products on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (totalItems !== null) {
      localStorage.setItem("totalCartItems", totalItems.toString());
    }
  }, [totalItems]);

  const handleCartClick = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowCart((prev) => !prev);
  };

  const handleShowMobileMenu = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      <div className="back-to-top" style={{ visibility: "visible" }}>
        <span className="icon-angle-up"></span>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-whiter shadow-sm">
        <div className="container py-2">
          <Link href="/" className="navbar-brand mb-2 mb-sm-0">
            <Image
              width={50}
              height={50}
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
                <div className="dropdown-menu" style={{ maxWidth: "400px" }}>
                  <div className="container py-2">
                    {uniqueCategories.map((category, idx) => (
                      <div key={idx} className=" my-2">
                        <ul className="list-unstyled">
                          <Link href="#" className="fg-theme">
                            {category}
                          </Link>
                        </ul>
                      </div>
                    ))}
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
              <li className="nav-item px-1 d-none d-lg-block">
                <div className="btn btn-fab text-secondary">
                  <Link
                    className="text-secondary text-decoration-none"
                    href="/search"
                  >
                    {" "}
                    <span className="icon icon-search"></span>
                  </Link>
                </div>
              </li>
              <li className="nav-item px-1 dropdown" id="account">
                <div className="btn dropdown-toggle-hover text-secondary">
                  <Link
                    className="text-secondary bold text-decoration-none font-weight-bold"
                    href="/register"
                  >
                    <span className="">
                      <svg
                        className="icon-signin"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                      </svg>
                    </span>
                  </Link>
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
          <Cart handleCartClick={handleCartClick} />
        </>
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

export default Navbar;
