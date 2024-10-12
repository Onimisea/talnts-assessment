import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col ">
      <div className="w-full flex flex-col items-center justify-center py-16 gap-10">
        <h2 className="text-2xl md:text-3xl font-bold">About this Bootcamp</h2>

        <div className="w-full h-[200px] md:w-[80%] sm:h-[300px] sm2:h-[400px] md:h-[450px] lg:h-[500px] aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center leading-[50px] w-full md:w-[75%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
          pulvinar interdum porttitor elit quis elementum duis curabitur.
          Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
          Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
          quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
          blandit massa. Adipiscing ac ut eros, sed aenean justo lacinia ornare
          consectetur.
        </p>

        <Link href="" className="text-primary_blue font-bold">
          See More
        </Link>
      </div>
    </div>
  );
};
