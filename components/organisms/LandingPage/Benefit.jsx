import React from "react";
import SwiperSlider from "./Swiper";
import { ethnocentric } from "@/public/fonts/fonts";

export default function Benefit() {
  return (
    <section className="mt-10 lg:mt-20">
      <div className="flex flex-col gap-6 p-6 lg:gap-2 lg:p-16 lg:flex-row-reverse ">
        <div className="lg:w-[35%] lg:mr-10 flex flex-col justify-start">
          <h1
            className={`mt-6 text-4xl pl-0.5 font-semibold tracking-wider lg:text-6xl benefit-header dark:benefit-header-dark ${ethnocentric.className}`}
          >
            Manfaat
          </h1>
          <p className="text-lg lg:text-xl text-[#545454] dark:text-[#9BA7BC] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno
            vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" md:max-w-[70%] lg:max-w-[55%] justify-center items-center lg:mr-10">
          <SwiperSlider />
        </div>
      </div>
    </section>
  );
}
