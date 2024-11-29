"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Modal from "./Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import Image from "next/image";
import Providers from "./ProgressBar";
import useCartStore from "../(main)/store/CartStore";
import { useSession } from "next-auth/react";
import { CircleUser, LogIn, PowerOff, LayoutDashboard } from "lucide-react";
import { handleSignOut } from "../(auth)/actions/authActions";
import useProductStore from "../(main)/store/useProductStore";

// Updated handleLogout function
const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  try {
    // Redirect to home page after signing out
    await handleSignOut();
  } catch (error) {
    console.error('Logout failed', error);
  }
  window.location.reload();
};



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
  const { products, isLoading, error, fetchProducts } = useProductStore();
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const totalItems = useCartStore((state) => state.totalItems);
  const loadTotalItems = useCartStore((state) => state.loadCart);
 

  useEffect(() => {
    loadTotalItems(); 
  }, [loadTotalItems]);

  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.subCategory))
  );


  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);


  const handleCartClick = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowCart((prev) => !prev);
  };

  const handleShowMobileMenu = () => {
    document.body.classList.toggle("toggle-overflow");
    setShowMobileMenu((prev) => !prev);
  };

  const getAuthLinks = () => {
    if (status === 'authenticated') {
      return [
        { href: '/dashboard', label: "Dashboard", icon: (<LayoutDashboard size={20} />) },
        { href: '#', label: "Log out", icon: (<PowerOff size={20} />) }
      ];
    }

    return [
      { href: '/auth/register', label: "Register", icon: (<CircleUser size={20} />) },
      { href: '/auth/signin', label: "Login", icon: (<LogIn size={20} />) }
    ];
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
              <li className="nav-item px-lg-2 dropdown-hover">
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
                  className="text-secondary text-decoration-none "
                  href="/search"
                >
                  <span className="icon icon-search"></span>
                </Link>

              </div>
            </li>
            <li className="nav-item d-px-1  dropdown-hover" id="account">
              <div className="btn text-secondary">
                <span
                  className="text-secondary bold text-decoration-none font-weight-bold w-25 dropdown-toggle-hover"

                >
                  {!session ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-user"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={10} r={3} />
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>


                  ) : (
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

                  )}
                </span>

                <div className="dropdown-menu px-lg-2">
                  {getAuthLinks().map(({ href, label, icon }, idx) => (
                    <Link
                      key={idx}
                      href={label === "Log out" ? "#" : href}
                      className="dropdown-item d-flex align-items-center px-3 py-2 text-dark"
                      onClick={label === "Log out" ? handleLogout : undefined}
                    >
                      <span className="mr-2 fg-theme">{icon}</span>
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
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
