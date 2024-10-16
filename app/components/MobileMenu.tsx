'use client';
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MobileMenuProps {
  handleShowMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleShowMobileMenu }) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the mobile menu container

  useEffect(() => {
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      // Restrict clicks only within the mobile menu component
      if (menuRef.current && menuRef.current.contains(target)) {
        if (anchor) {
          event.preventDefault();
          const href = anchor.getAttribute('href');

          if (href) {
            handleShowMobileMenu(); // Close mobile menu
            router.push(href); // Navigate to the clicked link's href
          }
        }
      }
    };

    // Add event listener to clicks within the mobile menu component
    document.addEventListener('click', handleLinkClick);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener('click', handleLinkClick);
    };
  }, [handleShowMobileMenu, router]);

  const categories = [
    { title: 'Mens', links: ['Mens #1', 'Mens #2', 'Mens #3'] },
    { title: 'Womens', links: ['Womens #1', 'Womens #2', 'Womens #3'] },
    { title: 'Divided', links: ['Divided #1', 'Divided #2', 'Divided #3', 'Divided #4'] },
    { title: 'Kids', links: ['Kids #1', 'Kids #2', 'Kids #3'] },
    { title: 'Moslem', links: ['Moslem #1', 'Moslem #2', 'Moslem #3', 'Moslem #4'] },
    { title: 'Accessories', links: ['Accessories #1', 'Accessories #2', 'Accessories #3', 'Accessories #4', 'Accessories #5'] },
  ];

  const pageLinks = [
    { href: '/product', label: 'Product' },
    { href: 'product-details.html', label: 'Product Details' },
    { href: '/blog', label: 'Blog' },
    { href: 'blog-details.html', label: 'Blog Details' },
    { href: '/checkout', label: 'Checkout' },
  ];

  return (
    <>
      <div ref={menuRef} className="charm left show" id="mobileMenu"> {/* Attach ref to the menu container */}
        <div className="charm-header">
          <p className="ml-3 mb-0 fs-large">Main Menu</p>
          <span
            onClick={handleShowMobileMenu}
            className="btn-back"
            
          >
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
                  <div className="sr-only">
                    <span className="icon-home2" />
                  </div> Home
                </Link>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover dropdown-custom">
                <Link href="/product" className="nav-link dropdown-toggle-hover">
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div> Category
                </Link>
                <div className="dropdown-menu">
                  <div className="container py-2">
                    <div className="row px-md-4">
                      {categories.map((category, index) => (
                        <div className="col-lg-3 my-2" key={index}>
                          <ul className="list-unstyled">
                            <li className="lead fg-theme">{category.title}</li>
                            {category.links.map((link, idx) => (
                              <li key={idx}>
                                <Link href="/product" className="text-secondary">
                                  {link}
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
              <li className="nav-item px-lg-2">
                <Link href="/about" className="nav-link">
                  <div className="sr-only">
                    <span className="icon-domain" />
                  </div> About
                </Link>
              </li>
              <li className="nav-item px-lg-2 dropdown-hover">
                <Link href="/product" className="nav-link dropdown-toggle-hover mb-0">
                  <div className="sr-only">
                    <span className="icon-format_list_bulleted" />
                  </div> Pages
                </Link>
                <div className="dropdown-menu">
                  {pageLinks.map((pageLink, idx) => (
                    <Link key={idx} href={pageLink.href} className="dropdown-item">
                      {pageLink.label}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item px-lg-2">
                <Link href="/contact" className="nav-link">
                  <div className="sr-only">
                    <span className="icon-contacts" />
                  </div> Contact
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
