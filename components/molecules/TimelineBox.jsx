export default function TimelineBox({
  title,
  description,
  date,
  right,
  barColor = "bg-gradient-to-b from-[#FC39FC] to-[#337EF0]",
  titleColor = "bg-gradient-to-br from-[#FC39FC] to-[#337EF0] bg-clip-text text-transparent",
  descColor = "text-[#747474] dark:text-white",
  dateColor = "text-[#FC39FC]/80 ",
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
          <h2 className={`text-2xl font-semibold lg:text-3xl  ${titleColor} `}>
            {title}
          </h2>
          <p className={` mb-1 font-semibold  ${dateColor} `}>{date}</p>
          <p className={`leading-tight text-lg dark:font-light ${descColor} `}>
            {description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row-reverse lg:text-right md:contents">
      <div className="col-start-1 col-end-5 p-4 my-4 ml-auto rounded-xl">
        <h2 className={`text-2xl font-semibold lg:text-3xl  ${titleColor}`}>
          {title}
        </h2>
        <p className={`font-semibold  ${dateColor}`}>{date}</p>
        <p
          className={`mt-1 text-lg leading-tight dark:font-light ${descColor} `}
        >
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
