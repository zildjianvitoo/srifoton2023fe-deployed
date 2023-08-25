import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Link from "next/link";
import NoSSR from "../NoSSR";
import Button from "../atoms/Button";
import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";
import { useTheme } from "next-themes";

export default function SwiperKompetisiCard() {
  const { theme } = useTheme();

  return (
    <div className="px-10 lg:px-0 ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[270px] h-[270px] xs:w-[300px] xs:h-[280px] sm:w-[320px] sm:h-[300px] md:w-[370px] md:h-[350px] lg:w-[480px] lg:h-[400px] "
      >
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#ddebff] dark:bg-[#494B7C] dark:border-[#ddebff]">
          <Image
            src={"/assets/Kompetisi/jumbotron-cp-img.png"}
            alt="Cp Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={`text-lg xs:text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className}`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              Competitive{" "}
            </span>
            <span className="competition-type-header !text-[#ddebff] dark:!text-[#494B7C]  pl-1">
              Programming
            </span>
          </h1>
          <Link
            href={`/kompetisi/competitive-programming`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${
                  theme === "light"
                    ? "button-swiper-competition-blue "
                    : "button-swiper-competition-blue-dark"
                } `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#f5dff5] dark:bg-[#75497C] dark:border-[#ddebff]">
          <Image
            src={"/assets/Kompetisi/jumbotron-uiux-img.png"}
            alt="UiUx Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={`text-lg xs:text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className} flex flex-col`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              UI/UX{" "}
            </span>
            <span className="competition-type-header tracking-widest !text-[#f5dff5] dark:!text-[#75497C] pl-1">
              Design
            </span>
          </h1>
          <Link
            href={`/kompetisi/uiux-design`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"}  ${
                  theme === "light"
                    ? "button-swiper-competition-pink "
                    : "button-swiper-competition-pink-dark"
                } `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#ddebff] dark:bg-[#494B7C] dark:border-[#ddebff]">
          <Image
            src={"/assets/Kompetisi/jumbotron-webdev-img.png"}
            alt="WebDev Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={` text-lg xs:text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className} flex flex-col z-30 relative`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              Web{" "}
            </span>
            <span className="competition-type-header tracking-widest !text-[#ddebff] dark:!text-[#494B7C] pl-1">
              Development
            </span>
          </h1>
          <Link
            href={`/kompetisi/web-development`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${
                  theme === "light"
                    ? "button-swiper-competition-blue "
                    : "button-swiper-competition-blue-dark"
                } `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
