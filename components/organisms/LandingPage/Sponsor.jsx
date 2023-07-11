import { sponsorImage, medpartImage, isBorderBlue } from "@/utils/sponsorUtils";
import React from "react";
import SponsorCard from "../../atoms/SponsorCard";

export default function Sponsor() {
  return (
    <section id="sponsor" className="mt-16">
      <div className="flex flex-col px-2 py-4 lg:p-10">
        <h1 className="w-full text-5xl font-semibold tracking-wider text-center lg:text-6xl sponsor-header dark:sponsor-header-dark">
          Sponsor
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-6 mt-10 lg:px-16">
          {sponsorImage.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              blue={isBorderBlue(index) ? true : false}
            />
          ))}
        </div>

        <h1 className="w-full mt-32 text-5xl font-semibold tracking-wider text-center lg:text-6xl sponsor-header dark:sponsor-header-dark">
          Media Partner
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-6 mt-10 lg:px-16">
          {medpartImage.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              blue={isBorderBlue(index) ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
