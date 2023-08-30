import { BsThreeDots, BsWhatsapp } from "react-icons/bs";
import React from "react";
import LayoutCredentials from "../Credentials/LayoutCredentials";
import { ethnocentric } from "@/public/fonts/fonts";
import Link from "next/link";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import useDateFormat from "@/hooks/useDateFormat";

export default function RegisteredCompetitions({
  type,
  teamName,
  groupLink,
  registeredDate,
  needSubmission,
  submissionLink,
  isVerified,
}) {
  const validDate = useDateFormat(registeredDate);

  console.log(isVerified);

  return (
    <LayoutCredentials id="dashboard-data-diri" authPage kegiatanPage>
      <div className="z-10 flex flex-col w-full gap-y-8 lg:gap-y-4">
        <div className="flex items-center justify-between">
          <h3
            className={`${ethnocentric.className} registered-competitions-header tracking-widest text-lg sm:text-xl lg:text-2xl px-2 dark:text-[#322A63] w-fit`}
          >
            {type}
          </h3>
          {/* <BsThreeDots className="text-[#9E9E9E] text-3xl md:text-5xl" /> */}
        </div>
        <h2 className=" text-[#494B7C] dark:text-white text-2xl lg:text-3xl px-2 font-semibold uppercase tracking-[1px]">
          {teamName}
        </h2>

        <div className="flex items-center justify-between mt-14">
          {/* <div className="rounded-[50px] grid place-items-center text-blue-srifoton font-poppins font-medium w-fit px-2 border-[3px] border-blue-srifoton">
            <p>Menunggu Verifikasi</p>
          </div> */}
          <div className="items-center hidden gap-2 text-lg sm:flex text-blue-srifoton dark:text-pink-srifoton">
            <RiCalendarTodoFill className="text-2xl" />
            <p>{validDate}</p>
          </div>
          <div className="flex flex-col self-end gap-2 ml-auto text-sm sm:flex-row md:text-base">
            {needSubmission && (
              <Link href={isVerified ? submissionLink : "/"} className="">
                <button
                  className={`text-white rounded-[50px]  sm:rounded-r-none px-4 py-2.5 flex font-medium items-center  gap-1 opacity-90 hover:opacity-100 bg-pink-srifoton disabled:opacity-50 disabled:hover:opacity-50 disabled:cursor-not-allowed `}
                  disabled={!isVerified}
                >
                  <MdOutlineUploadFile className="text-xl text-white md:text-2xl " />{" "}
                  Submit Karya
                </button>
              </Link>
            )}
            <a
              href={isVerified ? groupLink : "/"}
              className={`${!isVerified && "tooltip"} `}
              data-tip="Kamu belum terverifikasi oleh panitia"
            >
              <button
                className={`bg-blue-srifoton rounded-[50px] ${
                  needSubmission && "sm:rounded-r-[50px] sm:rounded-l-none"
                } px-4 py-2.5 flex text-white items-center gap-2.5 opacity-90 hover:opacity-100 disabled:opacity-50 disabled:hover:opacity-50 disabled:cursor-not-allowed`}
                disabled={!isVerified}
              >
                <BsWhatsapp className="text-base text-white md:text-xl" />{" "}
                Gabung Grup
              </button>
            </a>
          </div>
        </div>
      </div>
    </LayoutCredentials>
  );
}
