import { useTheme } from "next-themes";
import Image from "next/image";
import Button from "../../atoms/Button";

export default function Intro() {
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Vulputate libero et velit interdum, ac aliquet odio mattis.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Vulputate libero et velit interdum, ac aliquet odio mattis.",
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
  const { theme } = useTheme();

  const buttonStyle = isBlue
    ? "border-[#494B7C] text-[#494B7C]  hover:bg-[#494B7C] w-[35%] mt-3 dark:border-[#E5EEFF] dark:text-[#E5EEFF] dark:hover:bg-[#E5EEFF] dark:hover:text-[#494B7C]"
    : "border-[#75497C] text-[#75497C]  hover:bg-[#75497C] w-[35%] mt-3 dark:border-[#FDE5FF] dark:text-[#FDE5FF] dark:hover:bg-[#FDE5FF] dark:hover:text-[#75497C]";

  const introImage = isBlue
    ? "/assets/LandingPage/intro-kompetisi-img.png"
    : "/assets/LandingPage/intro-seminar-img.png";

  return (
    <section className="mt-24 ">
      <div
        className={`flex   ${
          isBlue ? " flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
        } gap-10 `}
      >
        <div
          className={`flex justify-center p-6   ${
            isBlue
              ? "rounded-br-[200px] bg-[#E5EEFF] dark:bg-[#494B7C]  "
              : "rounded-bl-[200px] bg-[#FDE5FF] dark:bg-[#75497C]"
          }  lg:w-[45%]`}
        >
          <Image
            src={introImage}
            alt="gambar kompetisi"
            width={isBlue ? 300 : 400}
            height={isBlue ? 300 : 240}
            className="lg:-mr-12"
          />
        </div>
        <div
          className={`flex flex-col lg:w-[55%] gap-y-6 p-6 lg:p-0 lg:px-10 ${
            isPink && "items-end"
          } `}
        >
          <h1
            className={`text-[30px] xs:text-4xl lg:text-6xl font-semibold  tracking-wider ${
              isBlue
                ? "text-[#E5EEFF]  dark:text-[#494B7C]"
                : "text-[#FDE5FF] dark:text-[#75497C]"
            }   ${theme == "light" ? "intro-header" : "intro-header-dark"} `}
          >
            {header}
          </h1>
          <p
            className={`text-base md:text-lg lg:text-xl ${
              isPink && "text-right"
            }  text-[#747474] dark:text-[#CFCFCF] lg:w-[80%] `}
          >
            {text}
          </p>
          <Button style={buttonStyle}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
