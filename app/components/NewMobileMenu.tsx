"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../css/mobile-menu.css";

const NewMobileMenu: React.FC = () => {
  const currentPath = usePathname();
  // Navigation items array
  const navItems = [
    { href: "/", iconClass: "icon-home", label: "Home" },
    { href: "/product", iconClass: "icon-shopping_basket", label: "Product" },
    { href: "/search", iconClass: "icon-search", label: "Search" },
    { href: "/auth/register", iconClass: "icon-user", label: "Profile" },
  ];

  return (
    <div className="fixed-bottom d-md-none bottom-nav">
      <ul className="nav justify-content-around text-white m-0 p-0">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <Link
              prefetch={true}
              href={item.href}
              className={`bottom-nav-link d-flex justify-content-center align-items-center ${
                currentPath === item.href ? "active-nav" : ""
              }`}
              aria-label={item.label}
            >
              <span className={item.iconClass} style={{ fontSize: "24px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewMobileMenu;
