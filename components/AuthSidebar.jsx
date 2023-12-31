import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PiUserCircleFill } from "react-icons/pi";
// import { RiFileUserLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendarWeek } from "react-icons/bs";
export default function AuthSidebar() {
  const router = useRouter();
  const [showActivity, setShowActivity] = useState(false);

  const activeStyle =
    "bg-gradient-to-r from-[#F0D0F0] to-[#D2E2FD] dark:from-[#452E79] dark:to-[#183569]  ";

  const hoverStyle =
    "hover:bg-gradient-to-r from-[#F0D0F0] to-[#D2E2FD] dark:from-[#452E79] dark:to-[#183569] ";

  return (
    <div className="flex flex-row lg:flex-col justify-center items-start lg:items-stretch text-[#494B7C] dark:text-white relative mt-24 gap-x-4 font-medium w-full gap-y-2 px-1">
      {/* <Link
        href="/dashboard/data-akun"
        className={`flex items-center gap-2 p-2 cursor-pointer ${
          router.pathname === "/dashboard/data-akun" && activeStyle
        }`}
      >
        <RiFileUserLine className="text-xl" />
        <p className="text-base lg:text-xl ">Data Akun</p>
      </Link> */}
      <Link
        href="/dashboard"
        className={`flex items-center gap-2 p-2 px-3 cursor-pointer rounded-xl  ${hoverStyle} ${
          router.pathname === "/dashboard" && activeStyle
        }`}
      >
        <PiUserCircleFill className="text-xl" />
        <p className="text-xl hover:font-semibold">Data Diri</p>
      </Link>
      <div
        className={`flex items-center p-2 px-3 cursor-pointer rounded-xl ${hoverStyle} ${
          (router.pathname === "/dashboard/kegiatan/kompetisi" ||
            router.pathname === "/dashboard/kegiatan/kompetisi") &&
          activeStyle
        }`}
      >
        <div
          onClick={() => setShowActivity((prev) => !prev)}
          className="w-full"
        >
          <div className="flex items-center gap-2">
            <BsCalendarWeek className="text-xl" />
            <p className="text-xl hover:font-semibold">Kegiatan</p>
          </div>

          {showActivity && (
            <div className="flex flex-col gap-2 my-2 text-lg ml-7">
              <Link
                href="/dashboard/kegiatan/kompetisi"
                className="flex items-center"
              >
                <IoIosArrowForward />
                <p>Kompetisi</p>
              </Link>
              <Link
                href="/dashboard/kegiatan/seminar"
                className="flex items-center"
              >
                <IoIosArrowForward />
                <p>Seminar</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
