import InputForm from "../atoms/InputForm";
import InputFile from "../atoms/InputFile";

export default function FormCardDetailMember3({ header, register, proof }) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-[25px] md:rounded-[27px] lg:rounded-[30px] w-full gradient-border-registerkompetisi-member dark:gradient-border-registerkompetisi-member-dark lg:w-1/2  dark:text-[#EDEDED">
      <h3 className="pb-1 mx-auto text-2xl font-bold text-center text-transparent w-fit md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-srifoton to-pink-srifoton bg-clip-text font-poppins">
        {header}
      </h3>
      <div className="flex flex-col lg:mt-10">
        <InputForm
          labelFor={"name3"}
          labelText={"Nama"}
          type={"text"}
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"nim3"}
          labelText={"ID Mahasiswa"}
          type={"text"}
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"phoneNumber3"}
          labelText={"No Telepon"}
          type={"text"}
          register={register}
        />
      </div>
      <div className="flex flex-col">
        <InputForm
          labelFor={"instagram3"}
          labelText={"Instagram"}
          type={"text"}
          register={register}
        />
      </div>
      {/* <InputRadio setGender={setGender} /> */}
      <InputFile
        labelFor="idCard3DetailTeam"
        labelText="Kartu Mahasiswa"
        imageReadOnly={proof}
        detailTeamPage
      />
    </div>
  );
}
