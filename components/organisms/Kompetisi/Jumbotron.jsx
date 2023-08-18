import SwiperKompetisiCard from "@/components/molecules/SwiperKompetisiCard";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Jumbotron() {
  const { theme } = useTheme();

  const blueCirlceImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-bluecircle.svg"
      : "/assets/Kompetisi/jumbotron-bluecircle-dark.svg";
  const pinkCirlceImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-pinkcircle.svg"
      : "/assets/Kompetisi/jumbotron-pinkcircle-dark.svg";

  return (
    <section className="relative h-full mt-12 overflow-hidden lg:h-screen lg:mt-6">
      <div className="flex flex-col justify-center p-8 mt-12 lg:px-20 xl:px-32 lg:mt-32 lg:flex-row">
        <div className="flex flex-col justify-center w-fit lg:w-1/2">
          <h1 className="p-[2px] text-4xl font-bold leading-snug lg:leading-[4.65rem] tracking-wide w-fit  lg:text-[60px] jumbotron-kompetisi-header dark:jumbotron-kompetisi-header-dark ">
            Ajang Kompetisi <br /> & Raih Prestasi
          </h1>
          <p className="mt-3 lg:!leading-8 text-lg lg:text-xl text-[#767676] dark:text-[#B4C0D5] lg:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit{" "}
            <span className="font-poppins">interdum</span>, ac aliquet odio
            mattis. et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="relative z-0 flex mt-10 lg:mt-0 lg:w-1/2 ">
          <div className="z-10 flex mx-auto -translate-x-7 lg:translate-x-0 lg:absolute -top-10 xl:left-16">
            <SwiperKompetisiCard />
            <div className="flex translate-y-56 -translate-x-28">
              <Image
                src={blueCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="bottom-0 right-0 hidden z-1 lg:flex"
              />
              <Image
                src={pinkCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="bottom-0 right-0 hidden z-[2] lg:flex -translate-x-4"
              />
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src={blueCirlceImgSource}
              alt={"blue cirlce"}
              width={450}
              height={450}
              className="absolute top-0 z-0 "
            />

            <Image
              src={pinkCirlceImgSource}
              alt={"pink cirlce"}
              width={350}
              height={350}
              className="absolute bottom-0 right-0 lg:-translate-y-10 xl:-translate-y-0 lg:translate-x-20 xl:translate-x-8 z-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
