import { useFieldNumber } from "@/store/useFieldNumber";
import LayoutField from "./LayoutField";
import Steps from "@/components/Atom/Steps";
import FormCard from "@/components/Atom/FormCard";
import { useTheme } from "next-themes";

export default function SecondField() {
  const { setFieldNumber } = useFieldNumber();
  const { theme } = useTheme();

  const imageSource =
    theme === "light"
      ? "/assets/Kompetisi/daftarkompetisi2-img.svg"
      : "/assets/Kompetisi/daftarkompetisi2-imgdark.svg";

  return (
    <section id="daftar-kompetisi-2">
      <LayoutField>
        <div className="z-10 flex flex-col w-full gap-8 px-6 lg:px-10 py-14">
          <Steps field={2} />
          <form className="flex flex-col gap-8 mt-6">
            <div className="flex flex-col w-full gap-8 lg:flex-row">
              <FormCard key={"anggota-1"} header={"Anggota 1"} />
              <FormCard key={"anggota-2"} header={"Anggota 2"} />
            </div>
            <div className="flex w-full gap-8">
              <FormCard key={"anggota-3"} header={"Anggota 3"} />
              <div className="items-center justify-center hidden h-full ml-auto lg:flex ">
                <img src={imageSource} alt={"decoration"} />
              </div>
            </div>
          </form>
          <div className="flex flex-col-reverse gap-4 lg:flex-row lg:w-1/2">
            <button
              className="w-1/2 lg:w-1/4 text-[#5A5A5A] py-2  text-lg lg:text-xl  font-semibold tracking-wider rounded-lg bg-[#CCCCCC]/50 dark:bg-[#444444]/50 dark:text-[#DBDBDB] opacity-80 hover:opacity-100"
              onClick={() => setFieldNumber(1)}
            >
              Kembali
            </button>
            <button className="w-3/4 text-[#FCFCFC] text-lg lg:text-xl font-semibold tracking-wider rounded-lg bg-[#2E7BEF] py-2 opacity-90 hover:opacity-100 ">
              Lanjut
            </button>
          </div>
        </div>
      </LayoutField>
    </section>
  );
}
