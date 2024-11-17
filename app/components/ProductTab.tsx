"use client";

import React from "react";
import "../css/tab.css"; // Import the CSS file
import Image from "next/image";

interface TabComponentProps {
  description: string;
}

const TabComponent: React.FC<TabComponentProps> = ({ description }) => {
  return (
    <div className="d-block mt-5">
      {/* Radio buttons to handle tab selection */}
      <input type="radio" id="tab-description" name="tab-group" defaultChecked />
      <input type="radio" id="tab-additional" name="tab-group" />
      <input type="radio" id="tab-review" name="tab-group" />

      {/* Tab Navigation */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <label htmlFor="tab-description" id="tab-description-label" className="nav-tab-button">
            Description
          </label>
        </li>
        <li className="nav-item">
          <label htmlFor="tab-additional" className="nav-tab-button">
            Additional Information
          </label>
        </li>
        <li className="nav-item">
          <label htmlFor="tab-review" className="nav-tab-button">
            Review (2)
          </label>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        <div className="tab-pane" id="content-description">
          <p>{description}</p>
        </div>
        <div className="tab-pane" id="content-additional">
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
              <span className="col-4 py-2 text-secondary">60% cotton</span>
            </li>
            <li className="d-flex flex-row">
              <span className="col-4 py-2">Size :</span>
              <span className="col-4 py-2 text-secondary">XL, L, M, S</span>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="content-review">
      
      <div  className="row">
      <div  className="col-sm-10 col-md-8 col-lg-6">
          <div className="product-review">
            <div className="review-dialog">
              <div className="profile-picture">
                <img
                  alt="AVATAR"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  srcSet="/_next/image?url=%2Fimg%2Favatar_1.jpg&w=64&q=75 1x, /_next/image?url=%2Fimg%2Favatar_1.jpg&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimg%2Favatar_1.jpg&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="ml-3">
                <div className="review-content mb-2">
                  <span className="fg-dark fs-large">John Grande</span>
                  <span className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-half" />
                  </span>
                </div>
                <p className="mb-0 text-secondary">
                  Quod autem in homine praestantissimum atque optimum est, id deseruit.
                  Apud ceteros autem philosophos
                </p>
              </div>
            </div>
            <div className="review-dialog">
              <div className="profile-picture">
                <img
                  alt="AVATAR"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  srcSet="/_next/image?url=%2Fimg%2Favatar_2.jpg&w=64&q=75 1x, /_next/image?url=%2Fimg%2Favatar_2.jpg&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimg%2Favatar_2.jpg&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="ml-3">
                <div className="review-content mb-2">
                  <span className="fg-dark fs-large">Aliana Grande</span>
                  <span className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-half" />
                  </span>
                </div>
                <p className="mb-0 text-secondary">
                  Quod autem in homine praestantissimum atque optimum est, id deseruit.
                  Apud ceteros autem philosophos
                </p>
              </div>
            </div>
            <form className="review-form mt-5">
              <h5 className="fg-dark">Add a review</h5>
              <p className="stext-102 cl6">
                Your email address will not be published. Required fields are marked *
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
                    <label className="floating-control-label" htmlFor="review">
                      Your review
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group floating-label my-2">
                    <input className="form-control" id="name" type="text" name="name" />
                    <label className="floating-control-label" htmlFor="name">
                      Name
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group floating-label my-2">
                    <input className="form-control" id="email" type="text" name="email" />
                    <label className="floating-control-label" htmlFor="email">
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
  );
};

export default TabComponent;
