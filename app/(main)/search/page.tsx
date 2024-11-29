"use client";

import { useState, useEffect } from "react";
import { debounce, fetchProducts } from "@/app/utils/functions";
import Link from "next/link";

// Helper function to clean the text for robust searching
const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/['",.-]/g, "") // Remove apostrophes, commas, hyphens, and periods
    .normalize("NFD") // Normalize characters with accents
    .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
};

// Truncate text if it's too long
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Truncate and add ellipsis
  }
  return text;
};

const page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [popularSearches, setPopularSearches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false); // Loading state for the search

  // Debounced search handler
  const handleSearch = debounce((query: string) => {
    if (query === "") {
      setFilteredProducts(products.slice(0, 3)); // Show initial products when query is empty
    } else {
      setLoading(true); // Show loading spinner
      const cleanedQuery = normalizeText(query);

      // Perform filtering based on cleaned query
      const results = products.filter((product) =>
        normalizeText(product.name).includes(cleanedQuery)
      );
      setFilteredProducts(results);
      setLoading(false); // Hide loading spinner after search is done
    }
  }, 500);

  // Fetch initial data and popular searches
  useEffect(() => {
    const fetchData = async () => {
      const initialProducts = await fetchProducts(); // Get all products from API
      setProducts(initialProducts);

      // Set top 3 popular products based on rating
      const topProducts = initialProducts
        .sort((a: any, b: any) => b.rating.stars - a.rating.stars)
        .slice(0, 3);
      setPopularSearches(topProducts);

      // Initially display the first 3 products
      setFilteredProducts(initialProducts.slice(0, 3));
    };
    fetchData();
  }, []);

  // Handle input change for search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query); // Call the debounced search function
  };

  // Handle click on popular search item
  const handlePopularSearchClick = (productName: string) => {
    setSearchQuery(productName); // Set clicked popular product as the query
    handleSearch(productName); // Trigger search
  };

  return (
    <>
      <div style={{ backgroundColor: "#fff", height: "100svh" }}>
        <form className="container" style={{ marginTop: "100px" }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </div>
              <ul className="list-unstyled list-inline mt-2">
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

              {/* Display loading spinner if search is in progress */}
              {loading && (
                <div className="d-flex justify-content-center mt-3">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {/* Display filtered products */}
              <div className="mt-3">
                {filteredProducts.length > 0 ? (
                  <ul className="list-group" style={{overflowY: 'scroll', maxHeight: '500px'}}>
                    {filteredProducts.map((product: any) => (
                      <li key={product.id} className="list-group-item">
                        <div className="d-flex align-items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-thumbnail"
                            style={{ width: "80px", height: "80px", marginRight: "16px" }}
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
                            <p className="mt-2">{truncateText(product.description, 100)}</p> {/* Truncate description to 100 chars */}
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
        </form>
      </div>
    </>
  );
};

export default page;
