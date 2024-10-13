import React from "react";
import { IoStar } from "react-icons/io5";

// Example rating data
const ratingsData = [
  { stars: 5, count: 150 },
  { stars: 4, count: 100 },
  { stars: 3, count: 75 },
  { stars: 2, count: 25 },
  { stars: 1, count: 50 },
];

// Total number of ratings (for percentage calculation)
const totalRatings = ratingsData.reduce((acc, rating) => acc + rating.count, 0);

const RatingIndicators = () => {
  const averageRating = calculateAverageRating(ratingsData);

  return (
    <div className="flex gap-8 w-full sm2:w-[70%] items-center border-[1px] border-b-[4px] border-[#c7c7c7] rounded-[8px] p-4">
      <div className="flex flex-col items-center gap-2 w-[15%] ">
        <div className="flex items-center gap-2">
          <div className="font-bold text-[#121212] text-xl">
            {averageRating}
          </div>
          <IoStar size={17} className="text-orange-500" />
        </div>
        <div className="text-[14px] text-[#474747]">{totalRatings} Reviews</div>
      </div>

      <div className="flex flex-col gap-2 w-[80%]">
        {ratingsData.map((rating) => {
          const percentage = (rating.count / totalRatings) * 100;

          return (
            <div key={rating.stars} className="flex items-center gap-4 w-full">
              {/* Star Indicator */}
              <span className="w-2 text-sm font-semibold">{rating.stars}</span>

              {/* Rating Bar */}
              <div className="w-full bg-gray-300 h-[6px] rounded-md overflow-hidden">
                <div
                  className="bg-yellow-400 h-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Rating Count */}
              <span className="w-10 text-sm font-medium">{rating.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingIndicators;

type Rating = { stars: number; count: number };

const calculateAverageRating = (ratings: Rating[]): string => {
  const totalRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);
  const weightedSum = ratings.reduce(
    (acc, rating) => acc + rating.stars * rating.count,
    0
  );

  return totalRatings === 0 ? "0" : (weightedSum / totalRatings).toFixed(1);
};
