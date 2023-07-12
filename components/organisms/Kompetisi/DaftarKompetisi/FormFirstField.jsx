import { useState } from "react";
import InputDropdown from "@/components/atoms/InputDropdown";
import InputFile from "@/components/atoms/InputFile";
import InputForm from "@/components/atoms/InputForm";
import { competitionFormRules } from "@/utils/formRules";
import ErrorMessage from "@/components/atoms/ErrorMessage";

export default function FormFirstField({
  register,
  errors,
  setProof,
  errorMessageProof,
}) {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
        <div className="flex flex-col">
          <InputForm
            labelFor="teamName"
            labelText={"Nama Tim"}
            placeholder={"Contoh: Tim PakeNanya"}
            type={"text"}
            register={register}
            rules={competitionFormRules.firstField.teamName}
          />
          {errors.teamName && (
            <ErrorMessage message={errors.teamName.message} />
          )}
        </div>
        <div className="flex flex-col">
          <InputForm
            labelFor={"email"}
            labelText={"Email"}
            placeholder={"Contoh: srifoton2023@gmail.com"}
            type={"email"}
            register={register}
            rules={competitionFormRules.firstField.email}
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
            rules={competitionFormRules.firstField.college}
          />
          {errors.college && <ErrorMessage message={errors.college.message} />}
        </div>
        <div className="flex flex-col">
          <InputDropdown
            {...register(
              "paymentMethod",
              competitionFormRules.firstField.paymentMethod
            )}
          />
          {errors.paymentMethod && (
            <ErrorMessage message={errors.paymentMethod.message} />
          )}
        </div>
        <InputFile
          labelFor={"bukti-pembayaran"}
          labelText="Bukti Pembayaran"
          setProof={setProof}
          errorMessage={errorMessageProof}
        />
      </div>
    </div>
  );
}
