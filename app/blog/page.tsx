import React from "react";

const blogPosts = [
  { id: 1, imgSrc: "/img/image_1.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 2, imgSrc: "/img/image_2.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 3, imgSrc: "/img/image_3.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 4, imgSrc: "/img/image_1.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 5, imgSrc: "/img/image_2.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 6, imgSrc: "/img/image_3.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 7, imgSrc: "/img/image_1.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 8, imgSrc: "/img/image_2.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
  { id: 9, imgSrc: "/img/image_3.jpg", title: "7 Factors for Choosing Between Two Jobs", date: "April 15, 2019", comments: "2 Comments", link: "blog-single.html" },
];

const Page: React.FC = () => {
  return (
    <>
      <div
        className="site-section hero-page bg-image bg-image-parallax overlay-dark"
        style={{ backgroundImage: "url(img/campaign-men.jpg)" }}
      >
        <div className="container">
          <div className="caption text-center fg-white">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div className="site-section blog-page">
        <div className="container">
          <div className="row mt-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4 mb-5">
                <a href={post.link}>
                  <img
                    src={post.imgSrc}
                    alt=""
                    className="img-fluid rounded mb-4"
                  />
                </a>
                <h3 className="fw-normal">
                  <a href={post.link} className="text-dark">
                    {post.title}
                  </a>
                </h3>
                <div className="text-secondary">
                  {post.date} <span className="mx-2">|</span>{" "}
                  <a href="#">{post.comments}</a>
                </div>
              </div>
            ))}
          </div>
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Page;
