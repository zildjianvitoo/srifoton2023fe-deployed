import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="font-poppins">
      <div className="pt-10 md:pt-14 lg:pt-20 bg-[#FCF2FF] dark:bg-[#02053E]">
        <div className="flex flex-col gap-6  py-6 w-full lg:w-[90%] mx-auto relative">
          <div className="h-full ">
            <Image
              fill
              src={"/assets/footer-bg-img.png"}
              alt="Footer Background Image "
              className="absolute "
            />
          </div>
          <div className="flex gap-36 md:gap-20">
            <div className="relative">
              <Image
                src={"/assets/logo-srifoton2023.png"}
                alt="Logo Srifoton"
                width={210}
                height={160}
              />
            </div>
            <div className="flex gap-10 text-[#52525B] dark:text-[#E5E5E5] w-full">
              <div className="flex flex-col w-[25%] gap-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Alamat
                </h4>
                <p>
                  Jl. Raya Palembang - Prabumulih No. Km. 32, Indralaya Indah,
                  Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan 30862
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Kontak
                </h4>
                <div className="flex flex-col ">
                  <div className="flex gap-1">
                    <Image
                      src={"assets/icon-whatsapp.svg"}
                      alt="icon whatsapp"
                      width={24}
                      height={24}
                    />

                    <p className="font-bold text-transparent bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text ">
                      Whatsapp
                    </p>
                  </div>
                  <ul>
                    <li>+62 852-6938-3835 (Yolendri Anisyahfitri)</li>
                    <li>+62 878-6178-1143 (Dimas Putra Mufazzal)</li>
                  </ul>
                  <div className="flex gap-1 mt-2">
                    {" "}
                    <Image
                      src={"assets/icon-email.svg"}
                      alt="icon email"
                      width={24}
                      height={24}
                    />
                    <p className="font-bold text-transparent bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text ">
                      Email
                    </p>
                  </div>
                  <ul>
                    <li>srifoton.unsri@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:ml-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Navigasi
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href={"/"}>Beranda</Link>
                  </li>
                  <li>
                    <Link href={"/kompetisi"}>Kompetisi</Link>
                  </li>
                  <li>
                    <Link href={"/seminar"}>Seminar</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 lg:ml-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Kompetisi
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href={"/kompetisi/competitive-programming"}>
                      Competitive-Programming
                    </Link>
                  </li>
                  <li>
                    <Link href={"/kompetisi/uiux-design"}>UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href={"/kompetisi/web-development"}>
                      Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-t border-[#CDCDCD]" />
        </div>
      </div>
    </section>
  );
}
