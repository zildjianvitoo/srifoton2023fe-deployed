import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";
import Navbar from "@/components/Navbar";
import AuthSidebar from "@/components/AuthSidebar";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import InputForm from "@/components/atoms/InputForm";
import { useForm } from "react-hook-form";
import InputRadio from "@/components/atoms/InputRadio";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Button from "@/components/atoms/Button";
import { updateDataUser } from "@/utils/api";
import { useUserStore } from "@/store/userStore";
import { updateUserRules } from "@/utils/formRules";

function Dashboard() {
  const user = useUserStore((state) => state.user);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: user.name,
      email: user?.email,
      college: user?.college,
      nim: user?.nim,
      phoneNumber: user?.phone_number,
      genderType: user?.gender,
    },
  });
  const { isSubmitting, isDirty, errors } = formState;

  const onSubmitHandler = async (formValue) => {
    console.log(formValue);
    const { name, college, nim, phoneNumber, genderType } = formValue;
    try {
      const { data } = await updateDataUser(
        name,
        college,
        nim,
        phoneNumber,
        genderType
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-10">
            <AuthSidebar />
          </div>
          <div className="w-full">
            <LayoutCredentials id="dashboard-data-diri" authPage>
              <div className="z-10 flex flex-col justify-start w-full ">
                {" "}
                <h1 className="text-[#494B7C] text-4xl lg:text-6xl font-bold text-center -translate-y-4">
                  Data Diri
                </h1>
                <form
                  className="w-full mr-auto"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col w-full">
                      <InputForm
                        type={"text"}
                        labelText={"Nama"}
                        labelFor={"name"}
                        placeholder={"contoh: Zildjian Vito"}
                        register={register}
                        rules={updateUserRules.name}
                      />
                      {errors.name && (
                        <ErrorMessage message={errors.name.message} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <InputForm
                        type={"email"}
                        labelText={"Email"}
                        labelFor={"email"}
                        register={register}
                        disabled
                        style={"opacity-60"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <InputForm
                        type={"text"}
                        labelText={"Universitas"}
                        labelFor={"college"}
                        placeholder={"contoh: Universitas Sriwijaya"}
                        register={register}
                        rules={updateUserRules.college}
                      />
                      {errors.college && (
                        <ErrorMessage message={errors.college.message} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <InputForm
                        type={"number"}
                        labelText={"Nomor Induk Mahasiswa (NIM)"}
                        labelFor={"nim"}
                        placeholder={"contoh: 0902123456789"}
                        register={register}
                        rules={updateUserRules.nim}
                      />
                      {errors.nim && (
                        <ErrorMessage message={errors.nim.message} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <InputForm
                        type={"number"}
                        labelText={"No Telepon (WA)"}
                        labelFor={"phoneNumber"}
                        placeholder={"contoh: 0902123456789"}
                        register={register}
                        rules={updateUserRules.phoneNumber}
                      />
                      {errors.phoneNumber && (
                        <ErrorMessage message={errors.phoneNumber.message} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-lg font-medium lg:text-xl text-[#494B7C] dark:text-white">
                        Jenis Kelamin
                      </label>

                      <div className="flex gap-8">
                        <InputRadio
                          labelFor={"pria"}
                          labelText={"Pria"}
                          value={"pria"}
                          {...register(
                            "genderType",
                            updateUserRules.genderType
                          )}
                        />
                        <InputRadio
                          labelFor={"wanita"}
                          labelText={"Wanita"}
                          value={"wanita"}
                          {...register(
                            "genderType",
                            updateUserRules.genderType
                          )}
                        />
                      </div>
                      {errors.genderType && (
                        <ErrorMessage message={errors.genderType.message} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <InputForm
                        type={"text"}
                        labelText={"Instagram"}
                        labelFor={"instagram"}
                        placeholder={"contoh: @srifoton.official"}
                        register={register}
                        rules={updateUserRules.instagram}
                      />
                      {errors.instagram && (
                        <ErrorMessage message={errors.instagram.message} />
                      )}
                    </div>
                  </div>

                  <Button
                    variant={"submitButton"}
                    style={"ml-auto mt-10 lg:mt-28 w-1/2 lg:w-1/4"}
                    disabled={!isDirty}
                    loading={isSubmitting}
                  >
                    Simpan
                  </Button>
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