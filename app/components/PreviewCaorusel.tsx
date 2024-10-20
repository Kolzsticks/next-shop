"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Products from "./Products";

interface PreviewCaoruselProps {
  image: string;
  wFull: boolean;
}

const PreviewCaorusel: React.FC<PreviewCaoruselProps> = ({ image, wFull = false }) => {
  return (
    <div className={wFull ? "w-full" : "col-md-6"}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
      >
        {/* Add SwiperSlide for each image */}
        <SwiperSlide>
          <div className="img-place">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-place">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-place">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-place">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PreviewCaorusel;
