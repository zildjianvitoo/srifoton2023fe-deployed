import { useState } from "react";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Image from "next/image";

function SwiperSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const { theme } = useTheme();

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setCurrentSlideIndex(currentIndex);
  };

  const swiperImage =
    theme === "light"
      ? [
          "/assets/LandingPage/benefit-2-img.svg",
          "/assets/LandingPage/benefit-1-img.svg",
          "/assets/LandingPage/benefit-3-img.svg",
        ]
      : [
          "/assets/LandingPage/benefit-2-darkimg.png",
          "/assets/LandingPage/benefit-1-darkimg.png",
          "/assets/LandingPage/benefit-3-darkimg.png",
        ];

  return (
    <div className="grid w-[90%] place-items-center rounded-4xl">
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          //   depth: 100,
          modifier: 2.5,
        }}
        spaceBetween={0}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className="flex items-center justify-center p-10"
      >
        <SwiperSlide
          className={`grid  max-w-[70%] place-items-center rounded-4xl  ${
            currentSlideIndex != 0 ? "slide" : ""
          } `}
        >
          <Image
            width={430}
            height={315}
            src={swiperImage[0]}
            alt="benefit image"
            className="grid object-cover min-w-full place-items-center rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide
          className={`grid max-w-[70%] place-items-center rounded-4xl   ${
            currentSlideIndex != 1 && "slide"
          } `}
        >
          <Image
            width={430}
            height={315}
            src={swiperImage[1]}
            alt="benefit image"
            className="grid object-cover min-w-full place-items-center rounded-4xl"
          />
        </SwiperSlide>
        <SwiperSlide
          className={`grid max-w-[70%] place-items-center rounded-4xl  ${
            currentSlideIndex != 2 ? "slide" : ""
          } `}
        >
          <Image
            width={430}
            height={315}
            src={swiperImage[2]}
            alt="benefit image"
            className="grid object-cover min-w-full place-items-center rounded-4xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(SwiperSlider), {
  ssr: false,
});
