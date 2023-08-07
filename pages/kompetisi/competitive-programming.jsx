import LayoutMain from "@/components/LayoutMain";
import NoSSR from "@/components/NoSSR";
import Button from "@/components/atoms/Button";
import TimelineBox from "@/components/molecules/TimelineBox";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import QNAKompetisi from "@/components/organisms/Kompetisi/QNAKompetisi";
import { ethnocentric } from "@/public/fonts/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const timelineContent = [
  {
    title: "Presale Tiket",
    date: "18/08/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penjualan Tiket Umum",
    date: "20/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penutupan Acara & Seminar",
    date: "21/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function CompetitiveProgramming() {
  const router = useRouter();

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
    <LayoutMain>
      <section
        id="jumbotron-cp"
        className="relative h-full mt-12 overflow-hidden lg:mt-6"
      >
        <div className="relative flex flex-col mt-12 lg:gap-16 md:mt-20 lg:mt-24">
          <div className="flex items-center justify-center w-full mx-auto relative lg:w-[70%] h-[70vh] lg:h-full">
            <Image
              src={"/assets/Kompetisi/jumbotron-cp-img.png"}
              alt="Jumbotron Big Icon"
              width={500}
              height={450}
              quality={100}
              className="absolute z-10 top-[16%] lg:top-auto"
            />
            <div className="flex self-start translate-x-28 justify-self-start">
              <Image
                src={blueCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="top-0 hidden z-1 lg:flex"
              />
              <Image
                src={pinkCirlceImgSource}
                alt={"blue cirlce"}
                width={40}
                height={40}
                className="top-0 hidden z-[2] lg:flex -translate-x-4"
              />
            </div>
            <div className="flex flex-wrap -translate-x-24 ">
              <Image
                src={pinkCirlceImgSource}
                alt={"blue cirlce"}
                width={430}
                height={430}
                className="self-end translate-x-32 justify-self-end z-1"
              />
              <Image
                src={blueCirlceImgSource}
                alt={"blue cirlce"}
                width={500}
                height={500}
                className="z-0 translate-x-20 -translate-y-32 lg:translate-x-0 lg:translate-y-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 px-6 lg:px-8">
            <h1
              className={`text-3xl text-center lg:p-2 pl-[2px] md:text-4xl lg:text-[55px] font-semibold tracking-widest  lg:tracking-wider ${ethnocentric.className}`}
            >
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton ">
                Competitive{" "}
              </span>
              <span className="competition-type-header dark:text-[#02053e]">
                Programming
              </span>
            </h1>
            <p className="text-xl font-poppins text-[#767676] dark:text-white !leading-9 lg:px-8 w-full lg:w-[65%] mx-auto text-left lg:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. et
              velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. et velit interdum, ac aliquet
              odio mattis.
            </p>
          </div>
        </div>
      </section>
      <section
        id="timeline-cp"
        className="relative h-full mt-12 overflow-hidden lg:mt-48"
      >
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
          <h2
            className={`text-2xl pl-0.5 font-semibold md:text-3xl tracking-widest lg:text-5xl competition-type-timeline-header dark:text-[#02053e] ${ethnocentric.className}`}
          >
            Alur Acara
          </h2>
          <div className="container mt-8 lg:w-3/5 lg:mt-0">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid  text-[#75497C] dark:text-[#fde5ff]">
              {timelineContent.map((item, index) => (
                <TimelineBox
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  description={item.desc}
                  dateColor="text-[#337EF0]"
                  right={index == 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <LayoutCredentials>
        <div className="z-10 flex flex-col gap-10 px-6 lg:flex-row lg:py-12">
          <Image
            src={"/assets/Kompetisi/competition-type-cta-img.svg"}
            alt="CTA icon"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-10 ">
            <h2
              className={`text-2xl pl-0.5 font-semibold md:text-3xl tracking-wider lg:text-[45px] competition-type-cta-header  dark:text-[#02053e] !z-[-10] ${ethnocentric.className}`}
            >
              <span className="competition-type-cta-header dark:text-[#02053e]">
                {" "}
                Daftarkan{" "}
              </span>{" "}
              <span className="competition-type-cta-header dark:text-[#02053e]">
                Dirimu!
              </span>
            </h2>
            <p className="text-base  dark:text-white text-[#767676] font-poppins lg:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. et
              velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex flex-col gap-x-6 gap-y-2 lg:flex-row">
              <Link
                href="/kompetisi/register/competitive-programming"
                className="mt-3 w-3/4 md:w-[35%] lg:w-[35%] font-semibold"
              >
                <NoSSR>
                  <Button
                    style={`w-full relative border-none bg-gradient-to-r from-[#FC39FC] to-[#337EF0]  ${
                      theme === "light"
                        ? "button-competition-type"
                        : "button-competition-type-dark"
                    } `}
                  >
                    Daftar
                  </Button>
                </NoSSR>
              </Link>
              <Link
                href="/kompetisi/register/"
                className=" mt-3 w-3/4 md:w-[50%] lg:w-[35%] font-semibold"
              >
                <NoSSR>
                  <Button
                    style={`w-full relative border-none bg-gradient-to-r from-[#FC39FC] to-[#337EF0] ${
                      theme === "light"
                        ? "button-competition-type"
                        : "button-competition-type-dark"
                    }  `}
                  >
                    Buku Panduan
                  </Button>
                </NoSSR>
              </Link>
            </div>
          </div>
        </div>
      </LayoutCredentials>
      <section
        id="narahubung-cp"
        className="relative h-full mt-12 overflow-hidden lg:mt-24"
      >
        <div className="bg-gradient-to-b from-[#E6EFFF] to-[#F0E1FF] dark:from-[#5F7AC2]/30 dark:to-[#E5AFE5]/40 min-h-screen">
          <div className="flex flex-col p-8">
            <h2
              className={`pb-2 mt-6 text-2xl md:text-4xl font-semibold text-center lg:text-6xl narahubung-header dark:narahubung-header-dark ${ethnocentric.className}`}
            >
              Narahubung
            </h2>
          </div>
        </div>
      </section>
      <QNAKompetisi competitionTypePage />
      <div className="mb-60"></div>
    </LayoutMain>
  );
}
