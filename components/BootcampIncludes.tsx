import React from "react";
import { HiCheck } from "react-icons/hi";

export const BootcampIncludes = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">
          This Bootcamp Includes
        </h2>

        <div className="w-full sm2:w-[90%] flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-[10px] bg-[#e8e8ff] w-[50px] h-[50px]">
              <HiCheck size={30} className="text-primary_blue" />
            </div>

            <p className="leading-[40px] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-[10px] bg-[#e8e8ff] w-[50px] h-[50px]">
              <HiCheck size={30} className="text-primary_blue" />
            </div>

            <p className="leading-[40px] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-[10px] bg-[#e8e8ff] w-[50px] h-[50px]">
              <HiCheck size={30} className="text-primary_blue" />
            </div>

            <p className="leading-[40px] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-[10px] bg-[#e8e8ff] w-[50px] h-[50px]">
              <HiCheck size={30} className="text-primary_blue" />
            </div>

            <p className="leading-[40px] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
