"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import { fetchProducts, truncateText } from "@/app/utils/functions";
import Link from "next/link";

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [popularSearches, setPopularSearches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts(products.slice(0, 3));
  };

  const handlePopularSearchClick = (productName: string) => {
    setSearchQuery(productName);
    const results = fuse.search(productName);
    setFilteredProducts(results.map((result) => result.item));
  };

  return (
    <div>
      {/* Mobile-only Background Image */}
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0"
        style={{
          backgroundImage: "url('/img/mobile_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        <div
          className="position-absolute top-0 start-0 end-0 bottom-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
      </div>

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
              {searchQuery && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={clearSearch}
                >
                  &times;
                </button>
              )}
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

            {loading && (
              <div className="d-flex justify-content-center mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            <div className="mt-3">
              {filteredProducts.length > 0 ? (
                <ul
                  className="list-group"
                  style={{ overflowY: "scroll", maxHeight: "500px" }}
                >
                  {filteredProducts.map((product: any) => (
                    <li key={product.id} className="list-group-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-thumbnail"
                          style={{
                            width: "80px",
                            height: "80px",
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
                            {truncateText(product.description, 100)}
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
      </form>
    </div>
  );
};

export default Page;
