import React, { useEffect } from "react";
import InputForm from "../atoms/InputForm";
import InputRadio from "../atoms/InputRadio";
import InputFile from "../atoms/InputFile";
import { useState } from "react";

export default function FormCard({ header }) {
  const [field, setField] = useState({
    nama: "",
    idMahasiswa: "",
    nomorTelepon: "",
    instagram: "",
  });
  const [gender, setGender] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-lg w-full border-2 border-dashed border-[#E924E8] lg:w-[50%]  dark:text-[#EDEDED">
      <h3 className=" text-xl lg:text-3xl font-medium text-center text-[#F86E45] dark:text-[#D5DA00]">
        {header}
      </h3>
      <InputForm
        labelFor={"name"}
        labelText={"Nama"}
        type={"text"}
        name={"nama"}
        value={field.nama}
        onChange={handleInputChange}
        placeholder={"Contoh: Zildjian Vito"}
      />
      <InputForm
        labelFor={"id-mahasiswa"}
        labelText={"ID Mahasiswa"}
        type={"number"}
        name={"idMahasiswa"}
        value={field.idMahasiswa}
        onChange={handleInputChange}
        placeholder={"Contoh: 090211382383929"}
      />
      <InputForm
        labelFor={"phone-number"}
        labelText={"No Telepon"}
        type={"number"}
        name={"nomorTelepon"}
        value={field.nomorTelepon}
        onChange={handleInputChange}
        placeholder={"Contoh: 08123456789"}
      />
      <InputForm
        labelFor={"instagram"}
        labelText={"Instagram"}
        type={"text"}
        name={"instagram"}
        value={field.instagram}
        onChange={handleInputChange}
        placeholder={"Contoh: @zildjianvitoo"}
      />
      <InputRadio setGender={setGender} />
      <InputFile labelFor="kartu-mahasiswa-1" labelText="Kartu Mahasiswa" />
    </div>
  );
}
