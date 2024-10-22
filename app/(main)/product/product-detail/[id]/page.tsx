import { fetchProducts } from "@/app/utils/functions";
import StarRating from "@/app/components/StarRating";
import NotFound from "@/app/not-found";
import Link from "next/link";

const page = async ({ params }: { params: { id: number } }) => {
  const allProducts = await fetchProducts();
  const product = allProducts.find((product) => product.id === params.id);
  const wFull = true;

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="site-section py-5">
        <div className="container">
          <ul className="breadcrumb bg-white">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/product">Product</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">{product.category}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">{product.subCategory}</Link>
            </li>
            <li className="breadcrumb-item">{product.name}</li>
          </ul>
          <div className="row">
            <div className="col-lg-7">
              <div className="row no-gutters">
                <div className="" style={{ width: "60%", height: "50%" }}>
                  <div
                    className="img-place"
                    style={{ height: "60%", overflow: "hidden" }}
                  >
                    <img
                      src={product.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "contain", // Ensure the entire image fits within the container
                        objectPosition: "top", // Align the image to the top
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 py-3">
              <h3>{product.name}</h3>
              <div
                className="d-flex flex-row items-center justify-center"
                style={{ width: "100%" }}
              >
                <div style={{ fontSize: "20px", marginRight: "10px" }}>
                  {product.rating.stars}
                </div>
                <StarRating rating={product.rating.stars} />
              </div>

              <p className="mt-3">{product.description}</p>
              <p>
                <span className="fs-large fw-bold">Availability:</span> 240
              </p>
              <p className="fs-large fw-bold mb-1 mt-3">Size:</p>
              <div className="btn-group btn-group-gap size-pick">
                <button className="btn btn-theme-outline btn-sm select-target">
                  XS
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  S
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  M
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  L
                </button>
                <button className="btn btn-theme-outline btn-sm select-target">
                  XL
                </button>
              </div>
              <p className="fs-large fw-bold mb-1 mt-3">Quantity:</p>
              <div className="number-input">
                <button className="btn btn-theme btn-sm btn-decrease">
                  <span className="icon-minus" />
                </button>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  min={0}
                  max={250}
                />
                <button className="btn btn-theme btn-sm btn-increase">
                  <span className="icon-plus" />
                </button>
              </div>
              <h4 className="mt-4 mb-3">
                Price: ${(product.priceCents / 100).toFixed(2)}
              </h4>
              <a href="#" className="btn btn-theme-outline mr-2">
                <span className="icon-add_shopping_cart" /> Add to Cart
              </a>
              <Link href="/checkout" className="btn btn-theme">
                Proceed Checkout
              </Link>
            </div>
          </div>
          <div className="d-block mt-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="home-tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Additional Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="contact-tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Review (2)
                </a>
              </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
              <div
                className="tab-pane fade"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui. Aenean sit amet
                gravida nisi. Nam fermentum est felis, quis feugiat nunc
                fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at
                ante aliquet, in hendrerit lectus interdum. Morbi elementum
                sapien rhoncus pretium maximus. Nulla lectus enim, cursus et
                elementum sed, sodales vitae eros. Ut ex quam, porta consequat
                interdum in, faucibus eu velit. Quisque rhoncus ex ac libero
                varius molestie.
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ul className="list-unstyled">
                  <li className="d-flex flex-row">
                    <span className="col-4 py-2">Weight :</span>
                    <span className="col-4 py-2 text-secondary">0.79 kg</span>
                  </li>
                  <li className="d-flex flex-row">
                    <span className="col-4 py-2">Dimensions :</span>
                    <span className="col-4 py-2 text-secondary">
                      110 x 33 x 100 cm
                    </span>
                  </li>
                  <li className="d-flex flex-row">
                    <span className="col-4 py-2">Materials :</span>
                    <span className="col-4 py-2 text-secondary">
                      60% cotton
                    </span>
                  </li>
                  <li className="d-flex flex-row">
                    <span className="col-4 py-2">Color :</span>
                    <span className="col-4 py-2 text-secondary">
                      Black, Blue, Grey, Green, Red, White
                    </span>
                  </li>
                  <li className="d-flex flex-row">
                    <span className="col-4 py-2">Size :</span>
                    <span className="col-4 py-2 text-secondary">
                      XL, L, M, S
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade show active"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row">
                  <div className="col-sm-10 col-md-8 col-lg-6">
                    <div className="product-review">
                      {/* Review */}
                      <div className="review-dialog">
                        <div className="profile-picture">
                          <img src="/img/avatar_1.jpg" alt="AVATAR" />
                        </div>
                        <div className="ml-3">
                          <div className="review-content mb-2">
                            <span className="fg-dark fs-large">
                              John Grande
                            </span>
                            <span className="ratings">
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star-half" />
                            </span>
                          </div>
                          <p className="mb-0 text-secondary">
                            Quod autem in homine praestantissimum atque optimum
                            est, id deseruit. Apud ceteros autem philosophos
                          </p>
                        </div>
                      </div>
                      <div className="review-dialog">
                        <div className="profile-picture">
                          <img src="/img/avatar_2.jpg" alt="AVATAR" />
                        </div>
                        <div className="ml-3">
                          <div className="review-content mb-2">
                            <span className="fg-dark fs-large">
                              Aliana Grande
                            </span>
                            <span className="ratings">
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star-half" />
                            </span>
                          </div>
                          <p className="mb-0 text-secondary">
                            Quod autem in homine praestantissimum atque optimum
                            est, id deseruit. Apud ceteros autem philosophos
                          </p>
                        </div>
                      </div>
                      {/* Add review */}
                      <form className="review-form mt-5">
                        <h5 className="fg-dark">Add a review</h5>
                        <p className="stext-102 cl6">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <div className="row p-b-25">
                          <div className="col-12">
                            <select className="form-control my-2">
                              <option>Your Rating</option>
                              <option value={1}>1 Very Unsatisfactory</option>
                              <option value={2}>2 Less Satisfactory</option>
                              <option value={3}>3 Good Enough</option>
                              <option value={4}>4 Satisfying</option>
                              <option value={5}>5 Very Satisfactory</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <div className="input-group floating-label my-2">
                              <textarea
                                className="form-control"
                                id="review"
                                name="review"
                                rows={6}
                                defaultValue={""}
                              />
                              <label
                                className="floating-control-label"
                                htmlFor="review"
                              >
                                Your review
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group floating-label my-2">
                              <input
                                className="form-control"
                                id="name"
                                type="text"
                                name="name"
                              />
                              <label
                                className="floating-control-label"
                                htmlFor="name"
                              >
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group floating-label my-2">
                              <input
                                className="form-control"
                                id="email"
                                type="text"
                                name="email"
                              />
                              <label
                                className="floating-control-label"
                                htmlFor="email"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-theme">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters bg-light mt-5">
            <div className="col-12">
              <ul className="list-unstyled list-inline text-center mb-0 py-4">
                <li className="list-inline-item">
                  SKU: <span className="text-secondary">JAK-923031</span>
                </li>
                <li className="list-inline-item">
                  Categories:{" "}
                  <span className="text-secondary">{product.category}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 mt-3">
              <h2 className="title-section text-center">Similar Product</h2>
            </div>
            <div className="col-lg-3">
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
                    <img src="/img/Double_Breasted_Jacket_(1).jpg" alt="" />
                  </div>
                  <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                    Quick View
                  </button>
                </div>
                <div className="card-footer">
                  <div className="caption">
                    <p className="product-title">Double Breasted Jacket</p>
                    <p className="fg-theme">$19.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <img src="/img/Faux_Fur_Jacket_(1).jpg" alt="" />
                  </div>
                  <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                    Quick View
                  </button>
                </div>
                <div className="card-footer">
                  <div className="caption">
                    <p className="product-title">Faux Fur Jacket</p>
                    <p className="fg-theme">$19.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <img src="/img/Loafers.jpg" alt="" />
                  </div>
                  <button className="btn btn-theme btn-rounded btn-sm btn-noanimate">
                    Quick View
                  </button>
                </div>
                <div className="card-footer">
                  <div className="caption">
                    <p className="product-title">Loafers</p>
                    <p className="fg-theme">$19.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    <p className="product-title">Oversized Shirt Jacket</p>
                    <p className="fg-theme">$19.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
