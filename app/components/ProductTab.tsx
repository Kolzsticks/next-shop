'use client'

import React, { useState } from 'react';
import '../css/tab.css'; // Import the CSS file

interface TabComponentProps {
    description: string;
}

const TabComponent: React.FC<TabComponentProps> = ({ description }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'review'>('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{description}</p>;
      case 'additional':
        return (
          <ul className="list-unstyled">
            <li className="d-flex flex-row">
              <span className="col-4 py-2">Weight :</span>
              <span className="col-4 py-2 text-secondary">0.79 kg</span>
            </li>
            <li className="d-flex flex-row">
              <span className="col-4 py-2">Dimensions :</span>
              <span className="col-4 py-2 text-secondary">110 x 33 x 100 cm</span>
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
        );
      case 'review':
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-block mt-5">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-tab-button ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-tab-button ${activeTab === 'additional' ? 'active' : ''}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Information
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-tab-button ${activeTab === 'review' ? 'active' : ''}`}
            onClick={() => setActiveTab('review')}
          >
            Review (2)
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default TabComponent;






