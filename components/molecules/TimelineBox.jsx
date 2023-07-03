import React from "react";

export default function TimelineBox({ title, description, date, right }) {
  if (right) {
    return (
      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-2 h-full dark:bg-[#75497C] bg-[#E4B0F6] pointer-events-none" />
          </div>
          <div className="absolute w-6 h-6 -mt-3 dark:bg-[#75497C] bg-[#E4B0F6] rounded-full shadow top-1/2" />
        </div>
        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto dark:bg-[#75497C] bg-[#E4B0F6] shadow-md rounded-xl">
          <h3 className="text-lg font-semibold lg:text-2xl">{title}</h3>
          <p className=" mb-1 font-semibold text-[#9B829F] dark:text-[#C196C5]">
            {date}
          </p>
          <p className="leading-tight text-justify">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="col-start-1 col-end-5  p-4 my-4 ml-auto dark:bg-[#75497C] bg-[#E4B0F6]  shadow-md rounded-xl">
        <h3 className="text-lg font-semibold lg:text-2xl">{title}</h3>
        <p className="font-semibold text-[#9B829F] dark:text-[#C196C5]">
          {date}
        </p>
        <p className="mt-1 leading-tight text-justify">{description}</p>
      </div>
      <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className="w-2 h-full dark:bg-[#75497C] bg-[#E4B0F6] pointer-events-none" />
        </div>
        <div className="absolute w-6 h-6 -mt-3 dark:bg-[#75497C] bg-[#E4B0F6] rounded-full shadow top-1/2" />
      </div>
    </div>
  );
}
