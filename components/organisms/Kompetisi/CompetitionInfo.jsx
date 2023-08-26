import PricingCard from "@/components/molecules/PricingCard";
import { ethnocentric } from "@/public/fonts/fonts";
import React from "react";

export default function CompetitionInfo() {
  return (
    <section id="informasi-kompetisi" className="mt-12 md:mt-14 lg:mt-24">
      <div className="flex flex-col justify-center ">
        <h1
          className={`text-[27px] xs:text-3xl text-center lg:p-2 md:text-4xl lg:text-[55px] font-semibold tracking-widest relative z-10   lg:tracking-wider ${ethnocentric.className}`}
        >
          <span className="competition-type-header pl-1 dark:text-[#02053e]">
            Informasi{" "}
          </span>
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton">
            Kompetisi
          </span>
        </h1>
        <p className="mt-6 lg:mt-8 lg:!leading-8 text-center  text-base xs:text-lg lg:text-xl text-[#767676] dark:text-[#B4C0D5] lg:w-[80%] mx-auto">
          Mari mulai dari sekarang! <br />
          Pilih lomba yang kamu kuasai dan daftar segera. Ukur kemampuanmu dan
          dapatkan penghargaan.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-7">
          <PricingCard
            headers={"Competitive Programming"}
            price={"100.000"}
            linkTo={"competitive-programming"}
          />
          <PricingCard
            headers={"UI/UX Design"}
            price={"80.000"}
            linkTo={"uiux-design"}
          />
          <PricingCard
            headers={"Web Development"}
            price={"80.000"}
            linkTo={"web-development"}
          />
        </div>
      </div>
    </section>
  );
}
