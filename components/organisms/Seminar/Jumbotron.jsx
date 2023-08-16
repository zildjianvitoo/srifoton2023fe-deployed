import Link from "next/link";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <section
      id="#"
      className="relative overflow-hidden h-full  bg-gradient-to-b  from-[#E5AFE5] to-[#337EF0]/80 dark:from-[#E5AFE5]/70 dark:to-[#5F7AC2] lg:h-screen opacity-90 mt-12 lg:mt-6"
    >
      <div
        className="absolute inset-0 h-full lg:h-screen bg-center bg-no-repeat bg-cover opacity-60 z-[-1] "
        style={{
          backgroundImage: "url(assets/Seminar/jumbotron-seminar-bgimg.svg)",
        }}
      ></div>
      <div className="flex flex-col-reverse w-full h-full gap-20 p-8 mt-12 lg:mt-4 xl:mt-16 lg:flex-row">
        <div className="flex items-center lg:w-[50%] ">
          <Image
            priority
            width={600}
            height={580}
            loading="eager"
            src="/assets/Seminar/jumbotron-mascot-img.png"
            alt="Srifoton Mascot"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-6 text-white lg:mt-24 lg:w-[70%]">
          <h1 className="pb-2 text-4xl font-bold lg:leading-[4.65rem] w-fit   tracking-wider lg:text-[60px] ">
            Seminar Teknologi &<br />
            Berbagi Pengalaman
          </h1>
          <p className="lg:w-[70%] -mt-2 text-lg lg:text-xl text-[#DEDEDE] dark:text-[#D0D0D0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. et velit
            interdum, ac aliquet odio mattis.
          </p>
          <div className="flex gap-x-6">
            <Link href="#register-seminar">
              <button
                className={`text-white  text-base lg:text-xl rounded-3xl font-bold px-10 lg:px-14 py-2 border-none shadow-sm 
               bg-[#F164F0]  dark:bg-[#D54CF0] hover:-translate-y-[6px] duration-300`}
              >
                Daftar
              </button>
            </Link>
            <button
              className={`text-white text-sm lg:text-lg rounded-3xl font-bold px-7  lg:px-10 py-2 shadow-sm 
               bg-transparent  border-[3px] border-white hover:-translate-y-[6px] duration-300`}
            >
              Info Lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
