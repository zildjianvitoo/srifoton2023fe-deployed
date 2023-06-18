import InputDropdown from "@/components/Atom/InputDropdown";
import InputFile from "@/components/Atom/InputFile";
import InputForm from "@/components/Atom/InputForm";
import { useFieldNumber } from "@/store/useFieldNumber";
import { shallow } from "zustand/shallow";
import { useTeamDataStore } from "@/store/useTeamData";
import { useEffect } from "react";

export default function FormFirstField() {
  const { setFieldNumber } = useFieldNumber();
  const {
    teamName,
    email,
    universitas,
    paymentMethod,
    proofOfPayment,
    setTeamName,
    setEmail,
    setUniversitas,
    setPaymentMethod,
    setProofOfPayment,
  } = useTeamDataStore(
    (state) => ({
      teamName: state.teamName,
      email: state.email,
      universitas: state.universitas,
      paymentMethod: state.paymentMethod,
      proofOfPayment: state.proofOfPayment,
      setTeamName: state.setTeamName,
      setEmail: state.setEmail,
      setUniversitas: state.setUniversitas,
      setPaymentMethod: state.setPaymentMethod,
      setProofOfPayment: state.setProofOfPayment,
    }),
    shallow
  );

  useEffect(() => {
    console.log(proofOfPayment);
    //tidak bisa disimpan ke sessionstorage karena berupa file
  }, [proofOfPayment]);
  return (
    <form className="-mt-5 lg:-mt-2">
      <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
        <InputForm
          labelFor="name"
          labelText={"Nama Tim"}
          placeholder={"Contoh: Tim PakeNanya"}
          type={"text"}
          name="teamName"
          value={teamName}
          onChangeHandler={(e) => setTeamName(e.target.value)}
        />
        <InputForm
          labelFor={"email"}
          labelText={"Email"}
          placeholder={"Contoh: srifoton2023@gmail.com"}
          type={"email"}
          name={"email"}
          value={email}
          onChangeHandler={(e) => setEmail(e.target.value)}
        />
        <InputForm
          labelFor={"universitas"}
          labelText={"Universitas"}
          placeholder={"Contoh: Universitas Sriwijaya"}
          type={"text"}
          name={"universitas"}
          value={universitas}
          onChangeHandler={(e) => setUniversitas(e.target.value)}
        />
        <InputDropdown
          value={paymentMethod}
          onChangeHandler={(e) => setPaymentMethod(e.target.value)}
        />
        <InputFile
          labelFor={"bukti-pembayaran"}
          labelText="Bukti Pembayaran"
          value={proofOfPayment}
          setProof={setProofOfPayment}
        />
        <button
          onClick={() => setFieldNumber(2)}
          className="w-full bg-[#2E7BEF] opacity-90 hover:opacity-100  tracking-wider text-[#FCFCFC] py-3 mt-5 rounded-lg font-semibold text-lg lg:text-xl"
        >
          Lanjut
        </button>
      </div>
    </form>
  );
}
