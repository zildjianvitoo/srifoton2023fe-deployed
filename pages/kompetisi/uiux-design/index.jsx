import LayoutMain from "@/components/LayoutMain";
import NoSSR from "@/components/NoSSR";
import Button from "@/components/atoms/Button";
import TimelineBox from "@/components/molecules/TimelineBox";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import QNAKompetisi from "@/components/organisms/Kompetisi/QNAKompetisi";
import Narahubung from "@/components/organisms/Seminar/Narahubung";
import useBreakpoint from "@/hooks/useBreakPoint";
import { ethnocentric } from "@/public/fonts/fonts";
import { narahubungUiUx } from "@/utils/narahubungList";
import { uiuxDesignQnaList } from "@/utils/qnaList";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const timelineContent = [
  {
    title: "Pendaftaran",
    date: "23/08/2023 - 02/10/2023",
    desc: "Peserta dapat mendaftarkan diri pada kompetisi UI/UX Design.",
  },
  {
    title: "Pengumpulan Karya",
    date: "28/08/2023",
    desc: "Peserta dapat mengumpulkan karya pada tenggat waktu yang telah di tentukan.",
  },
  {
    title: "Penutupan Pendaftaran & Pengumpulan Karya",
    date: "02/10/2023",
    desc: "Batas waktu pengumpulan karya, jika peserta tidak mengumpulkan maka dianggap gugur.",
  },
  {
    title: "Pengumuman Finalis",
    date: "12/10/2023",
    desc: "Setelah peserta mengumpulkan karya, akan dipilih beberapa finalis untuk maju ke babak selanjutnya.",
  },
  {
    title: "Presentasi Finalis",
    date: "14/10/2023",
    desc: "Pesreta yang terpilih menjadi finalis wajib mempresentasikan hasil karyanya.",
  },
];

export default function UiUxDesign() {
  const breakPoint = useBreakpoint();
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
    <>
      <Head>
        <title>SRIFOTON | UI/UX Design</title>
      </Head>
      <LayoutMain>
        <section
          id="jumbotron-cp"
          className="relative h-full mt-12 overflow-x-hidden lg:mt-6"
        >
          <div className="relative flex flex-col mt-12 lg:gap-16 md:mt-20 lg:mt-24">
            <div className="flex items-center justify-center w-full mx-auto relative lg:w-[70%] h-[70vh] lg:h-full">
              <Image
                src={"/assets/Kompetisi/jumbotron-uiux-img.png"}
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
              <div className="flex flex-wrap justify-center -translate-x-24 lg:flex-nowrap ">
                <Image
                  src={pinkCirlceImgSource}
                  alt={"blue cirlce"}
                  width={breakPoint !== "lg" ? 430 : 375}
                  height={430}
                  className="self-end translate-x-32 justify-self-end z-1"
                />
                <Image
                  src={blueCirlceImgSource}
                  alt={"blue cirlce"}
                  width={breakPoint !== "lg" ? 500 : 445}
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
                  UI/UX{" "}
                </span>
                <span className="competition-type-header pl-1 tracking-[0.225rem] dark:text-[#02053e]">
                  Design
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-poppins text-[#767676] dark:text-white !leading-8 lg:px-8 w-full lg:w-[65%] mx-auto text-left lg:text-center">
                Tema yang diangkat pada lomba UI/UX Design SRIFOTON 2023 ini
                adalah{" "}
                <span className="italic font-semibold">
                  {"”"}Developing Innovative Technology To Compete In The
                  Digital Era
                  {"”"}
                </span>{" "}
                dan berfokus pada desain membuat tampilan pengguna dalam ruang
                lingkup kesehatan lingkungan.
              </p>
            </div>
          </div>
        </section>
        <section
          id="timeline-cp"
          className="relative h-full mt-12 overflow-x-hidden lg:mt-48"
        >
          <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
            <h2
              className={`text-2xl pl-0.5 font-semibold md:text-3xl tracking-wider lg:text-5xl competition-type-timeline-header dark:text-[#02053e] ${ethnocentric.className}`}
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
                    right={index % 2 !== 0 ? true : false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <LayoutCredentials notUseLogo>
          <div className="z-10 flex flex-col gap-10 px-6 lg:flex-row lg:py-12">
            <Image
              src={"/assets/Kompetisi/competition-type-cta-img.svg"}
              alt="CTA icon"
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-10 ">
              <h2
                className={`text-2xl pl-0.5 font-semibold md:text-3xl tracking-wider lg:text-[45px] competition-type-cta-header lg:!leading-[2.5rem] dark:text-[#02053e] !z-[-10] ${ethnocentric.className}`}
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
                Jadilah bagian dari perjalanan luar biasa ini! Ayo, tunjukkan
                bakat terbaikmu dan raih prestasi baru dalam kompetisi. Daftar
                sekarang dan buktikan bahwa kamu adalah yang terbaik di
                bidangmu!
              </p>
              <div className="flex flex-col items-center gap-x-6 gap-y-4 lg:flex-row">
                <NoSSR>
                  <Link
                    href="/kompetisi/register/uiux-design"
                    className=" w-3/4 md:w-[50%] lg:w-[58%] xl:w-[40%] font-semibold "
                  >
                    <Button
                      style={`w-full relative border-none bg-gradient-to-r from-[#FC39FC] to-[#337EF0] ${"button-style"} ${
                        theme === "light"
                          ? "button-competition-type"
                          : "button-competition-type-dark"
                      } `}
                    >
                      Daftar
                    </Button>
                  </Link>
                </NoSSR>
                <NoSSR>
                  <a
                    href="https://drive.google.com/file/d/1g-bIl15oGpNOvrGWCiv10RU4d6yCEHWk/view?usp=sharing"
                    className="w-3/4 md:w-[50%] lg:w-[58%] xl:w-[40%] font-semibold "
                  >
                    <Button
                      style={`w-full relative border-none bg-gradient-to-r from-[#FC39FC] to-[#337EF0] ${"button-style"} ${
                        theme === "light"
                          ? "button-competition-type"
                          : "button-competition-type-dark"
                      }  `}
                    >
                      Buku Panduan
                    </Button>
                  </a>
                </NoSSR>
              </div>
            </div>
          </div>
        </LayoutCredentials>
        <Narahubung contacts={narahubungUiUx} id={"narahubung-uiuxdesing"} />
        <QNAKompetisi competitionTypePage qnaList={uiuxDesignQnaList} />
      </LayoutMain>
    </>
  );
}
