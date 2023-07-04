import React from "react";

export default function TimelineBox({
  title,
  description,
  date,
  right,
  barColor = "bg-[#75497C] dark:bg-[#FDE5FF]",
  titleColor = "text-[#75497C] dark:text-[#FDE5FF]",
  descColor = "text-[#75497C] dark:text-[#FDE5FF]",
  dateColor = "text-[#9B829F] dark:text-[#C196C5]",
}) {
  if (right) {
    return (
      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className={`w-2 h-full  pointer-events-none ${barColor}`} />
          </div>
          <div
            className={`absolute w-6 h-6 -mt-3  rounded-full shadow top-1/2 ${barColor}`}
          />
        </div>
        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto rounded-xl ">
          <h3 className={`text-2xl font-semibold lg:text-3xl  ${titleColor} `}>
            {title}
          </h3>
          <p className={` mb-1 font-semibold  ${dateColor} `}>{date}</p>
          <p className={`leading-tight text-justify ${descColor} `}>
            {description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="col-start-1 col-end-5 p-4 my-4 ml-auto rounded-xl">
        <h3 className={`text-2xl font-semibold lg:text-3xl  ${titleColor}`}>
          {title}
        </h3>
        <p className={`font-semibold  ${dateColor}`}>{date}</p>
        <p className={`mt-1 leading-tight text-justify ${descColor} `}>
          {description}
        </p>
      </div>
      <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className={`w-2 h-full  pointer-events-none ${barColor}`} />
        </div>
        <div
          className={`absolute w-6 h-6   rounded-full shadow top-1/2 ${barColor}`}
        />
      </div>
    </div>
  );
}
