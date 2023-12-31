import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ethnocentric } from "@/public/fonts/fonts";
import { MdDashboardCustomize } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useUserStore } from "@/store/userStore";
import { useAccessTokenStore } from "@/store/tokenStore";
import { doLogout } from "@/utils/api";
import { toast } from "react-toastify";

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

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };
  const validUsername = user?.name.split(" ");

  const getUserNameValid = () => {
    if (validUsername.length >= 3) {
      return (
        validUsername[0] +
        " " +
        validUsername[1] +
        " " +
        validUsername[2]?.slice(0, 1) +
        "."
      );
    } else if (validUsername.length >= 2) {
      return validUsername[0] + " " + validUsername[1];
    } else {
      return validUsername[0];
    }
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
      router.replace("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className="fixed top-0 z-50 font-normal navbar bg-[#FCF2FF] text-[#464646]  dark:bg-neutral dark:text-white shadow-navbar dark:shadow-navbar-dark lg:px-[4.5rem] "
      onMouseLeave={() => setIsOpen(false)}
    >
      <svg width="0" height="0">
        <linearGradient id="pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#F574F5" offset="0%" />
          <stop stopColor="#961496" offset="100%" />
        </linearGradient>
      </svg>

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
                  (routerNameEquals("/kompetisi") ||
                    routerNameEquals("/kompetisi/competitive-programming") ||
                    routerNameEquals("/kompetisi/web-development") ||
                    routerNameEquals("/kompetisi/uiux-design")) &&
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
          <Image
            priority
            src="/assets/logo-srifoton2023.png"
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
      <div className={`hidden navbar-center lg:flex `}>
        <ul className="px-1 text-base menu menu-horizontal">
          <li>
            <Link
              href="/"
              className={`active:!bg-transparent active:!text-[#DE55E8] hover:text-[#DE55E8] ${
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
              className={`active:!bg-transparent active:!text-[#DE55E8] hover:text-[#DE55E8] ${
                (routerNameEquals("/kompetisi") ||
                  routerNameEquals("/kompetisi/competitive-programming") ||
                  routerNameEquals("/kompetisi/web-development") ||
                  routerNameEquals("/kompetisi/uiux-design")) &&
                "!text-[#DE55E8] dark:!text-[#F56AFF]"
              }`}
            >
              Kompetisi
            </Link>
          </li>
          <li>
            <Link
              href="/seminar"
              className={`active:!bg-transparent active:!text-[#DE55E8] hover:text-[#DE55E8] ${
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
        className={`flex items-center m-auto ${
          user ? "gap-x-3 lg:gap-x-0" : "gap-x-4"
        } lg:mr-10  md:gap-x-4  navbar-end`}
      >
        <div className="mt-0.5 cursor-pointer " onClick={toggleTheme}>
          <Image
            src={theme === "light" ? "/moon-icon.svg" : "/sun-icon.svg"}
            width={30}
            height={30}
            alt="icon dark and light mode"
            priority
          />
        </div>
        {user ? (
          <div className="md:ml-3 lg:ml-4 text-[#494B7C] dark:text-white font-medium relative">
            <div className="flex items-center justify-center">
              <div className="flex flex-col p-2 rounded-xl">
                <div
                  className="z-10 flex items-center p-1 cursor-pointer"
                  onClick={() => setDropdownActive((prev) => !prev)}
                >
                  {/* <PiUserCircleFill
                    className="text-4xl "
                    style={{ fill: "url(#pink-gradient)" }}
                  /> */}
                  <Image
                    src={"/assets/icon-user.svg"}
                    alt="icon user"
                    width={36}
                    height={36}
                  />
                </div>

                {isDropdownActive && (
                  <ul className="absolute z-[2] md:text-lg pt-4 flex flex-col p-4 pb-6  mt-12 lg:px-8 gap-y-3  -translate-x-24 lg:-translate-x-20 bg-gradient-to-r from-[#F0D0F0] to-[#D2E2FD] dark:from-[#452E79] dark:to-[#183569] rounded-xl  ">
                    <li>
                      <p className="text-sm lg:text-lg">{getUserNameValid()}</p>
                    </li>
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <MdDashboardCustomize />
                      <p>Dashboard</p>
                    </Link>
                    <li
                      href="/dashboard"
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={onLogoutHandler}
                    >
                      <TbLogout />
                      <p>Keluar</p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Link href="/login">
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
