import Link from "next/link";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <section
      id="#"
      className="relative overflow-hidden h-full  bg-gradient-to-b  from-[#E5AFE5] to-[#337EF0]/80 dark:from-[#E5AFE5]/70 dark:to-[#5F7AC2] lg:min-h-screen opacity-90 mt-12 lg:mt-6"
    >
      <div
        className="absolute inset-0 h-full lg:min-h-screen bg-center bg-no-repeat bg-cover opacity-60 z-[-1] "
        style={{
          backgroundImage: "url(assets/Seminar/jumbotron-seminar-bgimg.svg)",
        }}
      ></div>
      <div className="flex flex-col-reverse w-full h-full gap-20 p-8 mt-12 lg:mt-4 xl:mt-16 lg:flex-row">
        <div className="flex items-center xl:-translate-y-14 lg:w-1/2">
          <Image
            priority
            width={400}
            height={480}
            loading="eager"
            src="/assets/Seminar/jumbotron-seminar-img-2.png"
            alt="Srifoton Mascot"
            quality={100}
            className="hidden w-4/5 mt-10 mr-6 md:flex lg: lg:ml-auto lg:w-fit "
          />
        </div>
        <div className="flex flex-col gap-6 text-white lg:mt-24 lg:w-[70%]">
          <h1 className="pb-2 text-4xl font-bold lg:leading-[4.65rem] w-fit   tracking-wider lg:text-[60px] ">
            Seminar Teknologi &<br />
            Berbagi Pengalaman
          </h1>
          <p className="lg:w-[70%] -mt-2 text-base lg:text-lg text-[#DEDEDE] dark:text-[#D0D0D0]">
            Seminar merupakan sebuah kegiatan yang dapat menjadi media untuk
            saling berbagi informasi, wawasan, dan pengetahuan mengenai topik
            yang dibahas. Seminar Nasional yang diadakan oleh SRIFOTON 2023 akan
            menyajikan dua topik pembahasan
          </p>
          <div className="flex gap-x-6">
            <Link href="#register-seminar " className="">
              <button
                className={`text-white text-base lg:text-xl rounded-3xl font-bold px-12 lg:px-16 py-2 border-none shadow-sm 
               bg-[#F164F0]  dark:bg-[#D54CF0] hover:-translate-y-[6px] duration-300`}
              >
                Daftar
              </button>
            </Link>
            <Link href="#speaker-seminar">
              <button
                className={`text-white text-sm lg:text-lg rounded-3xl font-bold px-7  lg:px-10 py-2 shadow-sm 
               bg-transparent  border-[3px] border-white hover:-translate-y-[6px] duration-300`}
              >
                Info Lainnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
