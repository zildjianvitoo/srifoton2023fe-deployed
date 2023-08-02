import LayoutMain from "@/components/LayoutMain";
import TimelineBox from "@/components/molecules/TimelineBox";
import { ethnocentric } from "@/public/fonts/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const timelineContent = [
  {
    title: "Presale Tiket",
    date: "18/08/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penjualan Tiket Umum",
    date: "20/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penutupan Acara & Seminar",
    date: "21/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function CompetitiveProgramming() {
  const { theme } = useTheme();

  const blueCirlceImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-bluecircle.svg"
      : "/assets/Kompetisi/jumbotron-bluecircle-dark.svg";
  const pinkCirlceImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-pinkcircle.svg"
      : "/assets/Kompetisi/jumbotron-pinkcircle-dark.svg";

  return (
    <LayoutMain>
      <section
        id="jumbotron-cp"
        className="relative h-full mt-12 overflow-hidden lg:mt-6"
      >
        <div className="relative flex flex-col mt-12 lg:gap-16 md:mt-20 lg:mt-24">
          <div className="flex items-center justify-center w-full mx-auto relative lg:w-[70%] h-[70vh] lg:h-full">
            <Image
              src={"/assets/Kompetisi/jumbotron-cp-img.png"}
              alt="Jumbotron Big Icon"
              width={500}
              height={450}
              quality={100}
              className="absolute z-10 top-[16%] lg:top-auto"
            />
            <div className="flex self-start translate-x-28 justify-self-start">
              <Image
                src={blueCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="top-0 hidden z-1 lg:flex"
              />
              <Image
                src={pinkCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="top-0 hidden z-[2] lg:flex -translate-x-4"
              />
            </div>
            <div className="flex flex-wrap -translate-x-24 ">
              <Image
                src={pinkCirlceImgSource}
                alt={"blue cirlce"}
                width={430}
                height={430}
                className="self-end translate-x-32 justify-self-end z-1"
              />
              <Image
                src={blueCirlceImgSource}
                alt={"blue cirlce"}
                width={500}
                height={500}
                className="z-0 translate-x-20 -translate-y-32 lg:translate-x-0 lg:translate-y-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 px-8">
            <h1
              className={`text-3xl text-center lg:p-2  pl-[2px] md:text-4xl lg:text-[55px] font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className}`}
            >
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
                Competitive{" "}
              </span>
              <span className="competition-type-header dark:text-[#02053e]">
                Programming
              </span>
            </h1>
            <p className="text-xl font-poppins text-[#767676] dark:text-white !leading-9 px-4 lg:px-8 w-full lg:w-[65%] mx-auto text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. et
              velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. et velit interdum, ac aliquet
              odio mattis.
            </p>
          </div>
        </div>
      </section>
      <section
        id="timeline-cp"
        className="relative h-full mt-12 overflow-hidden lg:mt-48"
      >
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
          <h1
            className={`text-2xl pl-0.5 font-semibold tracking-wider lg:text-5xl competition-type-timeline-header dark:text-[#02053e] ${ethnocentric.className}`}
          >
            Alur Acara
          </h1>
          <div className="container mt-8 lg:w-3/5 lg:mt-0">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid  text-[#75497C] dark:text-[#fde5ff]">
              {timelineContent.map((item, index) => (
                <TimelineBox
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  description={item.desc}
                  dateColor="text-[#337EF0]"
                  right={index == 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-60"></div>
    </LayoutMain>
  );
}
