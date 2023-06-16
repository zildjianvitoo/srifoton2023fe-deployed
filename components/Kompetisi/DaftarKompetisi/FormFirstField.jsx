import InputDropdown from "@/components/Atom/InputDropdown";
import InputFile from "@/components/Atom/InputFile";
import InputForm from "@/components/Atom/InputForm";
import { useFieldNumber } from "@/store/useFieldNumber";
import { useState } from "react";

export default function FormFirstField() {
  const { setFieldNumber } = useFieldNumber();
  const [field, setField] = useState({
    teamName: "",
    email: "",
    universitas: "",
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
    <form className="-mt-5 lg:-mt-2">
      <div className="flex flex-col w-full gap-6 dark:text-[#EDEDED]">
        <InputForm
          labelFor="name"
          labelText={"Nama Tim"}
          placeholder={"Contoh: Tim PakeNanya"}
          type={"text"}
          name="teamName"
          value={field.teamName}
          onChangeHandler={handleInputChange}
        />
        <InputForm
          labelFor={"email"}
          labelText={"Email"}
          placeholder={"Contoh: srifoton2023@gmail.com"}
          type={"email"}
          name={"email"}
          value={field.email}
          onChangeHandler={handleInputChange}
        />
        <InputForm
          labelFor={"universitas"}
          labelText={"Universitas"}
          placeholder={"Contoh: Universitas Sriwijaya"}
          type={"text"}
          name={"universitas"}
          value={field.universitas}
          onChangeHandler={handleInputChange}
        />
        <InputDropdown />
        <InputFile labelFor={"bukti-pembayaran"} labelText="Bukti Pembayaran" />
        <button
          onClick={() => setFieldNumber(2)}
          className="w-full bg-[#2E7BEF] opacity-90 hover:opacity-100  tracking-wider text-[#FCFCFC] py-3 mt-5 rounded-lg font-semibold text-xl"
        >
          Lanjut
        </button>
      </div>
    </form>
  );
}
