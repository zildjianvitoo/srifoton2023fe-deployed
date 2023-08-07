import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ethnocentric } from "@/public/fonts/fonts";
import { PiUserCircleFill } from "react-icons/pi";
import { MdDashboardCustomize } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useUserStore } from "@/store/userStore";
import { useAccessTokenStore } from "@/store/tokenStore";
import { doLogout } from "@/utils/api";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const user = useUserStore((state) => state.user);
  const removeUser = useUserStore((state) => state.removeUser);
  const removeAccessToken = useAccessTokenStore(
    (state) => state.removeAccessToken
  );

  const validUsername = user?.name.split(" ");

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setDropdownActive(false);
  }, [router]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  const routerNameEquals = (name) => {
    return router.pathname === name;
  };

  const onLogoutHandler = async () => {
    try {
      await doLogout();
      removeUser();
      removeAccessToken();
      localStorage.removeItem("user-srifoton");
      localStorage.removeItem("token-srifoton");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed top-0 z-50 font-normal navbar bg-[#FCF2FF] text-[#464646]  dark:bg-neutral dark:text-white shadow-navbar dark:shadow-navbar-dark lg:px-[4.5rem] "
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-2 lg:py-0 navbar-start">
        <div className={`dropdown`}>
          <label
            tabIndex={0}
            className="text-primary btn btn-ghost lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`p-2 mt-3 shadow-lg  menu menu-compact dropdown-content bg-white dark:bg-neutral dark:text-white ${
              !isOpen && "hidden"
            } rounded-box w-52`}
            onClick={handleDropdownClick}
          >
            <li>
              <Link
                href="/"
                className={`active:bg-transparent ${
                  routerNameEquals("/") && "text-[#DE55E8] dark:text-[#F56AFF]"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/kompetisi"
                className={`active:bg-transparent ${
                  routerNameEquals("/kompetisi") &&
                  "text-[#DE55E8] dark:text-[#F56AFF]"
                }`}
              >
                Kompetisi
              </Link>
            </li>
            <li>
              <Link
                href="/seminar"
                className={`active:bg-transparent ${
                  routerNameEquals("/seminar") &&
                  "text-[#DE55E8] dark:text-[#F56AFF]"
                }`}
              >
                Seminar
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="flex gap-2 text-xl normal-case xs:ml-2 lg:ml-10 btn btn-ghost"
        >
          {/* <img
            src="/assets/logo-srifoton2023.svg"
            className=" w-[110px] -translate-x-3 h-[25px] sm:w-[110px] sm:h-[30px] lg:w-[160px] lg:h-[40px]"
          /> */}
          <Image
            priority
            src="/assets/logo-srifoton2023.svg"
            alt="Logo Srifoton"
            width={50}
            height={30}
            quality={100}
          />
          <h3
            className={`hidden bg-gradient-to-r text-2xl bg-clip-text text-transparent from-[#FC39FC] to-[#428AE0] gap-2 lg:flex ${ethnocentric.className}`}
          >
            SRIFOTON
          </h3>
        </Link>
      </div>
      <div className={`hidden navbar-center lg:flex`}>
        <ul className="px-1 text-base menu menu-horizontal">
          <li>
            <Link
              href="/"
              className={`active:!bg-transparent active:!text-[#DE55E8] ${
                routerNameEquals("/") &&
                "  !text-[#DE55E8] dark:!text-[#F56AFF]"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/kompetisi"
              className={`active:!bg-transparent active:!text-[#DE55E8] ${
                routerNameEquals("/kompetisi") &&
                "!text-[#DE55E8] dark:!text-[#F56AFF]"
              }`}
            >
              Kompetisi
            </Link>
          </li>
          <li>
            <Link
              href="/seminar"
              className={`active:!bg-transparent active:!text-[#DE55E8] ${
                routerNameEquals("/seminar") &&
                "!text-[#DE55E8] dark:!text-[#F56AFF]"
              }`}
            >
              Seminar
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex ${
          user ? "gap-x-0" : "gap-x-4"
        } lg:mr-10 md:gap-x-4 navbar-end`}
      >
        {/* <p>{user?.name}</p> */}
        <div className="cursor-pointer" onClick={toggleTheme}>
          <Image
            src={theme === "light" ? "/moon-icon.svg" : "/sun-icon.svg"}
            width={40}
            height={40}
            alt="icon dark and light mode"
            priority
          />
        </div>
        {user ? (
          <div className="md:ml-3 lg:ml-6 text-[#494B7C] dark:text-white font-medium relative">
            <div className="flex items-center justify-center">
              <div className="flex flex-col p-2 rounded-xl">
                <div
                  className="z-10 flex items-center gap-2 p-2 cursor-pointer"
                  onClick={() => setDropdownActive((prev) => !prev)}
                >
                  <PiUserCircleFill className="hidden text-xl md:block" />
                  <p className="text-sm lg:text-lg">
                    {" "}
                    {validUsername[0] + " " + validUsername[1]}
                  </p>
                  {isDropdownActive ? (
                    <IoIosArrowDown className="lg:text-xl" />
                  ) : (
                    <IoIosArrowUp className="lg:text-xl" />
                  )}
                </div>

                {isDropdownActive && (
                  <ul className="absolute z-[2] md:text-lg pt-4 flex flex-col mt-12 lg:px-4 gap-y-3 lg:gap-y-3 bg-gradient-to-r from-[#F0D0F0] to-[#D2E2FD] dark:from-[#452E79] dark:to-[#183569] rounded-xl p-2 pb-6  ">
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <MdDashboardCustomize />
                      <p>Dashboard</p>
                    </Link>
                    <div
                      href="/dashboard"
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={onLogoutHandler}
                    >
                      <TbLogout />
                      <p>Keluar</p>
                    </div>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Link href="/register">
            <button
              className={`text-[#DB66DA] relative px-10 py-2 border-none font-semibold  bg-gradient-to-r from-[#2B8AF9]  to-[#FF92FE] ${
                theme === "light" ? "button-navbar" : "button-navbar-dark"
              } `}
            >
              Mulai
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
