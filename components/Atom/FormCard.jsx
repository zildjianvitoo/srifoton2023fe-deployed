import React, { useEffect } from "react";
import InputForm from "./InputForm";
import InputRadio from "./InputRadio";
import InputFile from "./InputFile";
import { useState } from "react";

export default function FormCard({ header }) {
  const [field, setField] = useState({
    nama: "",
    idMahasiswa: "",
    nomorTelepon: "",
    instagram: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(field);
  };

  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg w-full border-2 border-dashed border-[#E924E8] lg:w-1/2  dark:text-[#EDEDED">
      <h3 className="text-3xl font-medium text-center text-black dark:text-[#EDEDED]">
        {header}
      </h3>
      <InputForm
        labelFor={"name"}
        labelText={"Nama"}
        type={"text"}
        name={"nama"}
        value={field.nama}
        onChangeHandler={handleInputChange}
        placeholder={"Contoh: Zildjian Vito"}
      />
      <InputForm
        labelFor={"id-mahasiswa"}
        labelText={"ID Mahasiswa"}
        type={"number"}
        name={"idMahasiswa"}
        value={field.idMahasiswa}
        onChangeHandler={handleInputChange}
        placeholder={"Contoh: 090211382383929"}
      />
      <InputForm
        labelFor={"phone-number"}
        labelText={"No Telepon"}
        type={"number"}
        name={"nomorTelepon"}
        value={field.nomorTelepon}
        onChangeHandler={handleInputChange}
        placeholder={"Contoh: 08123456789"}
      />
      <InputForm
        labelFor={"instagram"}
        labelText={"Instagram"}
        type={"text"}
        name={"instagram"}
        value={field.instagram}
        onChangeHandler={handleInputChange}
        placeholder={"Contoh: @zildjianvitoo"}
      />
      <InputRadio />
      <InputFile labelFor="kartu-mahasiswa-1" labelText="Kartu Mahasiswa" />
    </div>
  );
}
