import { BsThreeDots, BsWhatsapp } from "react-icons/bs";
import React from "react";
import LayoutCredentials from "../Credentials/LayoutCredentials";
import { ethnocentric } from "@/public/fonts/fonts";
import Link from "next/link";
import { MdOutlineUploadFile } from "react-icons/md";

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
        <div className="flex flex-col self-end gap-2 sm:flex-row mt-14">
          <Link href={groupLink} className="">
            <div className=" border-[3px] border-pink-srifoton  text-pink-srifoton rounded-[50px] sm:rounded-l-[50px] sm:rounded-r-none px-4 py-2 flex font-medium items-center group gap-1 opacity-90 hover:opacity-100 hover:bg-pink-srifoton hover:text-white">
              <MdOutlineUploadFile className="text-2xl text-pink-srifoton group-hover:text-white" />{" "}
              Submit Karya
            </div>
          </Link>
          <a href={groupLink} className="">
            <button className="  bg-blue-srifoton rounded-[50px] sm:rounded-r-[50px] sm:rounded-l-none px-4 py-2.5 flex text-white items-center gap-2.5 opacity-90 hover:opacity-100">
              <BsWhatsapp className="text-xl text-white" /> Gabung Grup
            </button>
          </a>
        </div>
      </div>
    </LayoutCredentials>
  );
}
