"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { requirements } from "@/data";

export const Requirements = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">
          Requirements for this Bootcamp
        </h2>

        <section className="w-full md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between text-md gap-24">
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              568: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            freeMode={true}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            modules={[FreeMode]}
            className="w-full h-[180px] "
          >
            {requirements.map((req) => (
              <SwiperSlide
                key={req.id}
                className="w-[100px] h-[150px] border-[1px] border-[#c4c4c4] rounded-[20px] p-6"
              >
                <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#e8e8ff] text-primary_blue font-bold">
                  {req.id}
                </p>

                <p className="leading-[40px] mt-6">{req.desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};
