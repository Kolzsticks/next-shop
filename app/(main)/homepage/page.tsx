"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "../../components/Products";
import { fetchProducts } from "@/app/utils/functions";
import { Product as FeaturedProduct } from "@/app/types/types";

const HomeSection: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>(
    []
  );

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setFeaturedProducts(products);
    };

    getProducts();
  }, []);

  // Helper function to render a single ProductCard
  const renderProductCard = (
    product: FeaturedProduct,
    index: number,
    isColumn: boolean
  ) => (
    <ProductCard
      key={index}
      uid={index}
      id={product.id}
      name={product.name}
      image={product.image}
      rating={product.rating}
      priceCents={product.priceCents}
      category={product.category}
      subCategory={product.subCategory}
      keywords={product.keywords}
      isColumn={isColumn}
      description={product.description}
    />
  );

  return (
    <>
      <div className="site-section home-section">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: false }}
              className="col-lg-8"
            >
              <div className="tiles-wrapper tiles-2">
                <div className="img-place">
                  <img src="/img/hero-img_1.jpg" alt="" />
                </div>
                <div className="caption fg-white">
                  <p className="mb-1">Late Summer Edition</p>
                  <p className="custom-font-size1 fw-light">
                    New Summer Arrivals
                  </p>
                  <h4 className="mb-4">
                    Get <span className="fg-theme">40%</span> Off
                  </h4>
                  <a href="product.html" className="btn btn-theme">
                    Shop Now
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="col-lg-4">
              {[
                {
                  img: "/img/Skinny_Fit_Blazer.jpg",
                  title: "Skinny Fit Blazzer",
                },
                {
                  img: "/img/family_campaign_kids.jpg",
                  title: "Family Sweater",
                },
              ].map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: false }}
                  key={index}
                  className="tiles-wrapper tiles-4"
                >
                  <div className="img-place">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="caption">
                    <a href="product.html" className="card-caption">
                      <div className="small pos-top">30% Off</div>
                      {item.title}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="site-section py-5">
        <div className="container">
          <h1 className="title-section custom-font-size2">
            Trendy Fashion for Every Style – Shop Now!
          </h1>
          <div className="row justify-content-center mt-2">
            {featuredProducts
              .slice(0, 3)
              .map((product, index) =>
                renderProductCard(product, index, false)
              )}
          </div>
        </div>
      </div>

      <div className="site-section pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3 className="title-section">New Arrivals</h3>
              <div className="row mt-2">
                {featuredProducts
                  .slice(0, 4)
                  .map((product, index) =>
                    renderProductCard(product, index, false)
                  )}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: false }}
                  className="col-12 col-md-8"
                >
                  <div className="card card-collection-tiles">
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Skinny_Fit_Blazer.jpg" alt="" />
                      </div>
                      <div className="caption fg-white">
                        <p className="mb-1">Find the best Blazer Collection</p>
                        <p className="display-3 fw-semibold">BLAZER</p>
                      </div>
                      <a href="product.html" className="btn btn-link">
                        Shop Now <span className="icon icon-angle-right" />
                      </a>
                    </div>
                  </div>
                </motion.div>
                <div className="col-12 col-md-8  no-gutters">
                  {["Accessories", "Casual Clothes"].map((title, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1 },
                      }}
                      viewport={{ once: false }}
                      key={index}
                      className="col-12"
                    >
                      <div className="card card-collection-tiles_2">
                        <div className="card-body">
                          <div className="img-place">
                            <img src={`/img/image_${index + 1}.jpg`} alt="" />
                          </div>
                          <div className="caption">
                            <h2>{title}</h2>
                          </div>
                          <a href="product.html" className="btn btn-link">
                            Shop Now <span className="icon icon-angle-right" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {featuredProducts
                  .slice(3, 4)
                  .map((product, index) =>
                    renderProductCard(product, index, false)
                  )}
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h3 className="title-section text-center mt-5 mt-lg-0">
                Best Sellers
              </h3>
              <div className="row mt-2">
                {featuredProducts
                  .slice(0, 3)
                  .map((product, index) =>
                    renderProductCard(product, index, true)
                  )}
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <motion.button
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
              }}
            >
              <Link href="/product" className="btn btn-theme px-5">
                View All
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
