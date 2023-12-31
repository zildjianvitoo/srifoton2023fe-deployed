import Image from "next/image";
import Button from "../../atoms/Button";
import { ethnocentric } from "@/public/fonts/fonts";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import NoSSR from "@/components/NoSSR";

export default function Intro() {
  const text = [
    "Ajang kompetisi ini merupakan panggung yang bertujuan untuk mewadahi para peserta yang memiliki minat dan bakat pada bidang teknologi khususnya di berbagai cabang lomba yang diselenggarakan. Selain itu, acara ini dapat dijadikan sebagai wadah untuk kolaborasi, bekerja sama, dan unjuk kemampuan peserta.",

    "Seminar merupakan sebuah kegiatan yang dapat menjadi media untuk saling berbagi informasi, wawasan, dan pengetahuan mengenai topik yang dibahas. Seminar Nasional yang diadakan oleh SRIFOTON 2023 akan menyajikan dua topik pembahasan.",
  ];

  return (
    <>
      <Content
        isBlue
        header={"Ajang Kompetisi"}
        buttonText={"Kompetisi"}
        text={text[0]}
      />
      <Content
        isPink
        header={"Seminar Teknologi"}
        buttonText={"Seminar"}
        text={text[1]}
      />
    </>
  );
}

function Content({ header, text, buttonText, isPink, isBlue }) {
  const router = useRouter();
  const { theme } = useTheme();
  const introImage = isBlue
    ? "/assets/LandingPage/intro-kompetisi-img.png"
    : "/assets/LandingPage/intro-seminar-img.png";

  return (
    <section id="intro-home" className="mt-24 ">
      <div
        className={`flex ${
          isBlue ? " flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
        } gap-10 `}
      >
        <div
          className={`flex justify-center p-6 ${
            isBlue
              ? "rounded-br-[200px] bg-[#E5EEFF] dark:bg-[#494B7C]  "
              : "rounded-bl-[200px] bg-[#FDE5FF] dark:bg-[#75497C]"
          }  lg:w-[45%]`}
        >
          <Image
            src={introImage}
            alt="gambar intro"
            width={isBlue ? 350 : 500}
            height={isBlue ? 350 : 240}
            className="lg:-mr-12"
          />
        </div>
        <div
          className={`flex flex-col gap-y-6 p-6 lg:w-[55%] lg:p-0 lg:px-10 ${
            isPink && "items-end "
          } `}
        >
          <h1
            className={`text-[30px] lg:pb-2 xs:text-4xl pl-[2px] lg:text-6xl font-semibold tracking-widest lg:tracking-wider  ${
              isBlue
                ? "intro-header-kompetisi dark:intro-header-kompetisi-dark"
                : "bg-white text-right intro-header-seminar dark:intro-header-seminar-dark justify-items-end items-end w-fit "
            } ${ethnocentric.className}`}
          >
            {header}
          </h1>
          <p
            className={`text-base font-poppins md:text-lg  text-[#747474] dark:text-[#CFCFCF] lg:w-[80%]  ${
              isPink ? "text-right lg:text-justify " : "text-justify"
            }  `}
          >
            {text}
          </p>
          <NoSSR>
            <Button
              style={` mt-3 w-[35%] md:w-[30%] lg:w-[25%]  relative border-none bg-gradient-to-r from-[#FC39FC] to-[#337EF0] ${"button-style"}  ${
                theme === "light" ? "button-intro" : "button-intro-dark"
              }`}
              onClickHandler={() => router.push(`/${buttonText.toLowerCase()}`)}
            >
              {buttonText}
            </Button>
          </NoSSR>
        </div>
      </div>
    </section>
  );
}
