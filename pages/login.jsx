import { useState } from "react";
import LayoutMain from "@/components/LayoutMain";
import CredentialsCard from "@/components/atoms/CredentialsCard";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import InputForm from "@/components/atoms/InputForm";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import Button from "@/components/atoms/Button";
import RedirectIfLoggedIn from "@/components/HOC/WithRedirect";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAccessTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { doLogin } from "@/utils/api";
import { formRules } from "@/utils/formRules";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Login() {
  const [errorMessage, setErrorMessage] = useState({ email: "", password: [] });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setAccessToken } = useAccessTokenStore();
  const { setUser } = useUserStore();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (formValues) => {
    console.log(formValues);
    const { email, password } = formValues;
    try {
      const { data } = await doLogin({ email, password });
      console.log(data);
      setAccessToken(data.token);
      setUser(data.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data.errors);
      console.log(errorMessage);
    }
  };
  return (
    <LayoutMain>
      <LayoutCredentials loginPage>
        <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
          <CredentialsCard>
            <div className="relative z-10 flex flex-col w-full gap-4">
              <h1 className="mt-5 text-4xl text-[#464646] lg:text-[44px] font-bold mx-auto text-center dark:text-white">
                Masuk Akun
              </h1>
              <div className="flex flex-col mt-12">
                <InputForm
                  labelText={"Email"}
                  placeholder={"Contoh : ronaldogoat@goat.com"}
                  type={"email"}
                  labelFor={"email"}
                  register={register}
                  rules={formRules.email}
                />
                {(errorMessage.email.length > 0 || errors.email) && (
                  <ErrorMessage
                    message={
                      errors.email?.message ||
                      "Password atau Email yang Anda masukkan salah"
                    }
                  />
                )}
              </div>
              <div className="flex flex-col ">
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
                      onClick={showPasswordHandler}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute cursor-pointer right-4 top-[57%] text-[#464646] dark:text-white text-2xl"
                      onClick={showPasswordHandler}
                    />
                  )}
                </div>
                {errors.password && (
                  <ErrorMessage message={errors.password.message} />
                )}
                <Link
                  href="/forgot-password"
                  className="flex self-end justify-end"
                >
                  <p className="text-[#2E7BEF] dark:text-[#E924E8] font-medium text-base bg-black">
                    Lupa Kata Sandi?
                  </p>
                </Link>
                <div className="flex flex-col-reverse mt-16 gap-y-5 lg:flex-row md:mt-24 lg:justify-between">
                  <div className="font-medium leading-tight">
                    <p className="text-[#464646] dark:text-white">
                      Anda Belum Memiliki Akun?
                    </p>
                    <Link
                      href="/register"
                      className="text-[#2E7BEF] dark:text-[#E924E8]"
                    >
                      Registrasi
                    </Link>
                  </div>
                  <Button variant={"submitButton"} style={"w-3/5 lg:w-2/5"}>
                    Masuk
                  </Button>
                </div>
              </div>
            </div>
          </CredentialsCard>
          <DevTool control={control} />
        </form>
      </LayoutCredentials>
    </LayoutMain>
  );
}

export default RedirectIfLoggedIn(Login);
