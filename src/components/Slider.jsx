import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";

// 👇 Array of slides (images and captions)
const slideData = [
  { src: frame1, alt: "1", name: "Mamta" },
  { src: frame2, alt: "2", name: "Nitin" },
  { src: frame1, alt: "3", name: "Mamta" },
  { src: frame2, alt: "4", name: "Nitin" },
];

const Slider = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Custom Prev Button */}
      <div className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10">
        <button className="bg-white p-3 text-xl rounded-full shadow-lg">
          <MdOutlineArrowBackIosNew />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },        // <500px
          500: { slidesPerView: 1 },      // 500px+
          768: { slidesPerView: 2 },      // 768px+
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="rounded-xl w-full h-full object-cover"
            />
            <h4 className="text-sm m-1">{slide.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Button */}
      <div className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10">
        <button className="bg-white p-3 text-xl rounded-full shadow-lg">
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Slider;
