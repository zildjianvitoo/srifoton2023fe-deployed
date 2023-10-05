import Button from "@/components/atoms/Button";
import { ethnocentric } from "@/public/fonts/fonts";
import { useEffect, useState } from "react";
import Link from "next/link";

const Jumbotron = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const countDownDate = new Date("Oct 5, 2023 00:00:00").getTime();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
  //     setHours(
  //       Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //     );
  //     setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  //     setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [countDownDate]);
  return (
    <section
      id="#jumbotron-landingpage"
      className="relative overflow-x-hidden  py-24  bg-[#FCF2FF] dark:bg-[#02053E] lg:h-full opacity-85 mt-12 lg:mt-6"
    >
      <div
        className="absolute inset-0 h-full bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url(assets/LandingPage/jumbotron-bgimg.svg)",
        }}
      />{" "}
      <div className="relative z-0 flex flex-col justify-center mx-auto lg:w-4/5">
        <div
          className={`flex flex-col mx-auto w-fit ${ethnocentric.className} `}
        >
          <h4 className="z-0 self-end px-2 text-2xl xs:text-3xl translate-y-3 lg:text-5xl xl:text-6xl jumbotron-2023-text sm:translate-y-5 md:translate-y-7 dark:text-[#3a3169]">
            2023
          </h4>
          <h1
            className={`text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] xl:text-[10rem] uppercase bg-gradient-to-r from-pink-srifoton to to-blue-srifoton font-extrabold bg-clip-text text-transparent w-fit mx-auto srifoton-big-header`}
          >
            SRIFOTON
          </h1>
        </div>
        <p className="text-lg tracking-wide text-center text-[#797979] dark:text-white w-3/4 sm:w-[80%] lg:w-[92%] mx-auto">
          Sriwijaya Informatics Exhibition atau yang biasa dikenali dengan
          Srifoton adalah forum kompetitif berskala nasional yang mewadahi
          mahasiswa untuk menyalurkan minat dan bakat mereka dalam dunia
          industri teknologi. Event ini memiliki dua acara yaitu Perlombaan dan
          Seminar.
        </p>
        <h2 className="mt-6 lg:mt-12 text-3xl lg:text-5xl tracking-wider text-center font-semibold font-poppins countdown-header text-[#494B7C] dark:text-[#F6F6F6]">
          PEMBUKAAN ACARA
        </h2>
        <div className="flex justify-center items-center mt-2 gap-2 md:gap-6  text-[#494B7C] dark:text-[#F6F6F6]">
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] py-3 bg-white dark:bg-[#02053E] rounded-xl countdown-box dark:countdown-box-dark">
            {" "}
            <h3 className=" font-semibold tracking-wide text-[2rem] sm:text-[3rem] lg:text-[5rem] leading-[2rem] sm:!leading-[5rem] ">
              {days}
            </h3>
            <p className="m-auto text-base sm:text-lg">Hari</p>
          </div>
          <span className="text-[2rem] sm:text-[3rem] lg:text-[5rem] mb-3">
            :
          </span>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] py-3 bg-white dark:bg-[#02053E] rounded-xl countdown-box dark:countdown-box-dark">
            {" "}
            <h3 className=" font-semibold tracking-wide text-[2rem] sm:text-[3rem] lg:text-[5rem] leading-[2rem] sm:!leading-[5rem] ">
              {hours}
            </h3>
            <p className="m-auto text-base sm:text-lg">Jam</p>
          </div>
          <span className="text-[2rem] sm:text-[3rem] lg:text-[5rem] mb-3">
            :
          </span>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px]  sm:w-[120px] sm:h-[120px] py-3 bg-white dark:bg-[#02053E] rounded-xl countdown-box dark:countdown-box-dark">
            {" "}
            <h3 className=" font-semibold tracking-wide text-[2rem] sm:text-[3rem] lg:text-[5rem] leading-[2rem] sm:!leading-[5rem]">
              {minutes}
            </h3>
            <p className="m-auto text-base sm:text-lg">Menit</p>
          </div>
          <span className="text-[2rem] sm:text-[3rem] lg:text-[5rem] mb-3 ">
            :
          </span>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] py-3 bg-white dark:bg-[#02053E] rounded-xl countdown-box dark:countdown-box-dark">
            {" "}
            <h3 className=" font-semibold tracking-wide text-[2rem] sm:text-[3rem] lg:text-[5rem] leading-[2rem] sm:!leading-[5rem]">
              {seconds}
            </h3>
            <p className="m-auto text-base sm:text-lg">Detik</p>
          </div>
        </div>
        <h5 className="text-xl lg:text-2xl text-center font-poppins text-[#494B7C] dark:text-[#F6F6F6] font-bold mt-3">
          5 Oktober 2023
        </h5>
        {/* <div className="flex justify-center gap-6 z-[3] mt-8 lg:mt-12">
          <a href="#intro-home">
            <Button style="border-[#F56AFF] text-[#F56AFF] hover:bg-[#F56AFF] border-[3px] font-semibold lg:py-3">
              Info Lainnya
            </Button>
          </a>
          <Link href={"/login"}>
            <Button style="px-2 border-[#337EF0] text-[#337EF0] hover:bg-[#337EF0] border-[3px] font-semibold lg:py-3">
              Mulai Sekarang!
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );

  //Todo Import GambarBlur Saja,macawnya gambar baru
};

export default Jumbotron;
