import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";
import Navbar from "@/components/Navbar";
import AuthSidebar from "@/components/AuthSidebar";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import InputForm from "@/components/atoms/InputForm";
import { useForm } from "react-hook-form";
import InputRadio from "@/components/atoms/InputRadio";
import ErrorMessage from "@/components/atoms/ErrorMessage";

function Dashboard() {
  const { register } = useForm();
  const errors = false;
  return (
    <>
      <Navbar />
      <LayoutMain>
        <div className="flex w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] mt-10">
            <AuthSidebar />
          </div>
          <div className="w-full">
            <LayoutCredentials id="dashboard-data-diri" authPage>
              <div className="z-10 flex flex-col justify-center w-full">
                {" "}
                <h1 className="text-[#494B7C] text-4xl lg:text-6xl font-bold text-center ">
                  Data Diri
                </h1>
                <form className="z-10 flex flex-col gap-4 mt-10">
                  <div className="flex flex-col">
                    <InputForm
                      type={"text"}
                      labelText={"Nama"}
                      labelFor={"name"}
                      placeholder={"contoh: Zildjian Vito"}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <InputForm
                      type={"text"}
                      labelText={"Universitas"}
                      labelFor={"college"}
                      placeholder={"contoh: Universitas Sriwijaya"}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <InputForm
                      type={"number"}
                      labelText={"Nomor Induk Mahasiswa (NIM)"}
                      labelFor={"nim"}
                      placeholder={"contoh: 0902123456789"}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <InputForm
                      type={"number"}
                      labelText={"No Telepon (WA)"}
                      labelFor={"nim"}
                      placeholder={"contoh: 0902123456789"}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-medium">
                      Pilih Tipe Seminar
                    </label>

                    <div className="flex gap-8">
                      <InputRadio
                        labelFor={"offline"}
                        labelText={"Offline"}
                        value={"offline"}
                        {...register("seminarType")}
                      />
                      <InputRadio
                        labelFor={"online"}
                        labelText={"Online"}
                        value={"online"}
                        {...register("seminarType")}
                      />
                    </div>
                    {errors && <ErrorMessage />}
                  </div>
                </form>
              </div>
            </LayoutCredentials>
          </div>
        </div>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(Dashboard);
