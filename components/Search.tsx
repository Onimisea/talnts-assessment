import React from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./ui/input";

export const Search = () => {
  return (
    <div className="w-full h-[50px] border-[0.5px] border-[#c4c4c4] rounded-[30px] relative overflow-hidden flex items-center justify-between">
      <div className="w-fit px-4 h-full flex items-center justify-center">
        <IoIosSearch size={20} />
      </div>

      <Input
        type="text"
        placeholder="Android"
        className="border outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 shadow-none w-full h-full rounded-[30px] absolute pl-12 pr-[100px]"
      />

      <div className="w-fit bg-grey_light px-6 h-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="text-md">All</span>

          <HiMiniChevronDown size={15} />
        </div>
      </div>
    </div>
  );
};
