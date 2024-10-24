"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Secure = () => {
  const infoCards = [
    {
      imgSrc: "/img/svg/payment.svg",
      title: "100% Secure Payments",
      description:
        "We offer competitive prices on our 100 million plus product range.",
    },
    {
      imgSrc: "/img/svg/around-world.svg",
      title: "World Wide Delivery",
      description:
        "We offer competitive prices on our 100 million plus product range.",
    },
    {
      imgSrc: "/img/svg/customer-service.svg",
      title: "24/7 Help Center",
      description:
        "We offer competitive prices on our 100 million plus product range.",
    },
  ];

  return (
    <div className="site-section info-section bg-light">
      <div className="container">
        <div className="row">
          {infoCards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: false }}
              className="col-lg-4"
              key={index}
            >
              <div className="card card-info text-center border-0">
                <div className="card-body">
                  <div className="img-place">
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      width={300}
                      height={300}
                    />
                  </div>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secure;
