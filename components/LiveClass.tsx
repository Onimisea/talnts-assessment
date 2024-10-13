import React from "react";
import { liveclasses } from "@/data";
import Image from "next/image";

export const LiveClass = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">Live Class Schedule</h2>

        <div className="flex flex-col md:flex-row gap-3 w-full justify-center flex-wrap">
          {liveclasses.map((lc, i) => (
            <div
              key={i}
              className="border-[1px] border-[#c7c7c7] rounded-[8px] p-2"
            >
              <small className="text-[#292929]">Live Class</small>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-3 ">
                  <Image
                    src={lc.dateIcon}
                    alt={lc.day}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-md">{lc.day}</span>
                </div>

                <div className="flex gap-3 ">
                  <Image
                    src={lc.durationIcon}
                    alt={lc.duration}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-md">{lc.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
