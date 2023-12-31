import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";
import { competitionFormRules } from "@/utils/formRules";
import ErrorMessage from "../atoms/ErrorMessage";

export default function FormCard1({
  header,
  register,
  errors,
  setIdCard1,
  errorMessageIdCard1,
}) {
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
          placeholder={"Contoh: Zildjian Vito"}
          register={register}
          rules={competitionFormRules.secondField.name1}
        />
        {errors.name1 && <ErrorMessage message={errors.name1.message} />}
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"nim1"}
          labelText={"ID Mahasiswa"}
          type={"text"}
          placeholder={"Contoh: 090211382383929"}
          register={register}
          rules={competitionFormRules.secondField.nim1}
        />
        {errors.nim1 && <ErrorMessage message={errors.nim1.message} />}
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"phoneNumber1"}
          labelText={"No Telepon"}
          type={"text"}
          placeholder={"Contoh: 08123456789"}
          register={register}
          rules={competitionFormRules.secondField.phoneNumber1}
        />
        {errors.phoneNumber1 && (
          <ErrorMessage message={errors.phoneNumber1.message} />
        )}
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"instagram1"}
          labelText={"Instagram"}
          type={"text"}
          placeholder={"Contoh: @zildjianvitoo"}
          register={register}
          rules={competitionFormRules.secondField.instagram1}
        />
        {errors.instagram1 && (
          <ErrorMessage message={errors.instagram1.message} />
        )}
      </div>
      {/* <InputRadio setGender={setGender} /> */}
      <InputFile
        labelFor="idCard1"
        labelText="Kartu Mahasiswa"
        setProof={setIdCard1}
        errorMessage={errorMessageIdCard1}
      />
    </div>
  );
}
