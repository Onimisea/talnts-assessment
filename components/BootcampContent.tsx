import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import bc1 from "@/public/bc1.png";
import bc2 from "@/public/nc2.png";
import Image from "next/image";

export const BootcampContent = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">Bootcamp Content</h2>

        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[80%] lg:w-[70%] space-y-3 "
        >
          <AccordionItem
            value="item-1"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4 "
          >
            <AccordionTrigger className="">
              Section 1 - Introduction
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc1}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Working with Flutter</span>
                </div>
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc2}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Assignment Title</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4"
          >
            <AccordionTrigger className="">
              Section 2 - The Basics
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc1}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Working with Flutter</span>
                </div>
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc2}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Assignment Title</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4"
          >
            <AccordionTrigger className="">
              Section 3 - Intermediate
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc1}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Working with Flutter</span>
                </div>
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc2}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Assignment Title</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4"
          >
            <AccordionTrigger className="">
              Section 4 - Advanced
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc1}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Working with Flutter</span>
                </div>
                <div className="w-full flex gap-4 border-[1px] border-[#c7c7c7] rounded-[10px] p-3 items-center">
                  <Image
                    src={bc2}
                    alt="Introduction"
                    className="w-[30px] h-[30px]"
                  />

                  <span>Assignment Title</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
