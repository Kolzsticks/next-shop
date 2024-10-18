import React from "react";
import FilterProduct from "../../components/FilterProduct";
import ProductCard from "../../components/Products";
import { Product } from "@/app/types/types";
import { fetchProducts } from "@/app/utils/functions";





const categories: { name: string; count: number }[] = [
  { name: "Mens", count: 90 },
  { name: "Womens", count: 128 },
  { name: "Kids", count: 56 },
  { name: "Divided", count: 73 },
  { name: "Moslem", count: 230 },
  { name: "Accessories", count: 165 },
];

const sizes: string[] = ["XS", "S", "M", "L", "XL"];
const colors: string[] = ["danger", "warning", "success", "primary", "dark"];
const collectionTiles = [
  { title: "Accessories", image: "img/image_1.jpg", link: "/product" },
  { title: "Casual Clothes", image: "img/image_2.jpg", link: "/product" },
];
const pagination = [1, 2, 3, 4, "Next"];



const Page: React.FC = async () => {
  const products: Product[] = await fetchProducts();
  return (
    <>
      <div className="site-section py-5">
        <div className="container">
          <div className="row product-list-container">
            <FilterProduct
              categories={categories}
              sizes={sizes}
              colors={colors}
            />

            <div className="col-lg-8">
              <div className="row no-gutters align-items-center">
                <div className="col-6">
                  <p className="fs-small mb-0 text-secondary">
                    Showing {products.length} out of 1432 items
                  </p>
                </div>
                <div className="col-6 text-right">
                  <select className="custom-select" style={{ maxWidth: 120 }}>
                    <option>Sort By</option>
                    <option value="new">Newest</option>
                    <option value="best">Best Sellers</option>
                    <option value="low">Price Low</option>
                    <option value="high">Price High</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                {products.map((product, index) => (
                  <ProductCard
                  key={index}
                  uid={index}
                  id={product.id}
                  name={product.name}
                  priceCents={product.priceCents} // Ensure this matches
                  image={product.image}
                  rating={product.rating} // Ensure you are using the correct rating access
                  keywords={product.keywords}
                  isColumn={false}
                />
                ))}
              </div>
              <nav>
                <ul className="pagination justify-content-end">
                  {pagination.map((page, index) => (
                    <li
                      key={index}
                      className={`page-item ${page === 2 ? "active" : ""}`}
                    >
                      <a href="#" className="page-link">
                        {page}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="row mt-5">
            {collectionTiles.map((tile, index) => (
              <div className="col-md-6" key={index}>
                <div className="card card-collection-tiles_2">
                  <div className="card-body">
                    <div className="img-place">
                      <img src={tile.image} alt={tile.title} />
                    </div>
                    <div className="caption">
                      <h2>{tile.title}</h2>
                    </div>
                    <a href={tile.link} className="btn btn-link">
                      Shop Now <span className="icon icon-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
