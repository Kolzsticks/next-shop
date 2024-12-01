"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js"; // Import Fuse.js
import { fetchProducts, truncateText } from "@/app/utils/functions";
import Link from "next/link";

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [popularSearches, setPopularSearches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Fuse.js configuration
  const options = useMemo(
    () => ({
      keys: ["name", "category"],
      includeScore: true,
      isCaseSensitive: false,
      threshold: 0.3,
      distance: 100,
      minMatchCharLength: 1,
      ignoreLocation: true,
      shouldSort: true,
      findAllMatches: true,
      useExtendedSearch: true,
    }),
    []
  );

  const fuse = useMemo(() => new Fuse(products, options), [products, options]);

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

  // Clear search input
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts(products.slice(0, 3));
  };

  // Handle click on popular search item
  const handlePopularSearchClick = (productName: string) => {
    setSearchQuery(productName);
    const results = fuse.search(productName);
    setFilteredProducts(results.map((result) => result.item));
  };

  // Open the modal
  const openSearchModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
  };

  // Close the modal
  const closeSearchModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Allow scrolling on the body again
    clearSearch();
  };

  // Close modal if click is outside of modal content
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
          className="form-control d-inline w-75 w-md-50 position-relative" // Adjusted width for mobile
          placeholder="Search here..."
          value={searchQuery}
          onClick={openSearchModal} // Opens modal on click
          onChange={handleInputChange}
        />
        {/* Clear 'x' button inside the search input */}
        {searchQuery && (
          <button
            type="button"
            className="btn-close position-absolute end-0 top-0 m-3"
            onClick={clearSearch}
            aria-label="Clear"
          />
        )}
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
              marginTop: "20px", // Added top margin
            }}
          >
            <div className="modal-content h-100">
              <div
                className="modal-header"
                style={{
                  borderBottom: "none",
                  justifyContent: "center",
                  paddingBottom: 0,
                }}
              >
                <input
                  type="text"
                  className="form-control w-75"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="btn-close position-absolute end-0 top-0 m-3"
                  onClick={closeSearchModal}
                />
              </div>

              <div className="modal-body overflow-auto">
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
                                  {product.name}
                                </Link>
                              </h6>
                              <p className="mt-2">
                                {truncateText(product.description, 50)} {/* Truncate text to 50 characters */}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-bold text-center">No products found</p>
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
