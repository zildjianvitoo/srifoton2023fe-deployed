import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LayoutMain from "@/components/LayoutMain";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import CredentialsCard from "@/components/atoms/CredentialsCard";
import InputForm from "@/components/atoms/InputForm";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import SuccessMessage from "@/components/atoms/SuccessMessage";
import Button from "@/components/atoms/Button";
import { credentialsFormRules } from "@/utils/formRules";
import { doResetPassword } from "@/utils/api";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { DevTool } from "@hookform/devtools";
import Head from "next/head";
import useModal from "@/hooks/useModal";
import Modal from "@/components/atoms/Modal";

export default function ResetPassword({ token, email }) {
  const [isError, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { showModal, setShowModal, modalMessage, setModalMessage } = useModal();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (formValue) => {
    const { newPassword, confirmNewPassword } = formValue;
    try {
      const { data } = await doResetPassword({
        token,
        email,
        password: newPassword,
        password_confirmation: confirmNewPassword,
      });
      setError(false);
      setModalMessage("Password Berhasil Diubah");
      console.log(data);
    } catch (error) {
      setError(true);
      setModalMessage("Terjadi Kesalaha,silahkan coba beberapa saat lagi");
      console.log(error);
    } finally {
      setShowModal(true);
    }
  };

  return (
    <>
      <Head>
        <title>SRIFOTON | Reset Password</title>
      </Head>
      <LayoutMain>
        <LayoutCredentials id={"reset-password-section"}>
          <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
            <CredentialsCard>
              <div className="relative z-10 flex flex-col w-full gap-4">
                <h1 className="mt-5 text-4xl text-[#494B7C] lg:text-[44px] font-bold mx-auto text-center dark:text-white">
                  Atur Ulang <span className="block lg:mt-4">Kata Sandi</span>
                </h1>
                <div className="flex flex-col mt-10 ">
                  <div className="relative">
                    <InputForm
                      labelText={"Kata Sandi Baru"}
                      placeholder={"Masukan kata sandi baru"}
                      type={showPassword ? "text" : "password"}
                      labelFor={"newPassword"}
                      register={register}
                      rules={credentialsFormRules.resetPassword.newPassword}
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
                  {errors.newPassword && (
                    <ErrorMessage message={errors.newPassword?.message} />
                  )}
                </div>
                <div className="flex flex-col ">
                  <div className="relative">
                    <InputForm
                      labelText={"Konfirmasi Kata Sandi"}
                      placeholder={"Konfirmasi kata sandi baru"}
                      type={showPassword ? "text" : "password"}
                      labelFor={"confirmNewPassword"}
                      register={register}
                      rules={
                        credentialsFormRules.resetPassword.confirmNewPassword
                      }
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
                  {errors.confirmNewPassword && (
                    <ErrorMessage
                      message={errors.confirmNewPassword?.message}
                    />
                  )}
                </div>
                <div className="flex justify-end mt-20">
                  <Button
                    variant={"submitButton"}
                    style={"w-3/5 lg:w-2/5"}
                    loading={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </CredentialsCard>
          </form>
          {showModal && (
            <Modal
              message={modalMessage}
              showModal={showModal}
              setShowModal={setShowModal}
              messageHeader={isError ? "Gagal" : "Berhasil"}
              redirect={isError ? false : true}
              redirectTo={"/login"}
              buttonRedirectMessage={"Pergi Ke Halaman Login"}
            />
          )}
          <DevTool control={control} />
        </LayoutCredentials>
      </LayoutMain>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { token, email } = query;

  if (!token || !email) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
      email,
    },
  };
};
