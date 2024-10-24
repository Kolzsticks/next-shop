"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

interface PreviewCarouselProps {
  images: string[]; // Changed from single image to array of images
  wFull: boolean;
}

const PreviewCarousel: React.FC<PreviewCarouselProps> = ({
  images,
  wFull = false,
}) => {
  return (
    <div className={wFull ? "w-full" : "col-md-6"}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="img-place">
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={300}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PreviewCarousel;
