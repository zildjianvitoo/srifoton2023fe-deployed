import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import InputDropdown from "@/components/atoms/InputDropdown";
import InputFile from "@/components/atoms/InputFile";
import InputForm from "@/components/atoms/InputForm";
import InputRadio from "@/components/atoms/InputRadio";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { seminarFormRules } from "@/utils/formRules";
import { doSeminarRegistration } from "@/utils/api";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { data } from "autoprefixer";

let renderCount = 0;

export default function RegisterSeminarForm() {
  const [proof, setProof] = useState(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (formValue) => {
    console.log(formValue);
    const {
      name,
      email,
      nim,
      college,
      phoneNumber,
      seminarType,
      paymentMethod,
    } = formValue;
    try {
      const { data } = await doSeminarRegistration({
        name,
        email,
        nim,
        college,
        phone_number: phoneNumber,
        type: seminarType,
        payment_method: paymentMethod,
        proof: proof,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    errors.seminarType && console.log(errors.seminarType.message);
  }, [errors]);

  renderCount++;
  return (
    <>
      <p className="text-white">{renderCount / 2}</p>
      <form
        className={`w-full z-10 relative`}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
          <div className="flex flex-col">
            <InputForm
              labelFor="name"
              labelText={"Nama"}
              placeholder={"Contoh: Tim PakeNanya"}
              type={"text"}
              register={register}
              rules={seminarFormRules.name}
            />
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"email"}
              labelText={"Email"}
              placeholder={"Contoh: srifoton2023@gmail.com"}
              type={"email"}
              register={register}
              rules={seminarFormRules.email}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"college"}
              labelText={"Universitas"}
              placeholder={"Contoh: Universitas Sriwijaya"}
              type={"text"}
              register={register}
              rules={seminarFormRules.college}
            />
            {errors.college && (
              <ErrorMessage message={errors.college.message} />
            )}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"nim"}
              labelText={"NIM (optional)"}
              placeholder={"Contoh: 09021382227140"}
              type={"text"}
              register={register}
              rules={seminarFormRules.nim}
            />
            {errors.nim && <ErrorMessage message={errors.nim.message} />}
          </div>
          <div className="flex flex-col">
            <InputForm
              labelFor={"phoneNumber"}
              labelText={"No Hp"}
              placeholder={"Contoh: 08123456789"}
              type={"text"}
              register={register}
              rules={seminarFormRules.phoneNumber}
            />
            {errors.phoneNumber && (
              <ErrorMessage message={errors.phoneNumber.message} />
            )}
          </div>
          <InputDropdown
            errors={errors.paymentMethod}
            {...register("paymentMethod", seminarFormRules.paymentMethod)}
          />
          <div className="flex flex-col">
            <label className="text-lg font-medium">Pilih Tipe Seminar</label>

            <div className="flex gap-8">
              <InputRadio
                labelFor={"offline"}
                labelText={"Offline"}
                value={"offline"}
                {...register("seminarType", seminarFormRules.seminarType)}
              />
              <InputRadio
                labelFor={"online"}
                labelText={"Online"}
                value={"online"}
                {...register("seminarType", seminarFormRules.seminarType)}
              />
            </div>
            {errors.seminarType && (
              <ErrorMessage message={errors.seminarType.message} />
            )}
          </div>

          <InputFile
            labelFor={"proof"}
            labelText={"Bukti Pembayaran"}
            proof={proof}
            setProof={setProof}
          />

          <Button variant={"submitButton"} style={"w-3/4 mx-auto mt-2 lg:mt-4"}>
            Daftar
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}
