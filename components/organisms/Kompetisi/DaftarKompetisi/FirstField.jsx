import { useTheme } from "next-themes";
import FormFirstField from "./FormFirstField";
import PaymentNote from "@/components/molecules/PaymentNote";
import { ethnocentric } from "@/public/fonts/ethnocentric";

export default function FirstField({ jenisKompetisi }) {
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/Kompetisi/daftarkompetisi-img.svg"
      : "/assets/Kompetisi/daftarkompetisi-imgdark.svg";

  return (
    <section id="daftar-kompetisi-1" className="z-10">
      <div className="flex flex-col w-full gap-8 px-6 pt-6 lg:pt-12 lg:pb-0 lg:px-10">
        <div
          className={`flex flex-col gap-0 lg:mt-3  lg:pb-[6px] mx-auto font-semibold leading-loose text-[20px] xs:text-2xl lg:text-5xl ${
            ethnocentric.className
          } ${theme === "light" ? "field-header" : "field-header-dark"}`}
        >
          {jenisKompetisi === "competitive programming" ? (
            <>
              <h1 className="tracking-[10%]  mx-auto  text-center lg:leading-[3.5rem] ">
                Competitive
              </h1>
              <h1 className="tracking-[10%] -mt-3 xs:mt-0 lg:mt-3 mx-auto ">
                Programming
              </h1>
            </>
          ) : jenisKompetisi === "uiux design" ? (
            <h1 className="tracking-[10%] mx-auto  text-center lg:leading-[3.5rem]">
              UI/UX DESIGN
            </h1>
          ) : (
            <h1 className="tracking-[10%] mx-auto p-0 lg:p-3  line-clamp-2 text-center lg:leading-[3.5rem]">
              {jenisKompetisi}
            </h1>
          )}
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <FormFirstField />
          <div className="flex flex-col w-full lg:mt-2 lg:w-1/2">
            <PaymentNote />
            <img
              src={imageSource}
              className="hidden mt-6 lg:flex w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}