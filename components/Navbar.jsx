import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

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

  return (
    <div
      className="fixed top-0 z-50 font-normal bg-[#FCF2FF] shadow-md text-[#464646] navbar dark:bg-neutral dark:text-white"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-2 lg:py-0 navbar-start">
        <div className={`dropdown`}>
          <label
            tabIndex={0}
            className="text-primary btn btn-ghost lg:hidden"
            onClick={handleDropdownClick}
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
            className={`p-2 mt-3 shadow menu menu-compact dropdown-content bg-white dark:bg-neutral dark:text-white ${
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
            <li>
              <Link
                href="/kontak"
                className={`active:bg-transparent ${
                  routerNameEquals("/kontak") &&
                  "text-[#DE55E8] dark:text-[#F56AFF]"
                }`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="text-xl normal-case xs:ml-2 lg:ml-10 btn btn-ghost"
        >
          {/* <img
            src="/assets/logo-srifoton2023.svg"
            className=" w-[110px] -translate-x-3 h-[25px] sm:w-[110px] sm:h-[30px] lg:w-[160px] lg:h-[40px]"
          /> */}
          <Image
            src="/assets/logo-srifoton2023.svg"
            alt="Logo Srifoton"
            width={50}
            height={30}
            quality={100}
          />
        </Link>
      </div>
      <div className={`hidden navbar-center lg:flex  `}>
        <ul className="px-1 menu menu-horizontal">
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
          <li>
            <Link
              href="/kontak"
              className={`active:bg-transparent ${
                routerNameEquals("/kontak") &&
                "text-[#DE55E8] dark:text-[#F56AFF]"
              }`}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex lg:mr-10 gap-x-4 navbar-end">
        <div className="cursor-pointer" onClick={toggleTheme}>
          <img
            src={theme === "light" ? "/moon-icon.svg" : "/sun-icon.svg"}
            alt="moon icon"
          />
          {/* <img src="/sun-icon.svg" alt="sun icon" /> */}
        </div>
        <Link href="/register">
          <button
            className={`text-[#DB66DA] relative px-10 py-2 border-none shadow-sm bg-gradient-to-r from-[#2B8AF9]  to-[#FF92FE] ${
              theme === "dark" ? "button-navbar" : "button-navbar-light"
            } `}
          >
            Mulai
          </button>
        </Link>
      </div>
    </div>
  );
}