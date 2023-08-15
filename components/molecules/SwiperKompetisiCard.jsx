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
        className="mySwiper w-[300px] h-[280px]  md:w-[350px] md:h-[330px] lg:w-[480px] lg:h-[380px]"
      >
        <SwiperSlide className="flex flex-col items-center justify-center w-full p-3 md:p-6">
          <Image
            src={"/assets/Kompetisi/jumbotron-cp-img.png"}
            alt="Cp Icon"
            width={210}
            height={210}
            className="w-[130px] sm:w-[150px] md:w-[185px] mx-auto lg:w-[210px]"
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
                style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-swiper-competition-blue"} `}
              >
                Info Lainnya
              </Button>
            </NoSSR>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <Link
            className="flex w-full h-full "
            href="/kompetisi/competitive-programming"
          >
            <button className="bg-[#33C25B] flex mx-auto self-end p-3 ">
              Daftar Disini
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <Link
            className="flex w-full h-full "
            href="/kompetisi/competitive-programming"
          >
            <button className="bg-[#33C25B] flex mx-auto self-end p-4 relative border-none bg-gradient-to-r  from-[#FC39FC] to-[#337EF0] button-swiper-competition-blue">
              Daftar Disini
            </button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
