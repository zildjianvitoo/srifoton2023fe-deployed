import { useTheme } from "next-themes";
import FormFirstField from "./FormFirstField";
import PaymentNote from "@/components/molecules/PaymentNote";
import { ethnocentric } from "@/public/fonts/ethnocentric";

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
      ? "/assets/Kompetisi/daftarkompetisi-img.svg"
      : "/assets/Kompetisi/daftarkompetisi-imgdark.svg";

  return (
    <section id="daftar-kompetisi-1" className="z-10">
      <div className="flex flex-col w-full gap-8 px-6 pt-6 lg:pt-12 lg:pb-0 lg:px-10">
        <div
          className={`flex flex-col gap-0 mt-3  lg:pb-[6px] mx-auto font-semibold leading-loose text-[20px] xs:text-2xl lg:text-5xl field-header dark:field-header-dark ${ethnocentric.className}`}
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
            <h1 className="tracking-[10%] mx-auto p-1 text-center lg:leading-[3.5rem]">
              UI/UX DESIGN
            </h1>
          ) : (
            <h1 className="tracking-[10%] mx-auto p-0 lg:p-3 text-center lg:leading-[3.5rem]">
              {jenisKompetisi}
            </h1>
          )}
        </div>
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
