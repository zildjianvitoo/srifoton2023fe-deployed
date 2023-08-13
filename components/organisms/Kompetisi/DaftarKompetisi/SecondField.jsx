import FormCard1 from "@/components/molecules/FormCard1";
import FormCard2 from "@/components/molecules/FormCard2";
import FormCard3 from "@/components/molecules/FormCard3";
import { ethnocentric } from "@/public/fonts/fonts";

export default function SecondField({
  register,
  errors,
  setIdCard1,
  setIdCard2,
  setIdCard3,
  errorMessageIdCard1,
}) {
  return (
    <section id="daftar-kompetisi-2" className="z-10">
      <div className="z-10 flex flex-col w-full gap-8 px-6 py-6 lg:px-10 ">
        <div className="flex flex-col gap-8 mt-6">
          <h1
            className={`text-2xl font-extrabold lg:text-[42px] text-center pt-1 pb-3 member-form-header dark:member-form-header-dark tracking-widest ${ethnocentric.className}`}
          >
            Formulir Anggota
          </h1>
          <div className="flex flex-col w-full gap-8 lg:flex-row">
            <FormCard1
              key={"anggota-1"}
              header={"Anggota 1"}
              register={register}
              errors={errors}
              setIdCard1={setIdCard1}
              errorMessageIdCard1={errorMessageIdCard1}
            />
            <FormCard2
              key={"anggota-2"}
              header={"Anggota 2"}
              register={register}
              errors={errors}
              setIdCard2={setIdCard2}
            />
          </div>
          <div className="flex w-full gap-8">
            <FormCard3
              key={"anggota-3"}
              header={"Anggota 3"}
              register={register}
              errors={errors}
              setIdCard3={setIdCard3}
            />
            <div className="items-center justify-center hidden w-1/2 h-full mt-20 ml-auto lg:flex ">
              <img
                src={
                  "/assets/Kompetisi/DaftarKompetisi/daftarkompetisi-memberimg.svg"
                }
                alt={"decoration"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <div className="items-center justify-center hidden w-1/2 h-full mt-20 ml-auto lg:flex ">
//               <img src={imageSource} alt={"decoration"} />
//             </div>
