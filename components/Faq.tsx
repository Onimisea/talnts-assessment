import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const Faq = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col border-t-[2px] border-top-[#c4c4c4]">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-7">
        <h2 className="text-xl md:text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[80%] lg:w-[70%] space-y-3 "
        >
          <AccordionItem
            value="item-1"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4 "
          >
            <AccordionTrigger className="text-lg text-[#292929]">
              What is Android Development
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur. Adipiscing ac ut eros, sed aenean justo lacinia
                ornare consectetur. Viverra vel ornare mauris donec aenean
                gravida aliquet vestibulum quam. Vitae ullamcorper dignissim
                auctor quis volutpat morbi arcu blandit massa. Viverra vel
                ornare mauris donec aenean gravida aliquet vestibulum quam.
                Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
                blandit massa.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4 "
          >
            <AccordionTrigger className="text-lg text-[#292929]">
              What is Android Development
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur. Adipiscing ac ut eros, sed aenean justo lacinia
                ornare consectetur. Viverra vel ornare mauris donec aenean
                gravida aliquet vestibulum quam. Vitae ullamcorper dignissim
                auctor quis volutpat morbi arcu blandit massa. Viverra vel
                ornare mauris donec aenean gravida aliquet vestibulum quam.
                Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
                blandit massa.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4 "
          >
            <AccordionTrigger className="text-lg text-[#292929]">
              What is Android Development
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur. Adipiscing ac ut eros, sed aenean justo lacinia
                ornare consectetur. Viverra vel ornare mauris donec aenean
                gravida aliquet vestibulum quam. Vitae ullamcorper dignissim
                auctor quis volutpat morbi arcu blandit massa. Viverra vel
                ornare mauris donec aenean gravida aliquet vestibulum quam.
                Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
                blandit massa.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-[2px] border-[#c7c7c7] rounded-[8px] px-4 "
          >
            <AccordionTrigger className="text-lg text-[#292929]">
              What is Android Development
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur. Adipiscing ac ut eros, sed aenean justo lacinia
                ornare consectetur. Viverra vel ornare mauris donec aenean
                gravida aliquet vestibulum quam. Vitae ullamcorper dignissim
                auctor quis volutpat morbi arcu blandit massa. Viverra vel
                ornare mauris donec aenean gravida aliquet vestibulum quam.
                Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
                blandit massa.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
