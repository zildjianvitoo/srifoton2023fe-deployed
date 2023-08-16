import Image from "next/image";
import Button from "@/components/atoms/Button";

const Jumbotron = () => {
  return (
    <section
      id="#jumbotron-landingpage"
      className="relative overflow-hidden h-[90vh]  bg-[#FCF2FF] dark:bg-[#02053E] lg:h-screen opacity-85 mt-12 lg:mt-6"
    >
      <div
        className="absolute inset-0 h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(assets/LandingPage/jumbotron-bgimg.svg)",
        }}
      >
        <div className="relative flex h-full px-10 pt-10 lg:px-20">
          <div className="flex flex-col h-full gap-8 mt-20 lg:gap-8 lg:px-10">
            {/* <h1
              className={`text-[2.75rem] md:text-[7rem] lg:text-[10rem] tracking-wider z-10  font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FC39FC] to-[#428AE0] srifoton-big-header ${ethnocentric.className} `}
            >
              SRIFOTON
            </h1> */}
            <div className="z-10">
              <Image
                width={1050}
                height={180}
                src="/SRIFOTON.png"
                alt="big text srifoton"
                priority
                loading="eager"
                quality={100}
                className="lg:w-[85%] py-4"
              />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-2xl z-[1] lg:w-[55%] text-[#797979] dark:text-[#CFCFCF]  lg:-mt-14 ">
              Sriwijaya Informatics Exhibition atau yang biasa dikenali dengan
              Srifoton adalah forum kompetitif berskala nasional yang mewadahi
              mahasiswa untuk menyalurkan minat dan bakat mereka dalam dunia
              industri teknologi. Event ini memiliki dua acara yaitu Perlombaan
              dan Seminar.
            </h3>
            <div className="flex gap-6 mt-4 z-[3]">
              <Button style="border-[#F56AFF] text-[#F56AFF] hover:bg-[#F56AFF] lg:py-3">
                Info Lainnya
              </Button>
              <Button style="px-2 border-[#337EF0] text-[#337EF0] hover:bg-[#337EF0] lg:py-3">
                Mulai Sekarang!
              </Button>
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
