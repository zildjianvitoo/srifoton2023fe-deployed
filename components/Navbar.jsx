import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="fixed top-0 z-50 font-normal bg-[#FCF2FF] shadow-md text-primary navbar dark:bg-neutral dark:text-white"
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
              <a href="#course" className="active:bg-transparent">
                Course
              </a>
            </li>
            <li>
              <a href="#promo" className="active:bg-transparent">
                Promo
              </a>
            </li>
            <li>
              <a href="#testimonial" className="active:bg-transparent">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="active:bg-transparent">
                Hubungi kami
              </a>
            </li>
          </ul>
        </div>
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          <img
            src="/assets/logo-srifoton2023.svg"
            alt="Logo Ambisin"
            className=" w-[100px] -translate-x-3 h-[25px] sm:w-[110px] sm:h-[30px] lg:w-[160px] lg:h-[40px]"
          />
        </Link>
      </div>
      <div className={`hidden navbar-center lg:flex  `}>
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a href="#course" className="active:bg-transparent">
              Beranda
            </a>
          </li>
          <li>
            <a href="#promo" className="active:bg-transparent">
              Kompetisi
            </a>
          </li>
          <li>
            <a href="#testimonial" className="active:bg-transparent">
              Seminar
            </a>
          </li>

          <li>
            <a href="#contact" className="active:bg-transparent">
              Kontak
            </a>
          </li>
        </ul>
      </div>
      <div className="flex mr-10 gap-x-4 navbar-end">
        {theme === "light" && (
          <div className="cursor-pointer" onClick={() => setTheme("dark")}>
            <img src="/moon-icon.svg" alt="sun icon" />
          </div>
        )}
        {theme === "dark" && (
          <div className="cursor-pointer" onClick={() => setTheme("light")}>
            <img src="/sun-icon.svg" alt="sun icon" />
          </div>
        )}
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
