"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Parallax from "@/app/components/Parallax";
import NewSection from "@/app/NewFonts/NewSection";
import Secure from "@/app/components/Secure";
import ProductCard from "../components/Products";

interface FeaturedProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

const featuredProducts: FeaturedProduct[] = [
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
    id: 4,
    title: "Super Slim Fit Pants",
    price: 19.99,
    image: "img/Super_Slim-fit_Pants_(1).jpg",
  },
];

const HomeSection: React.FC = () => {

  

  const renderProductCard = (product: FeaturedProduct, index: number) => (
    <ProductCard
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      isColumn={false}
    />
  );

  return (
    <div>
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
                  <h1 className="fw-light">New Summer Arrivals</h1>
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
          <h3 className="title-section">Featured Product</h3>
          <div className="row justify-content-center mt-2">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                isColumn={false}
              />
            ))}
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
                  .map((product, index) => renderProductCard(product, index))}
                <div className="col-12 col-md-8">
                  <div className="card card-collection-tiles">
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Skinny_Fit_Blazer.jpg" alt="" />
                      </div>
                      <div className="caption fg-white">
                        <p className="mb-1">Find the best Blazer Collection</p>
                        <h1 className="fw-semibold">BLAZER</h1>
                      </div>
                      <a href="product.html" className="btn btn-link">
                        Shop Now <span className="icon icon-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8  no-gutters">
                  {["Accessories", "Casual Clothes"].map((title, index) => (
                    <div key={index} className="col-12">
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
                    </div>
                  ))}
                </div>
                {renderProductCard(featuredProducts[3], 3)}
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h3 className="title-section text-center mt-5 mt-lg-0">
                Best Sellers
              </h3>
              <div className="row mt-2">
                {featuredProducts.slice(0, 3).map((product, index) => (
                  <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    isColumn={true}
                  />
                ))}
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

    
      <Parallax />
      <NewSection />
      <Secure />
    </div>
  );
};

export default HomeSection;
