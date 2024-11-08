"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { fetchProducts } from "../utils/functions";
import { Product } from "../types/types";

interface MobileMenuProps {
  handleShowMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleShowMobileMenu }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the mobile menu container
  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.subCategory))
  );

  useEffect(() => {
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (menuRef.current?.contains(target) && anchor) {
        event.preventDefault();
        handleShowMobileMenu();
        router.push(anchor.getAttribute("href") || "/");
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [handleShowMobileMenu, router]);

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

  const pageLinks = [
    { href: "/product", label: "Product" },
    { href: "/blog", label: "Blog" },
    { href: "/checkout", label: "Checkout" },
  ];

  return (
    <>
      <div ref={menuRef} className="real-mobile-menu left show" id="mobileMenu">
        {" "}
        {/* Attach ref to the menu container */}
        <div className="charm-header">
          <p className="ml-3 mb-0 fs-large">Main Menu</p>
          <span onClick={handleShowMobileMenu} className="btn-back">
            <span className="icon-arrow_forward fs-large" />
          </span>
        </div>
        <div className="charm-content">
          <div className="input-group my-2">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="mobile-menu">
            <ul className="navbar-nav">
              <li className="nav-item px-lg-2">
                <Link href="/" className="nav-link active">
                  <div className="sr-only"></div> Home
                </Link>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover dropdown-custom">
                <span className="nav-link dropdown-toggle-hover">
                  <div className="sr-only"></div> Category
                </span>
                <div className="dropdown-menu">
                  <div className="container py-2">
                    <div className="d-flex flex-column">
                      {uniqueCategories.map((category, idx) => (
                        <div key={idx} className=" my-2">
                          <ul className=" list-unstyled">
                            <Link href="#" className="fg-theme">
                              {category}
                            </Link>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item px-lg-2">
                <Link href="/about" className="nav-link">
                  <div className="sr-only"></div> About
                </Link>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover">
                <span className="nav-link dropdown-toggle-hover mb-0">
                  <div className="sr-only"></div> Pages
                </span>
                <div className="dropdown-menu">
                  {pageLinks.map((pageLink, idx) => (
                    <Link
                      key={idx}
                      href={pageLink.href}
                      className="dropdown-item"
                    >
                      {pageLink.label}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item px-lg-2">
                <Link href="/contact" className="nav-link">
                  <div className="sr-only"></div> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
