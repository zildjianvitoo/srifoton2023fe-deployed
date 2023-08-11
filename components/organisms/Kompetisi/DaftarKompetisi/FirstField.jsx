import { useTheme } from "next-themes";
import FormFirstField from "./FormFirstField";
import PaymentNote from "@/components/molecules/PaymentNote";
import { ethnocentric } from "@/public/fonts/fonts";

export default function FirstField({
  jenisKompetisi,
  register,
  errors,
  setProof,
  errorMessageProof,
}) {
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/Kompetisi/DaftarKompetisi/daftarkompetisi-img.svg"
      : "/assets/Kompetisi/DaftarKompetisi/daftarkompetisi-imgdark.svg";

  return (
    <section id="daftar-kompetisi-1" className="z-10">
      <div className="flex flex-col w-full gap-8 px-6 pt-6 lg:pt-12 lg:pb-0 lg:px-10">
        {/* <div
          className={` mt-3  lg:pb-[6px]  font-semibold  text-[20px] xs:text-2xl lg:text-5xl  field-header dark:field-header-dark mx-auto ${ethnocentric.className}`}
        > */}
        {jenisKompetisi === "competitive programming" ? (
          <>
            <h1 className="tracking-[10%]  mx-auto  text-center lg:leading-[3.5rem] ">
              Competitive
            </h1>
            <h1 className="tracking-[10%] pl-[2px] -mt-3 xs:mt-0 lg:mt-3 mx-auto ">
              Programming
            </h1>
          </>
        ) : jenisKompetisi === "uiux design" ? (
          <h1 className="tracking-[10%] mx-auto p-1 text-center lg:leading-[3.5rem]">
            UI/UX DESIGN
          </h1>
        ) : (
          <h1
            className={` text-center text-xl pr-5 xs:pr-0 md:text-4xl mx-auto  lg:text-5xl font-black lg:mb-8 ${ethnocentric.className}  `}
          >
            <span
              className={`text-2xl  md:text-4xl lg:text-5xl  text-transparent bg-gradient-to-r bg-clip-text from-pink-srifoton to-blue-srifoton `}
            >
              WEB
            </span>{" "}
            <span className="pl-1 field-header dark:field-header-dark lg:!tracking-[5px]">
              DEVELOPMENT
            </span>
          </h1>
        )}
        {/* </div> */}
        <div className="flex flex-col gap-8 lg:flex-row">
          <FormFirstField
            register={register}
            errors={errors}
            setProof={setProof}
            errorMessageProof={errorMessageProof}
          />
          <div className="flex flex-col w-full lg:mt-2 lg:w-1/2">
            <PaymentNote />
            <img
              src={imageSource}
              alt="icon register kompetisi"
              className="hidden mt-6 lg:flex w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
