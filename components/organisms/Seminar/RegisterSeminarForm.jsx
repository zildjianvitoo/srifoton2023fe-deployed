import Button from "@/components/atoms/Button";
import InputDropdown from "@/components/atoms/InputDropdown";
import InputFile from "@/components/atoms/InputFile";
import InputForm from "@/components/atoms/InputForm";
import { useForm } from "react-hook-form";

export default function RegisterSeminarForm() {
  const { register, control } = useForm();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`w-full z-10 relative`} onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
        <InputForm
          labelFor="name"
          labelText={"Nama Tim"}
          placeholder={"Contoh: Tim PakeNanya"}
          type={"text"}
        />
        <InputForm
          labelFor={"email"}
          labelText={"Email"}
          placeholder={"Contoh: srifoton2023@gmail.com"}
          type={"email"}
        />
        <InputForm
          labelFor={"universitas"}
          labelText={"Universitas"}
          placeholder={"Contoh: Universitas Sriwijaya"}
          type={"text"}
        />
        <InputDropdown />
        <InputFile labelFor={"bukti-pembayaran"} labelText="Bukti Pembayaran" />
        <Button variant={"submitButton"} style={"w-3/4 mx-auto mt-2 lg:mt-4"}>
          Daftar
        </Button>
      </div>
    </form>
  );
}
