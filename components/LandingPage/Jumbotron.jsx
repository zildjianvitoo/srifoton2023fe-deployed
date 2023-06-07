import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <section
      id="#"
      className="relative overflow-hidden h-[90vh]  bg-[#FCF2FF] dark:bg-[#02053E] lg:h-screen opacity-85 mt-16"
    >
      <div
        className="absolute inset-0 h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(assets/LandingPage/jumbotron-bgimg.svg)",
        }}
      >
        <div className="relative flex px-10 py-10 ">
          <div className="flex flex-col gap-8 mt-16 lg:gap-8 lg:px-10 ">
            <h1 className="  text-[55px] md:text-[5rem] lg:text-[12rem] tracking-wider z-10  font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FC39FC] to-[#428AE0] ">
              SRIFOTON
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-2xl z-[1] lg:w-[55%] text-[#797979] dark:text-[#CFCFCF] ">
              Sriwijaya Informatics Exhibition atau yang biasa dikenali dengan
              Srifoton adalah forum kompetitif berskala nasional yang mewadahi
              mahasiswa untuk menyalurkan minat dan bakat mereka dalam dunia
              industri teknologi. Event ini memiliki dua acara yaitu Perlombaan
              dan Seminar.
            </h3>
            <div className="flex gap-6 mt-4 z-[3]">
              <button className="px-4 text-base lg:text-2xl lg:px-6 py-2 border-2 border-[#F56AFF] text-[#F56AFF] rounded-2xl hover:bg-[#F56AFF] hover:text-white">
                Info Lainnya
              </button>
              <button className="px-2 text-base lg:text-2xl lg:px-6 py-2 border-2 border-[#A47EF2] text-[#A47EF2] rounded-2xl hover:bg-[#A47EF2] hover:text-white">
                Mulai Sekarang!
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/LandingPage/macaw-img.png"
              alt="Gambar Macaw"
              width={1100}
              height={900}
              className="absolute z-[0] left-[400px] opacity-80"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );

  //Todo Import GambarBlur Saja,macawnya gambar baru
};

export default Jumbotron;
