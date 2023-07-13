import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";

export default function FormCard1({ header, register, setIdCard3 }) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-lg w-full border-2 border-dashed border-[#E924E8] lg:w-1/2  dark:text-[#EDEDED">
      <h3 className=" text-xl lg:text-3xl font-medium text-center text-[#F86E45] dark:text-[#D5DA00]">
        {header}
      </h3>
      <InputForm
        labelFor={"name3"}
        labelText={"Nama"}
        type={"text"}
        placeholder={"Contoh: Zildjian Vito"}
        register={register}
      />
      <InputForm
        labelFor={"nim3"}
        labelText={"ID Mahasiswa"}
        type={"number"}
        placeholder={"Contoh: 090211382383929"}
        register={register}
      />
      <InputForm
        labelFor={"phoneNumber3"}
        labelText={"No Telepon"}
        type={"number"}
        placeholder={"Contoh: 08123456789"}
        register={register}
      />
      <InputForm
        labelFor={"instagram3"}
        labelText={"Instagram"}
        type={"text"}
        register={register}
        placeholder={"Contoh: @zildjianvitoo"}
      />
      {/* <InputRadio setGender={setGender} /> */}
      <InputFile
        labelFor="idCard3"
        labelText="Kartu Mahasiswa"
        setProof={setIdCard3}
      />
    </div>
  );
}
