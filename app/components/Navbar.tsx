"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Modal from "./Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/functions";
import { Product } from "../types/types";
import Image from "next/image";
import Providers from "./ProgressBar";
import useCartStore from "../(main)/store/CartStore";
import { useSession } from "next-auth/react";
import { UserCheck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", iconClass: "icon-home2", isActive: true },
  { href: "/about", label: "About", iconClass: "icon-domain" },
  { href: "/contact", label: "Contact", iconClass: "icon-contacts" },
];

const dropdownLinks = [
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Blog" },
  { href: "/checkout", label: "Checkout" },
];

const Navbar: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { data: session } = useSession();


  // Access totalItems and subscribe to its changes
  const totalItems = useCartStore((state) => state.totalItems);
  const loadTotalItems = useCartStore((state) => state.loadCart);

  useEffect(() => {
    loadTotalItems(); // Load totalItems into Zustand from localStorage
  }, [loadTotalItems]);

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

  const handleCartClick = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowCart((prev) => !prev);
  };

  const handleShowMobileMenu = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <Providers>
      <nav className="navbar navbar-expand-lg navbar-light bg-whiter shadow-sm" id="top-nav">
        <div className="d-flex justify-content-between align-items-center gap-3 w-100 container py-2">
          <Link prefetch={true} href="/" className="navbar-brand mb-2 mb-sm-0">
            <Image
              width={30}
              height={30}
              src="/img/logo.png"
              alt="OnyxShop logo"
            />
            <span className="fg-theme">Onyx</span>Shop
          </Link>
          <div className="navbar-collapse collapse" id="mobileNav">
            <ul className="navbar-nav d-flex justify-content-center w-100">
              {navLinks.map(({ href, label, iconClass, isActive }, idx) => (
                <li key={idx} className="nav-item px-lg-2">
                  <Link prefetch={true}
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
              <li className="nav-item px-lg-2 dropdown-hover ">
                <Link prefetch={true}
                  href="/product"
                  className="nav-link dropdown-toggle-hover"
                >
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div>{" "}
                  Category
                </Link>
                <div className="dropdown-menu" >
                  {uniqueCategories.map((category, idx) => (
                    <Link prefetch={true} key={idx} href="#" className="dropdown-item">
                      {category}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover">
                <Link prefetch={true} href="#" className="nav-link dropdown-toggle-hover mb-0">
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div>{" "}
                  Pages
                </Link>
                <div className="dropdown-menu">
                  {dropdownLinks.map(({ href, label }, idx) => (
                    <Link prefetch={true} key={idx} href={href} className="dropdown-item">
                      {label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <ul className="nav d-flex justify-content-between align-items-center w-auto">
            <li className="nav-item px-1 d-none d-lg-block">
              <div className="btn btn-fab text-secondary">
                <Link prefetch={true}
                  className="text-secondary text-decoration-none"
                  href="/search"
                >
                  <span className="icon icon-search"></span>
                </Link>
              </div>
            </li>
            <li className="nav-item d-px-1 " id="account">
              <div className="btn text-secondary">
                <Link prefetch={true}
                  className="text-secondary bold text-decoration-none font-weight-bold w-25"
                  href="/dashboard"
                >
                  {session ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fe6c32"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-check"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  ) : (
                    <svg
                      className="icon-signin"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  )}
                </Link>
              </div>
            </li>
            <li onClick={handleCartClick} className="nav-item px-1">
              <div className="btn btn-fab text-secondary">
                <span className="icon icon-shopping-cart" />
                <div className="badge badge-theme">{totalItems}</div>
              </div>
            </li>
            <li onClick={handleShowMobileMenu} className="nav-item d-lg-none px-1">
              <div className="btn btn-fab text-secondary">
                <span className="icon icon-menu" />
              </div>
            </li>
          </ul>


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
    </Providers>
  );
};

export default Navbar;
