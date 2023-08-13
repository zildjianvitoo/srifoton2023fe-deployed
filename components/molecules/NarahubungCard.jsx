import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";

export default function NarahubungCard() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 p-8 bg-center bg-no-repeat bg-contain md:p-16 lg:p-32"
      style={{ backgroundImage: "url(/assets/frame-contact-img.svg)" }}
    >
      <h2
        className={`text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-srifoton to-blue-srifoton font-bold lg:text-4xl text-center ${ethnocentric.className} `}
      >
        M Fairuz
      </h2>
      <div className="flex items-center justify-center gap-3 font-poppins ">
        <Image
          src={"/assets/icon-whatsapp.svg"}
          alt="Icon Whatsapp"
          width={30}
          height={30}
        />
        <p className="text-xl font-medium text-black">0853-7830-9768</p>
      </div>
    </div>
  );
}
