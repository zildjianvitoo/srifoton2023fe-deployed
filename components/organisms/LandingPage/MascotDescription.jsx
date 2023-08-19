import Image from "next/image";
import React from "react";

export default function MascotExplanation() {
  return (
    <section id="mascot-description" className="lg:mt-24 lg:mb-16">
      <div className="flex justify-center gap-10 lg:px-20">
        <div className="flex flex-col w-[20%] gap-28">
          <div className="flex w-full gap-3">
            <div className="flex flex-col text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] w-[200px]">
                Tanjak &<br /> Baju Besi
              </h3>
              <p className="w-full">
                Merepresentasikan bahwa meskipun zaman sudah modern, nilai-nilai
                budaya yang ada harus tetap dijaga dan dilestarikan.
              </p>
            </div>
            <Image
              src={"/assets/LandingPage/vector-topleft-mascotdesc.svg"}
              alt="Vector Atas Kiri"
              width={120}
              height={56}
              className="mt-1 mb-auto"
            />
          </div>
          <div className="flex w-full gap-3">
            <div className="flex flex-col text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C]   w-[200px]">
                Tombol Power
              </h3>
              <p className="w-full">
                Berbentuk segi lima yang terletak di dada mascot
                merepresentasikan kali kelima acara Srifoton ini
                diselenggarakan.
              </p>
            </div>
            <Image
              src={"/assets/LandingPage/vector-midleft-mascotdesc.svg"}
              alt="Vector Tengah Kiri"
              width={120}
              height={56}
              className="mt-2 mb-auto"
            />
          </div>
          <div className="flex w-full gap-3 mt-6">
            <div className="flex flex-col text-right">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C]   w-[200px]">
                FUEGO
              </h3>
              <p className="w-full">
                Diambil dari Bahasa Spanyol yang memiliki arti{" "}
                <span className="font-semibold ">Api.</span>
              </p>
            </div>
            <Image
              src={"/assets/LandingPage/vector-bottomleft-mascotdesc.svg"}
              alt="Vector Bawah Kiri"
              width={120}
              height={56}
              className="mb-auto -translate-y-8 "
            />
          </div>
        </div>
        <div className="relative">
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
              src={"/assets/LandingPage/vector-topright-mascotdesc.svg"}
              alt="Vector Atas Kanan"
              width={120}
              height={56}
              className="mt-1 mb-auto"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C] w-[200px]">
                Burung Phoenix
              </h3>
              <p className="w-full">
                Maknanya adalah untuk merepresentasikan pembaharuan.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-12">
            <Image
              src={"/assets/LandingPage/vector-midright-mascotdesc.svg"}
              alt="Vector Tengah Kiri"
              width={120}
              height={56}
              className="mt-2 mb-auto"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C]   w-[200px]">
                Merah
              </h3>
              <p className="w-full">
                merupakan warna yang identik dengan bumi Sriwijaya. (Kegimbaraan
                dan Keberanian)
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-10">
            <Image
              src={"/assets/LandingPage/vector-bottomright-mascotdesc.svg"}
              alt="Vector Bawah Kiri"
              width={120}
              height={56}
              className="mb-auto -translate-y-8 "
            />
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-bold lg:text-3xl text-[#494B7C]   w-[200px]">
                Emas
              </h3>
              <p className="w-full">
                merupakan warna yang identik dengan bumi Sriwijaya. (Keagungan)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
