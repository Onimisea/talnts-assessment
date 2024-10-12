import Image from "next/image";
import React from "react";
import arrowback from "@/public/arrowback.png";
import heroimg from "@/public/heroimg.png";
import herocon1 from "@/public/herocon1.png";
import herocon2 from "@/public/herocon2.png";
import herocon3 from "@/public/herocon3.png";
import herocon4 from "@/public/herocon4.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col ">
      <section className="w-full flex flex-col gap-10 md:gap-6 py-10 ">
        <Image src={arrowback} alt="Back" width={20} height={10} />

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-10">
          <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col gap-6 lg:gap-10 items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-col gap-6 items-center justify-center md:items-start md:justify-start">
              <h1 className="text-3xl md:text-2xl lg:text-4xl font-extrabold leading-[40px] lg:leading-[55px]">
                Foundation of Android Development
              </h1>
              <p className="text-md lg:text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur.
              </p>

              <div className="flex items-center justify-between flex-wrap text-[#292929] w-full">
                <div className="flex gap-3 ">
                  <Image
                    src={herocon1}
                    alt="Back"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-md lg:text-[18px]">Bootcamp</span>
                </div>
                <div className="flex gap-3 ">
                  <Image
                    src={herocon2}
                    alt="Back"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-md lg:text-[18px]">4 Weeks</span>
                </div>
                <div className="flex gap-3 ">
                  <Image
                    src={herocon3}
                    alt="Back"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-md lg:text-[18px]">3rd December</span>
                </div>
              </div>
            </div>

            <p className="font-extrabold text-[#292929] text-xl lg:text-3xl">
              N30,000
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="register"
                className="text-[14px] bg-primary_blue hover:bg-greytext-grey_dark text-white duration-500 rounded-[30px] px-20 py-4"
              >
                Enroll Now
              </Link>
              <Image
                src={herocon4}
                alt="Back"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-[42%] flex flex-col items-center justify-center">
            <Image src={heroimg} alt="Talnts App" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};
