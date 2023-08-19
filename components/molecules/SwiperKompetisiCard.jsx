import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Link from "next/link";
import NoSSR from "../NoSSR";
import Button from "../atoms/Button";
import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";

export default function SwiperKompetisiCard() {
  return (
    <div className="px-10 lg:px-0">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[300px] h-[280px]  md:w-[350px] md:h-[330px] lg:w-[480px] lg:h-[380px] "
      >
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#ddebff] ">
          <Image
            src={"/assets/Kompetisi/jumbotron-cp-img.png"}
            alt="Cp Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={`text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className}`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              Competitive{" "}
            </span>
            <span className="competition-type-header !text-[#ddebff] pl-1">
              Programming
            </span>
          </h1>
          <Link
            href={`/kompetisi/competitive-programming`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${"button-swiper-competition-blue"} `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#f5dff5]">
          <Image
            src={"/assets/Kompetisi/jumbotron-uiux-img.png"}
            alt="UiUx Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={`text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className} flex flex-col`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              UI/UX{" "}
            </span>
            <span className="competition-type-header tracking-widest !text-[#f5dff5] pl-1">
              Design
            </span>
          </h1>
          <Link
            href={`/kompetisi/uiux-design`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${"button-swiper-competition-pink"} `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6 border-[3.5px] border-[#494b7c] border-dashed bg-[#ddebff]">
          <Image
            src={"/assets/Kompetisi/jumbotron-webdev-img.png"}
            alt="WebDev Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
            quality={100}
          />
          <h1
            className={`text-xl text-center lg:text-3xl  lg:p-2 font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className} flex flex-col`}
          >
            <span className="mx-auto text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
              Web{" "}
            </span>
            <span className="competition-type-header tracking-widest !text-[#ddebff] pl-1">
              Development
            </span>
          </h1>
          <Link
            href={`/kompetisi/web-development`}
            className="flex items-end justify-end w-2/3 mx-auto mt-3 font-semibold lg:w-1/3"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${"button-swiper-competition-blue"} `}
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
