import NarahubungCard from "@/components/molecules/NarahubungCard";
import NarahubungGrid from "@/components/molecules/NarahubungGrid";
import { ethnocentric } from "@/public/fonts/fonts";
import React from "react";

export default function Narahubung({ contacts, id }) {
  return (
    <section id={id} className="mt-8 lg:mt-16">
      <div className="bg-gradient-to-b from-[#E6EFFF] to-[#F0E1FF] dark:from-[#5F7AC2]/30 dark:to-[#E5AFE5]/40 h-full py-8">
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 mt-2 text-2xl md:text-4xl font-semibold w-fit mx-auto tracking-wider text-center lg:text-6xl narahubung-header dark:narahubung-header-dark ${ethnocentric.className} `}
          >
            Narahubung
          </h1>
          <NarahubungGrid contacts={contacts} />
        </div>
      </div>
    </section>
  );
}
