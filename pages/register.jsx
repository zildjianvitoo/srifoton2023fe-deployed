import { useState } from "react";
import LayoutMain from "@/components/LayoutMain";
import Button from "@/components/atoms/Button";
import CredentialsCard from "@/components/atoms/CredentialsCard";
import InputForm from "@/components/atoms/InputForm";
import Link from "next/link";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { doRegister } from "@/utils/api";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data, status, message } = await doRegister({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      console.log(data);
      console.log(status);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  return (
    <LayoutMain>
      <section id="register-seminar" className="relative h-full mt-24 mb-10">
        <div className="p-10 lg:p-16 ">
          <div
            className="absolute inset-0 w-[90%] md:w-[85%] lg:w-4/5 h-full mx-auto bg-center bg-no-repeat bg-cover rounded-[28px] lg:rounded-[50px] shadow-lg p-4"
            style={{
              backgroundImage: "url(assets/Seminar/register-seminar-bgimg.svg)",
            }}
          />
          <div className="mx-auto flex md:w-[85%] lg:w-4/5 gap-6">
            <form className="w-full" onSubmit={onSubmitHandler}>
              <CredentialsCard>
                <div className="relative z-10 flex flex-col w-full gap-6 ">
                  <h1 className="mt-5 text-4xl text-[#464646] lg:text-5xl font-bold mx-auto text-center">
                    Registrasi Akun
                  </h1>
                  <InputForm
                    labelText={"Nama"}
                    placeholder={"Contoh: Cristiano Ronaldo"}
                    type={"text"}
                    labelFor={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputForm
                    labelText={"Email"}
                    placeholder={"Contoh : ronaldogoat@goat.com"}
                    type={"email"}
                    labelFor={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="relative">
                    <InputForm
                      labelText={"Kata Sandi"}
                      placeholder={"Masukan kata sandi anda"}
                      type={showPassword ? "text" : "password"}
                      labelFor={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <AiOutlineEye
                        className="absolute cursor-pointer right-4 top-[57%] text-[#464646] text-2xl"
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute cursor-pointer right-4 top-[57%] text-[#464646] text-2xl"
                        onClick={handleShowPassword}
                      />
                    )}
                  </div>
                  <div className="relative">
                    <InputForm
                      labelText={"Konfirmasi Kata Sandi"}
                      placeholder={"Konfirmasi kata sandi anda"}
                      type={showPassword ? "text" : "password"}
                      labelFor={"confirm-password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <AiOutlineEye
                        className="absolute cursor-pointer right-4 top-[57%] text-[#464646] text-2xl"
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute cursor-pointer right-4 top-[57%] text-[#464646] text-2xl"
                        onClick={handleShowPassword}
                      />
                    )}
                  </div>
                  <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:mt-6 lg:justify-between">
                    <div className="font-medium leading-tight">
                      <p className="">Anda Sudah Memiliki Akun?</p>
                      <Link href="/login" className="text-[#2E7BEF]">
                        Masuk
                      </Link>
                    </div>
                    <Button variant={"submitButton"} style={"w-3/5 lg:w-2/5"}>
                      Daftar
                    </Button>
                  </div>
                </div>
              </CredentialsCard>
            </form>
          </div>
        </div>
      </section>
    </LayoutMain>
  );
}
