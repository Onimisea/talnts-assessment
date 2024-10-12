import React from "react";
import { IoStar } from "react-icons/io5";
import * as data from "@/data";
import Image from "next/image";

const { host, cohosts, guests } = data;

export const Hosts = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-16 gap-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Host</h2>

          <div className="flex gap-6 flex-col md:flex-row items-center justify-center ">
            <Image
              src={host.img}
              alt={host.name}
              className="w-full md:w-[20%]"
            />

            <div className="flex flex-col gap-2 w-full md:w-[60%]">
              <p className="text-[#474747]">{host.username}</p>
              <p className="text-black font-bold">{host.name}</p>
              <p className="leading-[35px]">{host.description}</p>
              <div className="flex gap-16">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-[#121212]">
                      {host.rating}
                    </div>
                    <IoStar size={17} className="text-orange-500" />
                  </div>
                  <div className="text-[14px]">{host.reviews}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-bold text-[#121212]">
                    {host.totalTransactions}
                  </div>
                  <div className="text-[14px]">{host.tags[0]}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-bold text-[#121212]">
                    {host.totalCustomers}
                  </div>
                  <div className="text-[14px]">{host.tags[1]}</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-4 mb-6">Co-Host</h2>

          <div className="flex flex-col gap-6">
            {cohosts.map((host, i) => (
              <div
                key={i}
                className="flex gap-6 flex-col md:flex-row items-center justify-center "
              >
                <Image
                  src={host.img}
                  alt={host.name}
                  className="w-full md:w-[20%]"
                />

                <div className="flex flex-col gap-2 w-full md:w-[60%]">
                  <p className="text-[#474747]">{host.username}</p>
                  <p className="text-black font-bold">{host.name}</p>
                  <p className="leading-[35px]">{host.description}</p>
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-[#121212]">
                          {host.rating}
                        </div>
                        <IoStar size={17} className="text-orange-500" />
                      </div>
                      <div className="text-[14px]">{host.reviews}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-[#121212]">
                        {host.totalTransactions}
                      </div>
                      <div className="text-[14px]">{host.tags[0]}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-[#121212]">
                        {host.totalCustomers}
                      </div>
                      <div className="text-[14px]">{host.tags[1]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-6">
            Guest Instructors
          </h2>

          <div className="flex flex-col md:flex-row gap-10 w-full md:w-[85%] justify-between">
            {guests.map((host, i) => (
              <div
                key={i}
                className="flex gap-6 flex-col items-center justify-center w-full md:w-[30%]"
              >
                <Image src={host.img} alt={host.name} className="w-full" />

                <div className="flex flex-col gap-2 w-full md:w-[95%]">
                  <p className="text-[#474747]">{host.username}</p>
                  <p className="text-black font-bold">{host.name}</p>
                  <p className="leading-[35px]">{host.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
