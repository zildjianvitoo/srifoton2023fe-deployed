import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import Navbar from "@/components/Navbar";
import Button from "@/components/atoms/Button";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import InputForm from "@/components/atoms/InputForm";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import React, { useEffect } from "react";
import register from "../register";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/store/userStore";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateDataUser } from "@/utils/api";
import { updateUserRules } from "@/utils/formRules";
import { useRouter } from "next/router";

export default function DataAkun() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: user.email,
    },
  });

  const { isDirty, errors } = formState;

  const onSubmitHandler = (formValue) => {};

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
                        type={"email"}
                        labelText={"Email"}
                        labelFor={"email"}
                        register={register}
                        style={"opacity-60"}
                        disabled
                      />
                    </div>
                    {/* <div className="flex flex-col">
                      <div className="relative">
                        <InputForm
                          labelText={"Kata Sandi"}
                          placeholder={"Masukan kata sandi anda"}
                          type={showPassword ? "text" : "password"}
                          labelFor={"password"}
                          register={register}
                          rules={updateUserRules.password}
                        />
                        {showPassword ? (
                          <AiOutlineEye
                            className={`absolute right-4 top-[57%] cursor-pointer text-[#464646] dark:text-white text-2xl `}
                            onClick={handleShowPassword}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute cursor-pointer right-4 top-[57%] text-[#464646] dark:text-white text-2xl"
                            onClick={handleShowPassword}
                          />
                        )}
                      </div>
                      {(errors.password ||
                        errorMessage?.password?.length > 0) && (
                        <ErrorMessage
                          message={
                            errors.password?.message ||
                            errorMessage?.password[1]
                          }
                        />
                      )}
                    </div> */}
                  </div>

                  <Button
                    variant={"submitButton"}
                    style={"ml-auto mt-10 lg:mt-28 w-1/2 lg:w-1/4"}
                    disabled={!isDirty}
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
