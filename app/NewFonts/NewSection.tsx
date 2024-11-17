"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const NewSection = () => {
  const newsItems = [
    {
      imgSrc: "/img/image_2.jpg",
      title: "7 Factors for Choosing Between Two Jobs",
      date: "April 15, 2019",
      comments: "2 Comments",
      link: "blog-single.html",
    },
    {
      imgSrc: "/img/image_3.jpg",
      title: "7 Factors for Choosing Between Two Jobs",
      date: "April 15, 2019",
      comments: "2 Comments",
      link: "blog-single.html",
    },
    {
      imgSrc: "/img/image_1.jpg",
      title: "7 Factors for Choosing Between Two Jobs",
      date: "April 15, 2019",
      comments: "2 Comments",
      link: "blog-single.html",
    },
  ];

  return (
    <div className="site-section">
      <div className="container">
        <h2 className="title-section text-center">Our Latest News</h2>
        <div className="row mt-4">
          {newsItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
              className="col-md-6 col-lg-4 mb-5"
              key={index}
            >
              <a href={item.link}>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="img-fluid rounded mb-4"
                  width={300}
                  height={300}
                />
              </a>
              <h3 className="fw-normal">
                <a href={item.link} className="text-dark">
                  {item.title}
                </a>
              </h3>
              <div className="text-secondary">
                {item.date} <span className="mx-2">|</span>{" "}
                <a href="#">{item.comments}</a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="news.html" className="btn btn-theme">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
