import { useTheme } from "next-themes";

import Steps from "@/components/Atom/Steps";
import FormFirstField from "./FormFirstField";
import LayoutField from "./LayoutField";

export default function FirstField() {
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/Kompetisi/daftarkompetisi-img.svg"
      : "/assets/Kompetisi/daftarkompetisi-imgdark.svg";

  return (
    <section id="daftar-kompetisi-1">
      <LayoutField>
        <div className="z-10 flex flex-col w-full gap-8 px-10 pt-14">
          <Steps />

          <div className="flex flex-col gap-0 lg:mt-3  lg:pb-[6px]  font-semibold leading-loose text-4xl lg:text-5xl field-header">
            <h1 className="tracking-[5%]">Competitive</h1>
            <h1 className="tracking-[5%] -mt-6 lg:mt-3 ">Programming</h1>
          </div>

          <FormFirstField />
        </div>
        <div className="relative hidden w-full h-full md:flex lg:justify-end ">
          <img src={imageSource} alt="Background Pattern" />
        </div>
      </LayoutField>
    </section>
  );
}
