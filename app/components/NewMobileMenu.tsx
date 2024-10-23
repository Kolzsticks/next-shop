"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import '../css/mobile-menu.css'

const NewMobileMenu: React.FC = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="fixed-bottom d-md-none bottom-nav">
        <ul className="nav justify-content-around text-white m-0 p-0">
          <li className="nav-item">
            <Link
              href="/"
              className={`bottom-nav-link  d-flex justify-content-center align-items-center ${
                currentPath === "/" ? "active-nav" : ""
              }`}
            >
              <span className="icon-home" style={{ fontSize: "24px" }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/product"
              className={`bottom-nav-link  d-flex justify-content-center align-items-center ${
                currentPath === "/product" ? "active-nav" : ""
              }`}
            >
              <span
                className="icon-shopping_basket"
                style={{ fontSize: "24px" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search"
              className={`bottom-nav-link  d-flex justify-content-center align-items-center ${
                currentPath === "/search" ? "active-nav" : ""
              }`}
            >
              <span
                className="icon icon-search"
                style={{ fontSize: "24px" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/register"
              className={`bottom-nav-link  d-flex justify-content-center align-items-center ${
                currentPath === "/contact" ? "active-nav" : ""
              }`}
            >
              <span className="icon-user" style={{ fontSize: "24px" }} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewMobileMenu;
