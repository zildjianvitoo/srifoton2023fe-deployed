import LayoutMain from "@/components/LayoutMain";
import Button from "@/components/atoms/Button";
import CredentialsCard from "@/components/atoms/CredentialsCard";
import InputForm from "@/components/atoms/InputForm";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import RedirectIfLoggedIn from "@/components/HOC/WithRedirect";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { get, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { doRegister } from "@/utils/api";
import { formRules } from "@/utils/formRules";

let renderCount = 0;

function Register() {
  const [errorMessage, setErrorMessage] = useState({ email: "", password: [] });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password, confirmPassword } = data;
    try {
      const { data } = await doRegister({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      router.push("/login");
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data.errors);
    }
  };

  renderCount++;

  return (
    <LayoutMain>
      <LayoutCredentials>
        <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
          <CredentialsCard>
            <div className="relative z-10 flex flex-col w-full gap-4 ">
              <h1 className="mt-5 text-4xl text-[#464646] lg:text-[44px] font-bold mx-auto text-center dark:text-white">
                Registrasi Akun {renderCount / 2}
              </h1>
              <div className="flex flex-col mt-4 ">
                <InputForm
                  labelText={"Nama"}
                  placeholder={"Contoh: Cristiano Ronaldo"}
                  type={"text"}
                  labelFor={"name"}
                  register={register}
                  rules={formRules.name}
                />
                {errors.name && <ErrorMessage message={errors.name?.message} />}
              </div>
              <div className="flex flex-col">
                <InputForm
                  labelText={"Email"}
                  placeholder={"Contoh : ronaldogoat@goat.com"}
                  type={"email"}
                  labelFor={"email"}
                  register={register}
                  rules={formRules.email}
                />
                {(errorMessage || errors.email) && (
                  <ErrorMessage
                    message={errorMessage.email || errors.email?.message}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <InputForm
                    labelText={"Kata Sandi"}
                    placeholder={"Masukan kata sandi anda"}
                    type={showPassword ? "text" : "password"}
                    labelFor={"password"}
                    register={register}
                    rules={formRules.password}
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
                {(errorMessage || errors.password) && (
                  <ErrorMessage
                    message={
                      errorMessage.password[0] || errors.password?.message
                    }
                  />
                )}
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <InputForm
                    labelText={"Konfirmasi Kata Sandi"}
                    placeholder={"Konfirmasi kata sandi anda"}
                    type={showPassword ? "text" : "password"}
                    labelFor={"confirmPassword"}
                    min={8}
                    register={register}
                    rules={formRules.confirmPassword}
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      className="absolute cursor-pointer right-4 top-[57%] text-[#464646] dark:text-white text-2xl"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute cursor-pointer right-4 top-[57%] text-[#464646] dark:text-white text-2xl"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
                {errors.confirmPassword && (
                  <ErrorMessage message={errors.confirmPassword?.message} />
                )}
              </div>
              <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:mt-6 lg:justify-between">
                <div className="font-medium leading-tight">
                  <p className="text-[#464646] dark:text-white">
                    Anda Sudah Memiliki Akun?
                  </p>
                  <Link
                    href="/login"
                    className="text-[#2E7BEF] dark:text-[#E924E8]"
                  >
                    Masuk
                  </Link>
                </div>
                <Button variant={"submitButton"} style={"w-3/5 lg:w-2/5"}>
                  Daftar
                </Button>
              </div>
            </div>
          </CredentialsCard>
          <DevTool control={control} />
        </form>
      </LayoutCredentials>
    </LayoutMain>
  );
}

export default RedirectIfLoggedIn(Register);
