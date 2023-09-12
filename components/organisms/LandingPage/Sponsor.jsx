import { sponsorImage, medpartImage, isBorderBlue } from "@/utils/sponsorUtils";
import React from "react";
import SponsorCard from "../../atoms/SponsorCard";
import { ethnocentric } from "@/public/fonts/fonts";
import Image from "next/image";

export default function Sponsor() {
  return (
    <section id="sponsor" className="mt-16 ">
      <div className="flex flex-col px-6 py-4 lg:p-10 lg:px-20 ">
        <h1
          className={`w-full pb-3 text-4xl font-semibold tracking-wider text-center lg:text-5xl xl:text-6xl sponsor-header dark:sponsor-header-dark ${ethnocentric.className}`}
        >
          Sponsor
        </h1>
        <div className="flex flex-wrap justify-start w-full min-h-[70vh] gap-8 px-6 mt-10 border-2 border-dotted lg:px-10 lg:py-6 border-pink-srifoton rounded-[20px]">
          {/* {sponsorImage.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              blue={isBorderBlue(index) ? true : false}
            />
          ))} */}
          <figure>
            <Image
              width={250}
              height={90}
              src={"/assets/LandingPage/logo-domainesia.png"}
              alt="Logo Domainesia"
            />
          </figure>
        </div>

        {/* <h1
          className={`p-3 pt-0 mx-auto mt-32 text-4xl font-semibold tracking-wider text-center w-fit lg:text-5xl xl:text-6xl  sponsor-header dark:sponsor-header-dark ${ethnocentric.className}`}
        >
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
        </div> */}
      </div>
    </section>
  );
}
