import SpeakerCard from "@/components/atoms/SpeakerCard";
import { useTheme } from "next-themes";
import React from "react";

export default function Intro() {
  const { theme } = useTheme();

  return (
    <section className="mt-10">
      <div className="flex flex-col justify-center w-full p-6 lg:p-10 gap-14 lg:flex-row">
        <div className="flex lg:w-[35%]  lg:mt-16 ">
          <h1
            className={` text-[36px] xs:text-[44px]  leading-[3rem] lg:text-[60px] lg:leading-[4rem] font-semibold tracking-wider  p-1 pb-2 text-center lg:text-start mt-10 ${
              theme === "light"
                ? "intro-seminar-header"
                : " intro-seminar-header-dark"
            }`}
          >
            <span className="text-[#494B7C] dark:text-[#E5EEFF]">
              Ayo! <br />
            </span>{" "}
            Segera Gabung dan Dapatkan Ilmunya
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 lg:items-start md:flex-row">
          <SpeakerCard />
          <SpeakerCard secondCard />
        </div>
      </div>
    </section>
  );
}
