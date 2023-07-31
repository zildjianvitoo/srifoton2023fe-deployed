import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export default function SwiperKompetisiCard() {
  return (
    <div className="px-10 lg:px-0">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[300px] h-[250px]  md:w-[350px] md:h-[300px] lg:w-[480px] lg:h-[380px]"
      >
        <SwiperSlide className="p-10">
          <div className="flex w-full h-full ">
            <button className="bg-[#33C25B] flex ml-auto self-end p-3 rounded-xl">
              Daftar Disini
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div className="flex w-full h-full ">
            <button className="bg-[#33C25B] flex ml-auto self-end p-3 rounded-xl">
              Daftar Disini
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div className="flex w-full h-full ">
            <button className="bg-[#33C25B] flex ml-auto self-end p-3 rounded-xl">
              Daftar Disini
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
