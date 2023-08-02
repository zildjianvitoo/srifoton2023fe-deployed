import LayoutMain from "@/components/LayoutMain";
import { ethnocentric } from "@/public/fonts/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

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
        className="relative h-full mt-12 overflow-hidden lg:h-screen lg:mt-6"
      >
        <div className="relative flex flex-col gap-16 mt-12 md:mt-20 lg:mt-24">
          <div className="flex items-center  justify-center w-full mx-auto relative lg:w-[70%] ">
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
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`text-[30px] lg:pb-2 xs:text-4xl pl-[2px] md:text-4xl lg:text-[55px] font-semibold tracking-widest lg:tracking-wider ${ethnocentric.className}`}
            >
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton">
                Competitive{" "}
              </span>
              Programming
            </h1>
          </div>
        </div>
      </section>
    </LayoutMain>
  );
}
