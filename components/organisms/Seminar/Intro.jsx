import SpeakerCard from "@/components/atoms/SpeakerCard";
import { useTheme } from "next-themes";

import React from "react";

export default function Intro() {
  const { theme } = useTheme();

  const speaker1ImgSource =
    theme === "light"
      ? "/assets/Seminar/cendekia2.png"
      : "/assets/Seminar/cendekia-dark.png";

  const speaker2ImgSource =
    theme === "light"
      ? "/assets/Seminar/rian2.png"
      : "/assets/Seminar/rian-dark.png";

  const speakerData = [
    {
      name: "Cendekia Luthfieta",
      img: speaker1ImgSource,
      role: "Programmer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Corrupti distinctio consequuntur laborum nisi ",
    },
    {
      name: "Rian Fahardhi",
      img: speaker2ImgSource,
      role: "Content Creator",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Corrupti distinctio consequuntur laborum nisi ",
    },
  ];

  return (
    <section className="lg:mt-10">
      <div className="flex flex-col justify-center w-full p-6 lg:p-10 lg:gap-10 xl:gap-14 lg:flex-row">
        <div className="flex lg:w-[40%] xl:w-[35%] lg:mt-16 ">
          <h1 className=" text-[36px] xs:text-[44px]  leading-[3rem] xl:text-[60px] lg:leading-[4rem] font-semibold tracking-wider  p-1 pb-2 text-center lg:text-start mt-10 intro-seminar-header dark:intro-seminar-header-dark">
            <span className=" bg-gradient-to-br bg-clip-text text-transparent from-[#FC39FC] to-[#337EF0]">
              Ayo! <br />
            </span>{" "}
            Segera Gabung dan Dapatkan Ilmunya
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 mt-8 lg:mt-0 lg:items-start md:flex-row">
          <SpeakerCard speaker={speakerData[0]} />
          <SpeakerCard speaker={speakerData[1]} secondCard />
        </div>
      </div>
    </section>
  );
}
