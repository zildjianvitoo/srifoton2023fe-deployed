import Image from "next/image";
import React from "react";

export default function SpeakerCard({ secondCard }) {
  const imageSource =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

  return (
    <div
      className={`relative rounded-[50px] ${secondCard && "mt-10 lg:mt-28"} `}
    >
      <Image
        src={imageSource}
        alt="Pembicara Seminar Srifoton"
        width={340}
        height={320}
        quality={100}
        className="rounded-[28px] lg:rounded-[50px] "
      />
      <div className="absolute -bottom-1  w-full h-[25%] md:h-1/5">
        <div className="absolute inset-0 z-0 w-full glassmorphism rounded-b-[28px] lg:rounded-b-[50px]" />
        <div className="relative z-10 flex flex-col py-3 lg:pt-3 px-7">
          <h3 className="font-bold tracking-wide text-[26px] text-white lg:text-3xl w-fit lg:tracking-normal">
            Lucas Ibrahim
          </h3>
          <div className="rounded-[50px] mt-2 md:text-sm text-[#505050] bg-[#EDEDED] w-fit py-1 px-2 font-medium">
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
