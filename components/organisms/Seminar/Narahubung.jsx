import NarahubungCard from "@/components/molecules/NarahubungCard";
import { ethnocentric } from "@/public/fonts/fonts";
import React from "react";

export default function Narahubung() {
  return (
    <section id="narahubung-seminar" className="mt-8 lg:mt-16">
      <div className="bg-gradient-to-b from-[#E6EFFF] to-[#F0E1FF] dark:from-[#5F7AC2]/30 dark:to-[#E5AFE5]/40 h-full py-8">
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 mt-2 text-2xl md:text-3xl font-semibold tracking-wider text-center lg:text-6xl narahubung-header dark:narahubung-header-dark ${ethnocentric.className} `}
          >
            Narahubung
          </h1>
          <div className="flex flex-col justify-center gap-8 mt-12 md:gap-20 lg:gap-36 lg:flex-row">
            <NarahubungCard />
            <NarahubungCard />
          </div>
        </div>
      </div>
    </section>
  );
}
