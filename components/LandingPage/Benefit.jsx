import { useTheme } from "next-themes";
import React from "react";
import SwiperSlider from "./Swiper";

export default function Benefit() {
  const { theme } = useTheme();

  return (
    <section className="mt-10 xs:mt-20">
      <div className="flex flex-col gap-8 p-10 lg:p-16 lg:flex-row ">
        <div className={`lg:w-[35%] lg:ml-10 flex flex-col justify-start `}>
          <h1
            className={`mt-6 text-4xl font-semibold tracking-wider lg:text-6xl ${
              theme === "light" ? "benefit-header" : "benefit-header-dark"
            }`}
          >
            Manfaat
          </h1>
          <p className="text-lg lg:text-xl text-[#545454] dark:text-[#9BA7BC] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno
            vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="lg:max-w-[55%] justify-center items-center ">
          <SwiperSlider />
        </div>
      </div>
    </section>
  );
}
