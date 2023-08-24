import useBreakpoint from "@/hooks/useBreakPoint";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

export default function MascotExplanation() {
  const { theme } = useTheme();

  const breakPoint = useBreakpoint();

  const vectorImageSource =
    theme === "light"
      ? [
          "/assets/LandingPage/vector-topleft-mascotdesc.svg",
          "/assets/LandingPage/vector-midleft-mascotdesc.svg",
          "/assets/LandingPage/vector-bottomleft-mascotdesc.svg",
          "/assets/LandingPage/vector-topright-mascotdesc.svg",
          "/assets/LandingPage/vector-midright-mascotdesc.svg",
          "/assets/LandingPage/vector-bottomright-mascotdesc.svg",
        ]
      : [
          "/assets/LandingPage/vector-topleft-mascotdesc-dark.svg",
          "/assets/LandingPage/vector-midleft-mascotdesc-dark.svg",
          "/assets/LandingPage/vector-bottomleft-mascotdesc-dark.svg",
          "/assets/LandingPage/vector-topright-mascotdesc-dark.svg",
          "/assets/LandingPage/vector-midright-mascotdesc-dark.svg",
          "/assets/LandingPage/vector-bottomright-mascotdesc-dark.svg",
        ];

  if (breakPoint === "sm" || breakPoint === "md" || breakPoint === "lg") {
    return (
      <section id="mascot-description" className="my-12">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              src={"/assets/LandingPage/mascotdesc-img.png"}
              alt="Mascot Srifoton"
              width={200}
              height={230}
              className="sm:w-[300px] md:w-[380px]"
              quality={100}
            />
          </div>
          <div className="flex flex-col justify-center gap-5 px-4 mt-6 ">
            <div className="flex flex-col gap-4 px-2">
              <div className="flex gap-2">
                {" "}
                <div className="w-8 h-8">
                  <VscCircleLargeFilled className="text-[#494B7C] dark:text-white w-full  mt-2" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h3 className=" font-bold text-2xl text-[#494B7C] dark:text-white  w-[200px]">
                    Tanjak & Baju Besi
                  </h3>
                  <p className="text-[#747474] dark:text-[#9BA7BC] ">
                    Merepresentasikan bahwa meskipun zaman sudah modern,
                    nilai-nilai budaya yang ada harus tetap dijaga dan
                    dilestarikan.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="w-8 h-8">
                  <VscCircleLargeFilled className="text-[#494B7C] dark:text-white w-full  mt-2" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h3 className=" font-bold text-2xl text-[#494B7C] dark:text-white  w-[200px]">
                    Tombol Power
                  </h3>
                  <p className="text-[#747474] dark:text-[#9BA7BC] ">
                    Berbentuk segi lima yang terletak di dada mascot
                    merepresentasikan kali kelima acara Srifoton ini
                    diselenggarakan.
                  </p>
                </div>
              </div>
              <div className="flex gap-1 md:gap-2 -translate-x-1.5 md:translate-x-0">
                {" "}
                <div className="w-8 h-8">
                  <VscCircleLargeFilled className="text-[#494B7C] dark:text-white w-full  mt-2" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h3 className=" font-bold text-2xl text-[#494B7C] dark:text-white  w-[200px]">
                    FUEGO
                  </h3>
                  <p className="text-[#747474] dark:text-[#9BA7BC] ">
                    Diambil dari Bahasa Spanyol yang memiliki arti Api.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                {" "}
                <div className="w-8 h-8">
                  <VscCircleLargeFilled className="text-[#494B7C] dark:text-white w-full  mt-2" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h3 className=" font-bold text-2xl text-[#494B7C] dark:text-white  w-[200px]">
                    Merah
                  </h3>
                  <p className="text-[#747474] dark:text-[#9BA7BC] ">
                    Merupakan warna yang identik dengan bumi Sriwijaya.
                    (Kegimbaraan dan Keberanian)
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {" "}
                <div className="w-8 h-8">
                  <VscCircleLargeFilled className="text-[#494B7C] dark:text-white w-full  mt-2" />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h3 className=" font-bold text-2xl text-[#494B7C] dark:text-white  w-[200px]">
                    Emas
                  </h3>
                  <p className="text-[#747474] dark:text-[#9BA7BC] ">
                    Merupakan warna yang identik dengan bumi Sriwijaya.
                    (Keagungan)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="mascot-description" className="lg:mt-24 lg:mb-16">
      <div className="flex justify-center gap-10 px-10 xl:px-20">
        <div className="flex flex-col w-[20%] gap-28">
          <div className="flex w-full gap-3">
            <div className="flex flex-col gap-1 text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] dark:text-white w-[200px]">
                Tanjak &<br /> Baju Besi
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                Merepresentasikan bahwa meskipun zaman sudah modern, nilai-nilai
                budaya yang ada harus tetap dijaga dan dilestarikan.
              </p>
            </div>
            <Image
              src={vectorImageSource[0]}
              alt="Vector Atas Kiri"
              width={120}
              height={56}
              className="mt-1 mb-auto"
            />
          </div>
          <div className="flex w-full gap-3">
            <div className="flex flex-col gap-1 text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] dark:text-white  w-[200px]">
                Tombol Power
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                Berbentuk segi lima yang terletak di dada mascot
                merepresentasikan kali kelima acara Srifoton ini
                diselenggarakan.
              </p>
            </div>
            <Image
              src={vectorImageSource[1]}
              alt="Vector Tengah Kiri"
              width={120}
              height={56}
              className="mt-2 mb-auto"
            />
          </div>
          <div className="flex w-full gap-3 mt-6">
            <div className="flex flex-col gap-1 text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] dark:text-white  w-[200px]">
                FUEGO
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                Diambil dari Bahasa Spanyol yang memiliki arti{" "}
                <span className="font-semibold ">Api.</span>
              </p>
            </div>
            <Image
              src={vectorImageSource[2]}
              alt="Vector Bawah Kiri"
              width={120}
              height={56}
              className="mb-auto -translate-y-8 "
            />
          </div>
        </div>
        <div className="relative lg:translate-x-24 lg:translate-y-10 xl:translate-x-10 xl:translate-y-6">
          <Image
            src={"/assets/LandingPage/mascotdesc-img.png"}
            alt="Mascot Srifoton"
            width={510}
            height={560}
            quality={100}
          />
        </div>
        <div className="flex flex-col w-[20%] gap-28">
          <div className="flex w-full gap-3">
            <Image
              src={vectorImageSource[3]}
              alt="Vector Atas Kanan"
              width={120}
              height={56}
              className="mt-1 mb-auto"
            />
            <div className="flex flex-col gap-1 text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] dark:text-white w-[200px]">
                Burung Phoenix
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                Maknanya adalah untuk merepresentasikan pembaharuan.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-12">
            <Image
              src={vectorImageSource[4]}
              alt="Vector Tengah Kiri"
              width={120}
              height={56}
              className="mt-2 mb-auto"
            />
            <div className="flex flex-col gap-1 text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] dark:text-white  w-[200px]">
                Merah
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                merupakan warna yang identik dengan bumi Sriwijaya. (Kegimbaraan
                dan Keberanian)
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-10">
            <Image
              src={vectorImageSource[5]}
              alt="Vector Bawah Kiri"
              width={120}
              height={56}
              className="mb-auto -translate-y-8 "
            />
            <div className="flex flex-col gap-1 text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C]  dark:text-white  w-[200px]">
                Emas
              </h3>
              <p className="w-full text-[#747474] dark:text-[#9BA7BC]">
                merupakan warna yang identik dengan bumi Sriwijaya. (Keagungan)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
