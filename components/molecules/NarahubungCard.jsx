import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";

export default function NarahubungCard({ name, number }) {
  const validName = name.split(" ");
  const validNumber = number
    .split("-")
    .toString()
    .replaceAll(",", "")
    .replace(/^0/, "62");
  console.log(validNumber);

  return (
    <div
      className="flex flex-col items-center justify-center xl:w-[35%] mt-6 md:mt-3 gap-4 lg:gap-6 xl:gap-8  bg-center bg-no-repeat bg-contain p-12 sm:p-24 "
      style={{ backgroundImage: "url(/assets/frame-contact-img.svg) " }}
    >
      <h2
        className={`text-2xl lg:!leading-[2.5rem] xl:!leading-[3rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-srifoton to-blue-srifoton font-bold lg:text-3xl xl:text-4xl text-center ${ethnocentric.className}`}
      >
        {name}
      </h2>
      <div className="flex items-center justify-center w-full gap-3 font-poppins">
        <Image
          src={"/assets/icon-whatsapp.svg"}
          alt="Icon Whatsapp"
          width={30}
          height={30}
        />
        <a
          href={`https://wa.me/${validNumber}`}
          className="text-base font-medium text-black dark:text-white md:text-lg lg:text-xl"
        >
          {number}
        </a>
      </div>
    </div>
  );
}
