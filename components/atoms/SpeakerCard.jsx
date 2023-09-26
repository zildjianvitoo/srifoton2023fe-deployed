import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function SpeakerCard({ speaker, secondCard }) {
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
        className={`relative rounded-[50px] ${
          secondCard && "mt-10 md:mt-16 lg:mt-28"
        } `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          src={speaker.img}
          alt="Pembicara Seminar Srifoton"
          width={400}
          height={380}
          quality={100}
          className="rounded-[28px] lg:rounded-[50px] "
        />
        <div
          className={`absolute -bottom-1  w-full transition-all duration-300 ${
            isHover
              ? "h-1/2 md:h-[43%] lg:h-[53%] xl:h-[40%]"
              : "h-1/4 md:h-1/4 lg:h-1/4 xl:h-1/5"
          } `}
        >
          <div className="absolute inset-0 z-0 w-full glassmorphism rounded-b-[28px] lg:rounded-b-[50px]" />
          <div className="relative z-10 flex flex-col py-3 lg:pt-3 px-7">
            <h2 className="font-bold tracking-wide text-[26px] text-white lg:text-2xl w-fit lg:tracking-normal">
              {speaker.name}
            </h2>
            <div className="rounded-[50px] mt-2 md:text-sm text-[#505050] bg-[#EDEDED] w-fit py-1 px-2 font-medium ">
              <p>{speaker.role}</p>
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
                  {speaker.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(SpeakerCard), {
  ssr: false,
});
