"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "@/public/regsli1.png";
import img2 from "@/public/regsli2.png";

export const RegisterSlider = () => {
  return (
    <div className="w-full h-screen bg-red-200 relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="h-full z-30"
      >
        <SwiperSlide className="bg-blue-500 text-white w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={img1}
              alt="Image"
              className="w-full h-full object-cover"
            />

            <p className="text-white font-bold text-center absolute bottom-[200px] z-75 w-full text-xl px-6">
              All-in-one platform to learn, grow, and monetize your skills
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-500 text-white w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={img2}
              alt="Image"
              className="w-full h-full object-cover"
            />

            <p className="text-white font-bold text-center absolute bottom-[200px] z-75 w-full text-xl px-6">
              As a creator, monetize your knowledge and skills selling digital
              products
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
