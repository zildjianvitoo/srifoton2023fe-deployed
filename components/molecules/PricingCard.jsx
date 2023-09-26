import { ethnocentric } from "@/public/fonts/fonts";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import NoSSR from "../NoSSR";
import Button from "../atoms/Button";
import Link from "next/link";
import { useTheme } from "next-themes";

const competitionBenefits = [
  "Uang Pembinaan",
  "Sertifikat Nasional",
  " Pengalaman Menarik",
];

export default function PricingCard({
  headers,
  price,
  linkTo,
  benefits = competitionBenefits,
}) {
  const { theme } = useTheme();
  const validHeaders = headers.split(" ");

  return (
    <div className="flex flex-col rounded-[25px] border-[5px] border-pink-srifoton hover:scale-105 transition-all duration-200">
      <div className="bg-gradient-to-r from-pink-srifoton to-[#9E5AF7] rounded-t-[20px] ">
        <h2
          className={`${ethnocentric.className} p-4 text-[#FCF2FF] dark:text-[#02053E] text-2xl text-center`}
        >
          {validHeaders[0]} <br />
          {validHeaders[1]}
        </h2>
      </div>
      <div className="flex flex-col p-4 px-6 lg:p-6 lg:px-8 font-poppins">
        <div className="flex">
          <p className="text-2xl font-semibold text-[#494B7C] dark:text-[#F8F8F8]">
            RP
          </p>
          <p className="mt-3 text-6xl font-semibold text-transparent bg-gradient-to-r from-pink-srifoton to-blue-srifoton bg-clip-text">
            {price}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-6 ml-1 text-xl font-medium">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <BsCheckCircle className="text-[#13BA74]" />
              <p className="text-[#494B7C] dark:text-[#F8F8F8]">{benefit}</p>
            </div>
          ))}
        </div>
        <Link
          href={`${linkTo}`}
          className="flex items-end justify-end w-[60%] mx-auto mt-7 mb-1 font-semibold "
        >
          <NoSSR>
            <Button
              style={`w-full relative border-none mt-auto bg-gradient-to-r !text-base from-[#FC39FC] to-[#337EF0] ${"button-style"} ${
                theme === "light"
                  ? "button-pricing-competition "
                  : "button-pricing-competition-dark"
              } `}
            >
              Daftar
            </Button>
          </NoSSR>
        </Link>
      </div>
    </div>
  );
}
