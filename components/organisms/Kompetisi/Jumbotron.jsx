import SwiperKompetisiCard from "@/components/molecules/SwiperKompetisiCard";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Jumbotron() {
  const { theme } = useTheme();

  const blueCircleImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-bluecircle.svg"
      : "/assets/Kompetisi/jumbotron-bluecircle-dark.svg";
  const pinkCircleImgSource =
    theme === "light"
      ? "/assets/Kompetisi/jumbotron-pinkcircle.svg"
      : "/assets/Kompetisi/jumbotron-pinkcircle-dark.svg";

  return (
    <>
      <section className="relative h-full] mt-12 overflow-hidden xs:h-[110vh] md:h-full lg:min-h-screen xl:min-h-[90vh] lg:mt-6">
        <div className="flex flex-col justify-center p-8 mt-12 lg:px-20 xl:px-32 lg:mt-32 md:flex-row">
          <div className="flex flex-col justify-center w-fit lg:w-1/2">
            <h1 className="p-[2px] text-3xl xs:text-4xl md:text-4xl font-bold leading-snug lg:leading-[4.65rem] tracking-wide w-fit  lg:text-[60px] jumbotron-kompetisi-header dark:jumbotron-kompetisi-header-dark ">
              Ajang Kompetisi <br /> & Raih Prestasi
            </h1>
            <p className="mt-3 lg:!leading-8  text-base xs:text-lg lg:text-xl text-[#767676] dark:text-[#B4C0D5] lg:w-[80%]">
              Menyediakan wadah bagi peserta yang memiliki minat dan bakat pada
              bidang teknologi khususnya di berbagai cabang lomba yang
              diselenggarakan. Selain itu, acara ini dapat dijadikan sebagai
              sarana kolaborasi, bekerja sama, dan unjuk kemampuan peserta.
            </p>
          </div>

          <div className="relative z-0 flex mt-10 md:mt-5 lg:mt-12 xl:mt-5 lg:w-1/2 ">
            <div className="z-10 flex mx-auto -translate-x-10 xs:-translate-x-7 lg:translate-x-0 lg:absolute -top-10 xl:left-16">
              <SwiperKompetisiCard />
              <div className="flex translate-y-56 -translate-x-28 ">
                <Image
                  src={blueCircleImgSource}
                  alt={"blue circle"}
                  width={40}
                  height={40}
                  className="bottom-0 right-0 hidden z-1 lg:flex"
                />
                <Image
                  src={pinkCircleImgSource}
                  alt={"pink circle"}
                  width={40}
                  height={40}
                  className="bottom-0 right-0 hidden z-[2] lg:flex -translate-x-4"
                />
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src={blueCircleImgSource}
                alt={"blue circle"}
                width={450}
                height={450}
                className="absolute top-0 z-0"
              />

              <Image
                src={pinkCircleImgSource}
                alt={"pink circle"}
                width={350}
                height={350}
                className="absolute bottom-0 right-0 lg:-translate-y-12 xl:-translate-y-8 lg:translate-x-20 xl:translate-x-8 z-1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
