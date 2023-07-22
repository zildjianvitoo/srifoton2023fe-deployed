import SpeakerCard from "@/components/atoms/SpeakerCard";

import React from "react";

export default function Intro() {
  const speakerData = [
    {
      name: "Cendekia Luthfieta",
      img: "/assets/Seminar/cendekia2.png",
      role: "Programmer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Corrupti distinctio consequuntur laborum nisi ",
    },
    {
      name: "Rian Fahardhi",
      img: "/assets/Seminar/rian2.png",
      role: "Content Creator",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Corrupti distinctio consequuntur laborum nisi ",
    },
  ];

  return (
    <section className="mt-10">
      <div className="flex flex-col justify-center w-full p-6 lg:p-10 gap-14 lg:flex-row">
        <div className="flex lg:w-[35%]  lg:mt-16 ">
          <h1 className=" text-[36px] xs:text-[44px]  leading-[3rem] lg:text-[60px] lg:leading-[4rem] font-semibold tracking-wider  p-1 pb-2 text-center lg:text-start mt-10 intro-seminar-header dark:intro-seminar-header-dark">
            <span className=" bg-gradient-to-br bg-clip-text text-transparent from-[#FC39FC] to-[#337EF0]">
              Ayo! <br />
            </span>{" "}
            Segera Gabung dan Dapatkan Ilmunya
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 lg:items-start md:flex-row">
          <SpeakerCard speaker={speakerData[0]} />
          <SpeakerCard speaker={speakerData[1]} secondCard />
        </div>
      </div>
    </section>
  );
}
