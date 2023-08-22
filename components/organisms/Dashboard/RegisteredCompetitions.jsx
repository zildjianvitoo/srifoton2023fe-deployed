import { BsThreeDots, BsWhatsapp } from "react-icons/bs";
import React from "react";
import LayoutCredentials from "../Credentials/LayoutCredentials";
import { ethnocentric } from "@/public/fonts/fonts";
import Link from "next/link";

export default function RegisteredCompetitions({ type, teamName, groupLink }) {
  return (
    <LayoutCredentials id="dashboard-data-diri" authPage>
      <div className="z-10 flex flex-col w-full gap-y-8 lg:gap-y-4">
        <div className="flex items-center justify-between">
          <h3
            className={`${ethnocentric.className} registered-competitions-header tracking-widest text-lg sm:text-xl lg:text-2xl px-2 dark:text-[#322A63] w-fit`}
          >
            {type}
          </h3>
          <BsThreeDots className="text-[#9E9E9E] text-3xl md:text-5xl" />
        </div>
        <h2 className=" text-[#494B7C] dark:text-white text-2xl lg:text-3xl px-2 font-semibold uppercase tracking-[1px]">
          {teamName}
        </h2>
        <a href={groupLink} className="self-end mt-14">
          <button className=" bg-blue-srifoton rounded-[50px] px-5 py-2 flex text-white items-center gap-1 opacity-90 hover:opacity-100">
            <BsWhatsapp className="text-white" /> Gabung Grup
          </button>
        </a>
      </div>
    </LayoutCredentials>
  );
}
