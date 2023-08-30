import React from "react";
import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";

export default function FormCardDetailMember1({ header, register, proof }) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-[25px] md:rounded-[27px] lg:rounded-[30px] w-full gradient-border-registerkompetisi-member dark:gradient-border-registerkompetisi-member-dark lg:w-1/2  dark:text-[#EDEDED">
      <h3 className="pb-1 mx-auto text-2xl font-bold text-center text-transparent w-fit md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-srifoton to-pink-srifoton bg-clip-text font-poppins">
        {header}
      </h3>
      <div className="flex flex-col lg:mt-10">
        <InputForm
          labelFor={"name1"}
          labelText={"Nama"}
          type={"text"}
          disabled
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"nim1"}
          labelText={"ID Mahasiswa"}
          type={"text"}
          disabled
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"phoneNumber1"}
          labelText={"No Telepon"}
          type={"text"}
          disabled
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"instagram1"}
          labelText={"Instagram"}
          type={"text"}
          disabled
          register={register}
        />
      </div>
      {/* <InputRadio setGender={setGender} /> */}
      <InputFile
        labelFor="idCard1DetailTeam"
        labelText="Kartu Mahasiswa"
        imageReadOnly={proof}
        detailTeamPage
      />
    </div>
  );
}
