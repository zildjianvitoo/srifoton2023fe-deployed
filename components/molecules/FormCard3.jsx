import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";

export default function FormCard1({ header, register, setIdCard3 }) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-[25px] md:rounded-[27px] lg:rounded-[30px] w-full gradient-border-registerkompetisi-member dark:gradient-border-registerkompetisi-member-dark lg:w-1/2  dark:text-[#EDEDED">
      <h3 className="pb-1 text-2xl font-bold text-center text-transparent md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-srifoton to-pink-srifoton bg-clip-text font-poppins">
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
