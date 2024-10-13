import React from "react";
import certificate from "@/public/certificate.png"
import Image from "next/image";

export const Certificate = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">
          You&apos;ll Get A Certificate Of Completion
        </h2>

        <div className="w-[80%] flex flex-col items-center justify-center">
          <Image src={certificate} alt="Talnts Certificate" className="" />
        </div>
      </div>
    </div>
  );
};
