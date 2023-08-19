import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="font-poppins">
      <div className="pt-10 md:pt-14 lg:pt-20 bg-[#FCF2FF] dark:bg-[#02053E]">
        <div className="flex flex-col gap-6  py-6 pb-8 md:pb-12 px-8 lg:px-0 w-full  sm:w-[90%] mx-auto relative">
          <div className="h-full ">
            <Image
              fill
              src={"/assets/footer-bg-img.png"}
              alt="Footer Background Image "
              className="absolute object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-center gap-10 text-sm lg:flex-row md:gap-20 ">
            <div className="relative">
              <Image
                src={"/assets/logo-srifoton2023.png"}
                alt="Logo Srifoton"
                width={310}
                height={260}
                className="w-[175px] sm:w-[310px]"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-[#52525B] dark:text-[#E5E5E5] w-full z-10 ">
              <div className="flex flex-col gap-3 md:gap-6 md:w-1/2 lg:w-1/4">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Alamat
                </h4>
                <p className="leading-relaxed lg:w-[90%]">
                  Jl. Raya Palembang - Prabumulih No. Km. 32, Indralaya Indah,
                  Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan 30862
                </p>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Kontak
                </h4>
                <div className="flex flex-col ">
                  <div className="flex gap-1">
                    <Image
                      src={"/assets/icon-whatsapp.svg"}
                      alt="icon whatsapp"
                      width={24}
                      height={24}
                    />

                    <p className="font-bold text-transparent bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text ">
                      Whatsapp
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1">
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
                    <li>srifoton@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-6 lg:ml-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Navigasi
                </h4>
                <ul className="flex flex-col gap-3 md:gap-6">
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
              <div className="flex flex-col gap-3 md:gap-6 lg:ml-6">
                <h4 className="text-lg font-semibold tracking-wide text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit">
                  Kompetisi
                </h4>
                <ul className="flex flex-col gap-3 md:gap-6">
                  <li>
                    <Link href={"/kompetisi/competitive-programming"}>
                      Competitive Programming
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
          <hr className=" border-t border-t-[#CDCDCD] mt-6" />
          <div className="z-10 flex justify-between w-full mt-6">
            <p className="text-lg font-bold text-transparent uppercase bg-gradient-to-br from-pink-srifoton to-blue-srifoton bg-clip-text w-fit ">
              © SRIFOTON 2023
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10">
              <Image
                src={"/assets/icon-twitter.svg"}
                alt="icon twitter"
                width={26}
                height={26}
              />
              <Image
                src={"/assets/icon-facebook.svg"}
                alt="icon facebook"
                width={14}
                height={14}
              />
              <Link href={"https://instagram.com/srifoton.official"}>
                <Image
                  src={"/assets/icon-instagram.svg"}
                  alt="icon instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Image
                src={"/assets/icon-tiktok.svg"}
                alt="icon tiktok"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
