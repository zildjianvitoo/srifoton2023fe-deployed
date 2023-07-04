import React from "react";

export default function TimelineBox({ title, description, date, right }) {
  if (right) {
    return (
      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-2 h-full dark:bg-[#FDE5FF] bg-[#75497C] pointer-events-none" />
          </div>
          <div className="absolute w-6 h-6 -mt-3 dark:bg-[#FDE5FF] bg-[#75497C] rounded-full shadow top-1/2" />
        </div>
        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto rounded-xl ">
          <h3 className="text-2xl font-semibold lg:text-3xl text-[#75497C] dark:text-[#FDE5FF] ">
            {title}
          </h3>
          <p className=" mb-1 font-semibold text-[#9B829F] dark:text-[#C196C5]">
            {date}
          </p>
          <p className="leading-tight text-justify ">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="col-start-1 col-end-5 p-4 my-4 ml-auto rounded-xl">
        <h3 className="text-2xl font-semibold lg:text-3xl text-[#75497C] dark:text-[#FDE5FF]">
          {title}
        </h3>
        <p className="font-semibold text-[#9B829F] dark:text-[#C196C5]">
          {date}
        </p>
        <p className="mt-1 leading-tight text-justify ">{description}</p>
      </div>
      <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className="w-2 h-full dark:bg-[#FDE5FF] bg-[#75497C] pointer-events-none" />
        </div>
        <div className="absolute w-6 h-6 -mt-3 dark:bg-[#FDE5FF] bg-[#75497C] rounded-full shadow top-1/2" />
      </div>
    </div>
  );
}
