import { useEffect, useState } from "react";
import Image from "next/image";

export default function SpeakerCard({ secondCard }) {
  const [isHover, setIsHover] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTextTimeOut = setTimeout(() => {
      setShowText(true);
    }, 100);

    return () => {
      setShowText(false);
      clearTimeout(showTextTimeOut);
    };
  }, [isHover, setIsHover]);

  const imageSource =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

  return (
    <>
      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            transition: grid-template-rows 200ms;
          }
          .wrapper.open {
            grid-template-rows: 1fr;
          }
        `}
      </style>
      <div
        className={`relative rounded-[50px] ${secondCard && "mt-10 lg:mt-28"} `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          src={imageSource}
          alt="Pembicara Seminar Srifoton"
          width={340}
          height={320}
          className="rounded-[28px] lg:rounded-[50px] "
        />
        <div
          className={`absolute -bottom-1  w-full transition-all duration-300 ${
            isHover ? "h-1/2 md:h-2/5" : "h-1/4 md:h-1/5"
          } `}
        >
          <div className="absolute inset-0 z-0 w-full glassmorphism rounded-b-[28px] lg:rounded-b-[50px]" />
          <div className="relative z-10 flex flex-col py-3 lg:pt-3 px-7">
            <h2 className="font-bold tracking-wide text-[26px] text-white lg:text-3xl w-fit lg:tracking-normal">
              Lucas Ibrahim
            </h2>
            <div className="rounded-[50px] mt-2 md:text-sm text-[#505050] bg-[#EDEDED] w-fit py-1 px-2 font-medium">
              <p>UI/UX Designer</p>
            </div>

            {/* {isHover && (
            <p
              className={`text-sm transition-all mt-3 text-white ${
                showText ? "opacity-100 duration-300 " : "hidden duration-300"
              } `}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              distinctio consequuntur laborum nisi aliquid molestias iure quidem
              neque vitae et!
            </p>
          )} */}
            {showText && (
              <div className={`${isHover ? "wrapper.open" : "wrapper"}`}>
                <p className="min-h-0 mt-3 text-sm text-white">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corrupti distinctio consequuntur laborum nisi aliquid
                  molestias iure quidem neque vitae et!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
