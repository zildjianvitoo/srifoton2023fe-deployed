import { ethnocentric } from "@/public/fonts/fonts";
import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <section id="coming-soon">
      <div className="flex flex-col w-4/5 h-full gap-10 mx-auto mt-32 lg:min-h-[80vh]">
        <img
          src="./assets/comingsoon-topdecor-img.svg"
          alt="coming soon top decor"
        />
        <div
          className={`flex flex-col items-center justify-center ${ethnocentric.className}`}
        >
          <h1 className="z-10 py-3 text-4xl font-bold tracking-wider text-transparent xs:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-pink-srifoton to-blue-srifoton bg-clip-text comingsoon-header-segera">
            Segera
          </h1>
          <h1 className="px-2 text-4xl font-bold tracking-widest xs:text-5xl md:text-6xl -translate-y-7 lg:-translate-y-12 lg:text-8xl comingsoon-header-hadir dark:comingsoon-header-hadir-dark">
            Hadir
          </h1>
        </div>

        <img
          src="./assets/comingsoon-bottomdecor-img.svg"
          alt="coming soon bottom decor"
        />
      </div>
    </section>
  );
}
