import React from "react";
import Parallax from "@/app/components/Parallax";
import NewSection from "@/app/NewFonts/NewSection";
import Secure from "@/app/components/Secure";


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
    id: 1,
    title: "Super Slim Fit Pants",
    price: 19.99,
    image: "img/Super_Slim-fit_Pants_(1).jpg",
  },
];

const HomeSection: React.FC = () => {
  return (
    <div className="bg-whiter">
      <div className="site-section home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
            </div>
            <div className="col-lg-4">
              <div className="tiles-wrapper tiles-4">
                <div className="img-place">
                  <img src="/img/Skinny_Fit_Blazer.jpg" alt="" />
                </div>
                <div className="caption">
                  <a href="product.html" className="card-caption">
                    <div className="small pos-top">30% Off</div>
                    Skinny Fit Blazzer
                  </a>
                </div>
              </div>
              <div className="tiles-wrapper tiles-4">
                <div className="img-place">
                  <img src="/img/family_campaign_kids.jpg" alt="" />
                </div>
                <div className="caption">
                  <a href="product.html" className="card-caption">
                    <div className="small pos-bottom">30% Off</div>
                    Family Sweater
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section py-5">
        <div className="container">
          <h3 className="title-section">Featured Product</h3>
          <div className="row justify-content-center mt-2">
            {featuredProducts.map((product, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card card-product">
                  <div className="card-header">
                    <div className="btn btn-fab btn-sm" title="">
                      <span className="icon-heart" />
                    </div>
                    <div className="btn btn-fab btn-sm" title="">
                      <span className="icon-shopping-cart" />
                    </div>
                    <div className="btn btn-fab btn-sm" title="">
                      <span className="icon-fullscreen fs-normal" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="img-place">
                      <img src={product.image} alt="" />
                    </div>
                    <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                      Quick View
                    </button>
                  </div>
                  <div className="card-footer">
                    <div className="caption">
                      <a href="product-details.html" className="product-title">
                        {product.title}
                      </a>
                      <p className="fg-theme">${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="col-sm-6 col-md-4">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Oversized_Shirt_Jacket_(2).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Oversized Shirt Jacket
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Cargo_Joggers_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Cargo Joggers
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="badge badge-danger">Hot</div>
                      <div className="img-place">
                        <img src="/img/Double_Breasted_Jacket_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Double Breasted Jacket
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Skinny_Fit_Suit_Pants_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Skinny Fit Suit Pants
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="col-12 col-md-8">
                  <div className="row no-gutters">
                    <div className="col-12">
                      <div className="card card-collection-tiles_2">
                        <div className="card-body">
                          <div className="img-place">
                            <img src="/img/image_1.jpg" alt="" />
                          </div>
                          <div className="caption">
                            <h2>Accessories</h2>
                          </div>
                          <a href="product.html" className="btn btn-link">
                            Shop Now <span className="icon icon-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card card-collection-tiles_2">
                        <div className="card-body">
                          <div className="img-place">
                            <img src="/img/image_2.jpg" alt="" />
                          </div>
                          <div className="caption">
                            <h2>Casual Clothes</h2>
                          </div>
                          <a href="product.html" className="btn btn-link">
                            Shop Now <span className="icon icon-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="img-place">
                        <img src="/img/Loafers_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Loafers
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h3 className="title-section text-center mt-5 mt-lg-0">
                Best Sellers
              </h3>
              <div className="row mt-2">
                <div className="col-sm-6 col-md-4 col-lg-12">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="badge badge-sale">01</div>
                      <div className="img-place">
                        <img src="/img/Double_Breasted_Jacket_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Double Breasted Jacket
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-12">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="badge badge-sale">02</div>
                      <div className="img-place">
                        <img src="/img/Skinny_Fit_Suit_Pants_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Skinny Fit Suit Pants
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-12">
                  <div className="card card-product">
                    <div className="card-header">
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-heart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="btn btn-fab btn-sm" title="">
                        <span className="icon-fullscreen fs-normal" />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="badge badge-sale">03</div>
                      <div className="img-place">
                        <img src="/img/Super_Slim-fit_Pants_(1).jpg" alt="" />
                      </div>
                      <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                        Quick View
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="caption">
                        <a
                          href="product-details.html"
                          className="product-title"
                        >
                          Super Slim Fit Pants
                        </a>
                        <p className="fg-theme">$19.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/" className="btn btn-theme px-5">
              View All
            </a>
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
