import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";

export default function NarahubungCard({ name, number }) {
  const validName = name.split(" ");

  return (
    <div
      className="flex flex-col items-center justify-center lg:w-[35%]  mt-6  gap-6 p-8  bg-center bg-no-repeat bg-contain md:p-24 lg:p-32"
      style={{ backgroundImage: "url(/assets/frame-contact-img.svg) " }}
    >
      <h2
        className={`text-xl md:text-2xl lg:!leading-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-srifoton to-blue-srifoton font-bold lg:text-3xl text-center ${ethnocentric.className} `}
      >
        {name}
      </h2>
      <div className="flex items-center justify-center gap-3 font-poppins">
        <Image
          src={"/assets/icon-whatsapp.svg"}
          alt="Icon Whatsapp"
          width={30}
          height={30}
        />
        <p className="text-base font-medium text-black md:text-lg lg:text-xl">
          {number}
        </p>
      </div>
    </div>
  );
}
