import React from "react";

const NewSection = () => {
  return (
    <>
      <div className="site-section">
        <div className="container">
          <h2 className="title-section text-center">Our Latest News</h2>
          <div className="row mt-4">
            <div className="col-md-6 col-lg-4 mb-5">
              <a href="blog-single.html">
                <img
                  src="/img/image_2.jpg"
                  alt=""
                  className="img-fluid rounded mb-4"
                />
              </a>
              <h3 className="fw-normal">
                <a href="blog-single.html" className="text-dark">
                  7 Factors for Choosing Between Two Jobs
                </a>
              </h3>
              <div className="text-secondary">
                April 15, 2019 <span className="mx-2">|</span>{" "}
                <a href="#">2 Comments</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <a href="blog-single.html">
                <img
                  src="/img/image_3.jpg"
                  alt=""
                  className="img-fluid rounded mb-4"
                />
              </a>
              <h3 className="fw-normal">
                <a href="blog-single.html" className="text-dark">
                  7 Factors for Choosing Between Two Jobs
                </a>
              </h3>
              <div className="text-secondary">
                April 15, 2019 <span className="mx-2">|</span>{" "}
                <a href="#">2 Comments</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <a href="blog-single.html">
                <img
                  src="/img/image_1.jpg"
                  alt=""
                  className="img-fluid rounded mb-4"
                />
              </a>
              <h3 className="fw-normal">
                <a href="blog-single.html" className="text-dark">
                  7 Factors for Choosing Between Two Jobs
                </a>
              </h3>
              <div className="text-secondary">
                April 15, 2019 <span className="mx-2">|</span>{" "}
                <a href="#">2 Comments</a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="news.html" className="btn btn-theme">
              View More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSection;
