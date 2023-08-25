import { ethnocentric } from "@/public/fonts/fonts";
import React from "react";

export default function PricingCard({ headers, price }) {
  const validHeaders = headers.split(" ");

  return (
    <div className="flex flex-col rounded-[25px] border-[5px] border-pink-srifoton">
      <div className="bg-gradient-to-r from-pink-srifoton to-[#9E5AF7] rounded-t-[20px] ">
        <h2
          className={`${ethnocentric.className} p-4 text-white text-2xl text-center`}
        >
          {validHeaders[0]} <br />
          {validHeaders[1]}
        </h2>
      </div>
      <div className="flex flex-col p-4 px-6 font-poppins">
        <div className="flex">
          <p className="text-2xl font-semibold text-[#494B7C]">RP</p>
          <p className="mt-3 text-6xl font-semibold text-transparent bg-gradient-to-r from-pink-srifoton to-blue-srifoton bg-clip-text">
            100.000
          </p>
        </div>
      </div>
    </div>
  );
}
