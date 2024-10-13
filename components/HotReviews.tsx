import React from "react";
import certificate from "@/public/certificate.png";
import Image from "next/image";
import { reviews } from "@/data";
import { RiArrowRightSFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import RatingIndicators from "./RatingIndicators";

export const HotReviews = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">Hot Reviews</h2>

        <div className="w-full sm2:w-[80%] flex flex-col gap-12 items-center justify-center">
          <RatingIndicators />

          <div className="w-full flex flex-col gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    src={rev.img}
                    alt={rev.courseTitle}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <span className="text-lg font-bold">{rev.name}</span>
                </div>

                <div className="flex flex-col gap-2 ml-3">
                  <div className="flex gap-2 items-center">
                    <RiArrowRightSFill size={25} />
                    <span className="text-md font-bold">{rev.courseTitle}</span>
                  </div>

                  <StarRating ratings={Math.round(rev.ratings)} />
                </div>

                <p className="leading-[40px] ml-3">{rev.review}</p>

                <p className="text-[#474747] text-[14px] ml-3">
                  {rev.datetime}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StarRating = ({ ratings }: { ratings: number }) => {
  const totalStars = 5; // Total number of stars

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <IoStar
          key={index}
          size={17}
          className={index < ratings ? "text-orange-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};
