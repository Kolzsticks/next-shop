import React from "react";
import FilterProduct from "../../components/FilterProduct";
import ProductCard from "../../components/Products";


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Cargo Joggers",
    price: 19.99,
    image: "img/Cargo_Joggers_(1).jpg",
  },
  {
    id: 2,
    title: "Oversized Shirt Jacket",
    price: 19.99,
    image: "img/Oversized_Shirt_Jacket_(2).jpg",
  },
  { id: 3, title: "Skinny Fit", price: 19.99, image: "img/Skinny_Fit_(1).jpg" },
  {
    id: 1,
    title: "Cargo Joggers",
    price: 19.99,
    image: "img/Cargo_Joggers_(1).jpg",
  },
  {
    id: 4,
    title: "Oversized Shirt Jacket",
    price: 19.99,
    image: "img/Oversized_Shirt_Jacket_(2).jpg",
  },
  { id: 5, title: "Skinny Fit", price: 19.99, image: "img/Skinny_Fit_(1).jpg" },
  {
    id: 6,
    title: "Cargo Joggers",
    price: 19.99,
    image: "img/Cargo_Joggers_(1).jpg",
  },
  {
    id: 7,
    title: "Oversized Shirt Jacket",
    price: 19.99,
    image: "img/Oversized_Shirt_Jacket_(2).jpg",
  },
  { id: 8, title: "Skinny Fit", price: 19.99, image: "img/Skinny_Fit_(1).jpg" },
];

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
  { title: "Accessories", image: "img/image_1.jpg", link: "product.html" },
  { title: "Casual Clothes", image: "img/image_2.jpg", link: "product.html" },
];
const pagination = [1, 2, 3, 4, "Next"];



const Page: React.FC = () => {
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
                  <ProductCard key={index} id={product.id} title={product.title} price={product.price} image={product.image} isColumn={false} />
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
