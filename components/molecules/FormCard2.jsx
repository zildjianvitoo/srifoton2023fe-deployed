import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";

export default function FormCard1({ header, register, setIdCard2, errors }) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-lg w-full border-2 border-dashed border-[#E924E8] lg:w-1/2  dark:text-[#EDEDED">
      <h3 className=" text-xl lg:text-3xl font-medium text-center text-[#F86E45] dark:text-[#D5DA00]">
        {header}
      </h3>
      <InputForm
        labelFor={"name2"}
        labelText={"Nama"}
        type={"text"}
        placeholder={"Contoh: Zildjian Vito"}
        register={register}
      />
      <InputForm
        labelFor={"nim2"}
        labelText={"ID Mahasiswa"}
        type={"number"}
        placeholder={"Contoh: 090211382383929"}
        register={register}
      />
      <InputForm
        labelFor={"phoneNumber2"}
        labelText={"No Telepon"}
        type={"number"}
        placeholder={"Contoh: 08123456789"}
        register={register}
      />
      <InputForm
        labelFor={"instagram2"}
        labelText={"Instagram"}
        type={"text"}
        register={register}
        placeholder={"Contoh: @zildjianvitoo"}
      />
      {/* <InputRadio setGender={setGender} /> */}
      <InputFile
        labelFor="idCard2"
        labelText="Kartu Mahasiswa"
        setProof={setIdCard2}
      />
    </div>
  );
}
