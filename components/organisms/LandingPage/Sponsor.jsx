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
        <div className="flex items-center flex-wrap justify-start w-fit mx-auto gap-8 px-6 py-4 pb-6 mt-10 border-2 border-dashed lg:px-10 lg:py-6 lg:pb-8 border-pink-srifoton rounded-[20px]">
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
              src={"/assets/LandingPage/logo-dicoding.png"}
              alt="Logo Dicoding"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={250}
              height={90}
              src={"/assets/LandingPage/logo-domainesia.png"}
              alt="Logo Domainesia"
              quality={100}
            />
          </figure>
        </div>

        <h1
          className={`p-3 pt-0 mx-auto mt-32 text-4xl font-semibold tracking-wider text-center w-fit lg:text-5xl xl:text-6xl  sponsor-header dark:sponsor-header-dark ${ethnocentric.className}`}
        >
          Media Partner
        </h1>
        {/* <div className="flex flex-wrap justify-center gap-8 px-6 mt-10 lg:px-16">
          {medpartImage.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              blue={isBorderBlue(index) ? true : false}
            />
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center md:justify-start py-4 pb-6  items-center w-fit lg:max-w-[80%] mx-auto gap-x-8 lg:gap-x-12 gap-y-8 px-6 mt-10 border-2 border-dashed lg:px-10 lg:py-6 lg:pb-8 border-pink-srifoton rounded-[20px]">
          {/* {sponsorImage.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              blue={isBorderBlue(index) ? true : false}
            />
          ))} */}
          <figure>
            <Image
              width={100}
              height={100}
              src={"/assets/LandingPage/logo-infolomba.png"}
              alt="Logo Domainesia"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={113}
              height={76}
              src={"/assets/LandingPage/logo-event.png"}
              alt="Logo info event"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={100}
              height={100}
              src={"/assets/LandingPage/logo-infolombanasional.png"}
              alt="Logo info lomba nasional"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={100}
              height={100}
              src={"/assets/LandingPage/logo-infoeventnasional.png"}
              alt="Logo info event nasional"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={100}
              height={100}
              src={"/assets/LandingPage/logo-eventcampus.png"}
              alt="Logo event campus"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={101}
              height={68}
              src={"/assets/LandingPage/logo-acarakampus.png"}
              alt="Logo acara kampus"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={85}
              height={107}
              src={"/assets/LandingPage/logo-infolombail.png"}
              alt="Logo info lomba"
              quality={100}
            />
          </figure>

          <figure>
            <Image
              width={120}
              height={70}
              src={"/assets/LandingPage/logo-ec.png"}
              alt="Logo event campus"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={213}
              height={90}
              src={"/assets/LandingPage/logo-en.png"}
              alt="Logo event nasional"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={327}
              height={90}
              src={"/assets/LandingPage/logo-em8.png"}
              alt="Logo event mahasiswa"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={185}
              height={88}
              src={"/assets/LandingPage/logo-infokupedia.png"}
              alt="Logo event mahasiswa"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={273}
              height={52}
              src={"/assets/LandingPage/logo-seminarinfo.png"}
              alt="Logo event mahasiswa"
              quality={100}
            />
          </figure>
          <figure>
            <Image
              width={150}
              height={53}
              src={"/assets/LandingPage/logo-madingevent.png"}
              alt="Logo event mahasiswa"
              quality={100}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
