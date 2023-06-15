import { useTheme } from "next-themes";

import Steps from "@/components/Atom/Steps";
import FormFirstField from "./FormFirstField";

export default function FirstField() {
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/Kompetisi/daftarkompetisi-img.svg"
      : "/assets/Kompetisi/daftarkompetisi-imgdark.svg";

  return (
    <section id="daftar-kompetisi-1">
      <div className="relative mt-16 rounded-3xl">
        <div className="bg-gradient-to-r from-[#E8E8E8]/80 to-[#DFE0FF]/60 dark:from-[#9A9A9A]/80 dark:to-[#595959]/60 dark:opacity-40 absolute inset-0 h-full rounded-3xl" />
        <div className="flex gap-10">
          <div className="z-10 flex flex-col w-full gap-8 px-10 py-14">
            <Steps />
            <FormFirstField />
          </div>
          <div className="relative hidden w-full h-full md:flex lg:justify-end ">
            <img src={imageSource} alt="Background Pattern" />
          </div>
        </div>
      </div>
    </section>
  );
}
