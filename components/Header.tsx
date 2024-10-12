import Image from "next/image";
import React from "react";
import logo from "@/public/talnts_logo.svg";
import { HiMiniChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { Search } from "./Search";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  return (
    <div className="w-full h-[100px] overflow-hidden flex items-center justify-between bg-white p-10 drop-shadow-lg rounded-br-[12px] rounded-bl-[12px]">
      <div className="bg-white rounded-[30px] drop-shadow-lg px-5 py-4 flex items-center gap-6 border-[0.5px] border-[#c4c4c4]">
        <Link href="/" className="flex items-center gap-2 ">
          <Image src={logo} alt="Talnts App" width={30} height={30} />
          <span className="text-md text-black">App</span>
        </Link>

        <HiMiniChevronDown
          size={20}
          className="hidden sm:flex cursor-pointer"
        />
      </div>

      <div className="w-[35%] hidden md:flex ">
        <Search />
      </div>

      <div className="hidden sm:flex md:hidden border-[0.5px] border-[#c4c4c4] rounded-full w-[40px] h-[40px] items-center justify-center">
        <IoIosSearch size={20} />
      </div>

      <div className="flex items-center gap-5">
        <Link
          href="register"
          className="text-[14px] font-extrabold text-primary_blue hover:text-grey_dark duration-500"
        >
          Get Started
        </Link>

        <Link
          href=""
          className="text-[14px] bg-primary_blue hover:bg-greytext-grey_dark text-white duration-500 rounded-[30px] px-8 py-3"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
