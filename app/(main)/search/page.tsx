"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js"; // Import Fuse.js
import { fetchProducts, truncateText } from "@/app/utils/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import Image from 'next/image'

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [popularSearches, setPopularSearches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [searchField, setSearchField] = useState("All"); // Default search field
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu state
  const router = useRouter();



  // Handle input change for search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setLoading(true);

    if (query.trim() === "") {
      setFilteredProducts(products.slice(0, 3));
      setLoading(false);
    } else {
      const results = fuse.search(query);
      setFilteredProducts(results.map((result) => result.item));
      setLoading(false);
    }
  };

  // Fetch initial data and popular searches
  useEffect(() => {
    const fetchData = async () => {
      const initialProducts = await fetchProducts();
      setProducts(initialProducts);

      const topProducts = initialProducts
        .sort((a: any, b: any) => b.rating.stars - a.rating.stars)
        .slice(0, 3);
      setPopularSearches(topProducts);

      setFilteredProducts(initialProducts.slice(0, 3));
    };
    fetchData();
  }, []);

  // Handle search field change
  const handleSearchFieldChange = (field: string) => {
    setSearchField(field);
    setDropdownOpen(false); // Close dropdown when an option is selected
  };

  // Handle clear input
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts(products.slice(0, 3));
  };

  // Handle popular search click
  const handlePopularSearchClick = (productName: string) => {
    setSearchQuery(productName);
    const results = fuse.search(productName);
    setFilteredProducts(results.map((result) => result.item));
  };

  // Fuse.js configuration (based on searchField)
  const fuse = useMemo(() => {
    let keys: string[] = [];
    if (searchField === "All") {
      keys = ["name", "category", "subCategory", "keywords", "description"];
    } else {
      keys = [searchField.toLowerCase()];
    }

    return new Fuse(products, {
      keys,
      includeScore: true,
      isCaseSensitive: false,
      threshold: 0.3,
      distance: 100,
      minMatchCharLength: 1,
      ignoreLocation: true,
      shouldSort: true,
      findAllMatches: true,
      useExtendedSearch: true,
    });
  }, [products, searchField]);

  // Open modal
  const openSearchModal = () => {
    setIsModalOpen(true);

  };

  // Close modal
  const closeSearchModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Allow scrolling on the body again
    clearSearch();
  };

  // Close modal when clicked outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal")) {
      closeSearchModal();
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      {/* Search Button / Bar */}
      <div className="container mt-5 text-center">
        <input
          type="text"
          className="form-control d-inline w-75 w-md-50 position-relative"
          placeholder="Search here..."
          value={searchQuery}
          onClick={openSearchModal} // Opens modal on click
          onChange={handleInputChange}
        />
        {/* Clear 'x' button inside the search input */}
        {searchQuery && (
          <button
            type="button"
            className="btn btn-close position-absolute end-0 top-0 m-3 text-black"
            onClick={clearSearch}
            aria-label="Clear"
          >x</button>
        )}
      </div>

      <div className="container text-center py-5">
        <motion.h1
          className="d-flex justify-content-center align-items-center gap-4 text-white display-1 font-weight-bold"
          style={{ fontSize: '30px' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            repeat: Infinity,
            repeatType: "reverse",  // This will make the animation reverse for a smoother effect
            duration: 3,
          }}
        >
          <Image
            width={50}
            height={30}
            src="/img/logo.png"
            alt="OnyxShop logo"
          />
          <span className="fg-theme">Onyx</span>
          <span className="text-dark">Shop</span>
        </motion.h1>

        <motion.p
          className="lead text-dark max-w-md mx-auto mt-4"
          style={{ fontSize: '16px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          Welcome! Explore our store to uncover exclusive products and amazing deals. Begin your journey by searching!
        </motion.p>
      </div>




      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1050,
          }}
          onClick={handleClickOutside} // Close modal on clicking outside
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              maxWidth: "90%",
              height: "75%",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            <div className="modal-content h-100 mb-4">
              <div
                className="modal-header position-relative d-flex align-items-center justify-content-center"
                style={{
                  borderBottom: "none",
                  paddingBottom: 0,
                }}
              >
                <div
                  className="position-relative w-75"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Search Input */}
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    style={{
                      paddingRight: "40px", // Add padding to prevent overlap with button
                    }}
                  />
                  {/* Clear 'x' Button Inside Input */}
                  {searchQuery && (
                    <button
                      type="button"
                      className="position-absolute"
                      onClick={clearSearch}
                      aria-label="Clear"
                      style={{
                        right: "10px", // Align to the right inside the input
                        top: "50%",
                        transform: "translateY(-50%)", // Center vertically
                        fontSize: "30px",
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#6c757d", // Muted text color
                        cursor: "pointer",
                      }}
                    >
                      &times;
                    </button>
                  )}
                </div>
                {/* Close Modal Button */}
                <button
                  type="button"
                  className="btn position-absolute"
                  onClick={closeSearchModal}
                  aria-label="Close"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "40px",
                    border: "none",
                    color: "#000",
                    borderRadius: "50%",
                    width: "30px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
              </div>



              <div className="modal-body overflow-auto">
                {/* Custom Dropdown */}
                <div className="relative mb-3">
                  <label htmlFor="searchField" className="form-label block mb-2">
                    Search By:
                  </label>
                  <div
                    className="cursor-pointer border p-3 rounded-md bg-white"
                    onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                  >
                    <div className="flex justify-between items-center">
                      <span>{searchField}</span>
                      <span className="material-icons">
                        <svg style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          {/*!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>

                      </span>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute bg-white w-full mt-1 shadow-lg border rounded-md z-10" style={{ left: '0' }}>
                        {["All", "name", "category", "subCategory", "keywords", "description"].map(
                          (option) => (
                            <li
                              key={option}
                              className="p-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleSearchFieldChange(option)}
                            >
                              {option}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Popular Searches */}
                <ul className="list-inline text-center mt-2">
                  <li className="list-inline-item">Popular Search: </li>
                  {popularSearches.map((product: any) => (
                    <li className="list-inline-item" key={product.id}>
                      <a
                        href="#"
                        className="text-secondary badge badge-light"
                        onClick={() => handlePopularSearchClick(product.name)}
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Loading Spinner */}
                {loading && (
                  <div className="d-flex justify-content-center mt-3">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {/* Filtered Products */}
                <div className="mt-3">
                  {filteredProducts.length > 0 ? (
                    <ul className="list-group">
                      {filteredProducts.map((product: any) => (
                        <li key={product.id} className="list-group-item">
                          <div className="d-flex align-items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-thumbnail"
                              style={{
                                width: "50px", // Reduced image size
                                height: "50px",
                                marginRight: "16px",
                              }}
                            />
                            <div className="ms-3">
                              <h6>
                                <Link
                                  href={`/product/product-detail/${product.id}#top-nav`}
                                  className="font-bold fg-theme"
                                >
                                  {truncateText(product.name, 20)}
                                </Link>
                              </h6>
                              <p className="text-secondary">
                                {truncateText(product.description, 30)}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No products found.</p>
                  )}


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
