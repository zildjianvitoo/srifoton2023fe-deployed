import SpeakerCard from "@/components/atoms/SpeakerCard";
import React from "react";

export default function Intro() {
  return (
    <section className="mt-10">
      <div className="flex flex-col justify-center w-full p-6 lg:p-10 gap-14 lg:flex-row">
        <div className="flex lg:w-[35%]  lg:mt-16 ">
          <h1 className=" text-[36px] xs:text-[44px]  leading-[3rem] lg:text-[60px] lg:leading-[4rem] font-semibold tracking-wider  p-1 pb-2 intro-seminar-header text-center lg:text-start mt-10">
            <span className="text-[#494B7C]">
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
