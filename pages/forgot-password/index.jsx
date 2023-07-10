import { useState } from "react";
import LayoutMain from "@/components/LayoutMain";
import CredentialsCard from "@/components/atoms/CredentialsCard";
import InputForm from "@/components/atoms/InputForm";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import Button from "@/components/atoms/Button";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import useErrorMessage from "@/hooks/useErrorMessage";
import { credentialsFormRules } from "@/utils/formRules";
import { sendEmailForgotPassword } from "@/utils/api";
import { useForm } from "react-hook-form";
import SuccessMessage from "@/components/atoms/SuccessMessage";

export default function ForgotPassword() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useErrorMessage({});
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmitHandler = async (formValue) => {
    const { email } = formValue;
    try {
      setLoading(true);
      const { data } = await sendEmailForgotPassword({ email });
      console.log(data);
      setErrorMessage({});
      setSuccessMessage(data.status);
    } catch (error) {
      console.log(error);
      setSuccessMessage("");
      setErrorMessage(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutMain>
      <LayoutCredentials>
        <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
          <CredentialsCard>
            <div className="relative z-10 flex flex-col w-full gap-4 ">
              <h1 className="mt-5 text-4xl text-[#464646] lg:text-[44px] font-bold mx-auto text-center dark:text-white">
                Lupa Kata Sandi
              </h1>
              <div className="flex flex-col mt-12">
                <InputForm
                  labelFor={"email"}
                  labelText={"Email"}
                  type={"email"}
                  placeholder={"Contoh: ronaldogoat@gmail.com"}
                  register={register}
                  rules={credentialsFormRules.forgotPassword.email}
                />
                {(errors.email || errorMessage?.email) && (
                  <ErrorMessage
                    message={errors.email?.message || errorMessage?.email}
                  />
                )}
                {successMessage && <SuccessMessage message={successMessage} />}
              </div>
              <div className="flex justify-end mt-20">
                <Button
                  variant={"submitButton"}
                  style={"w-3/5 lg:w-2/5"}
                  disabled={isLoading}
                >
                  Verifikasi
                </Button>
              </div>
            </div>
          </CredentialsCard>
        </form>
      </LayoutCredentials>
    </LayoutMain>
  );
}
