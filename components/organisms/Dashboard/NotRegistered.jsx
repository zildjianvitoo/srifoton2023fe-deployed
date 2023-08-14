import React from "react";
import LayoutCredentials from "../Credentials/LayoutCredentials";
import Image from "next/image";
import { ethnocentric } from "@/public/fonts/fonts";
import Button from "@/components/atoms/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import NoSSR from "@/components/NoSSR";

export default function NotRegistered({ type }) {
  const { theme } = useTheme();

  const notRegisteredImageSource =
    theme === "light"
      ? "/assets/Dashboard/notregistered-img.svg"
      : "/assets/Dashboard/notregistered-img-dark.svg";

  return (
    <LayoutCredentials id="dashboard-data-diri" authPage>
      <div className="z-10 flex flex-col items-center justify-center w-full gap-y-8 lg:gap-y-5">
        <div className="flex flex-col justify-center">
          <Image
            src={notRegisteredImageSource}
            alt="not registered image"
            width={170}
            height={170}
          />
        </div>
        <p className="text-[#494B7C] dark:text-white text-xl font-medium text-center">
          Anda belum terdaftar di {type}{" "}
          <span
            className={`${ethnocentric.className} bg-gradient-to-r from-pink-srifoton to-blue-srifoton text-transparent bg-clip-text ml-0.5`}
          >
            SRIFOTON 2023
          </span>
        </p>
        <p className="text-center text-[#494B7C] dark:text-white">
          Tekan tombol di bawah ini <br />
          untuk mengetahui info lebih lanjut.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-2 lg:gap-4 md:w-4/5 lg:w-full xl:w-[70%] ">
          <Link
            href={`/${type}`}
            className="w-4/5 mt-3 font-semibold lg:w-full"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none bg-gradient-to-r  from-[#FC39FC] to-[#337EF0] ${
                  theme === "light"
                    ? "button-competition-type"
                    : "button-competition-type-dark"
                }  `}
              >
                Info {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            </NoSSR>
          </Link>
          <Link
            href="/kompetisi/register"
            className="w-4/5 mt-3 font-semibold lg:w-full"
          >
            <NoSSR>
              <Button
                style={`w-full relative border-none bg-gradient-to-r  from-[#FC39FC] to-[#337EF0] ${
                  theme === "light"
                    ? "button-competition-type"
                    : "button-competition-type-dark"
                }  `}
              >
                Buku Panduan
              </Button>
            </NoSSR>
          </Link>
        </div>
      </div>
    </LayoutCredentials>
  );
}
