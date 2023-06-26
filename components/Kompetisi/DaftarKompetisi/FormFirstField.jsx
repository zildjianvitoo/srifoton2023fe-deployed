import InputDropdown from "@/components/Atom/InputDropdown";
import InputFile from "@/components/Atom/InputFile";
import InputForm from "@/components/Atom/InputForm";
import { shallow } from "zustand/shallow";
import { useTeamData } from "@/store/useTeamData";
import { useEffect } from "react";

export default function FormFirstField() {
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
  } = useTeamData(
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

  return (
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col gap-6 w-full dark:text-[#EDEDED]">
        <InputForm
          labelFor="name"
          labelText={"Nama Tim"}
          placeholder={"Contoh: Tim PakeNanya"}
          type={"text"}
          name="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <InputForm
          labelFor={"email"}
          labelText={"Email"}
          placeholder={"Contoh: srifoton2023@gmail.com"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          labelFor={"universitas"}
          labelText={"Universitas"}
          placeholder={"Contoh: Universitas Sriwijaya"}
          type={"text"}
          name={"universitas"}
          value={universitas}
          onChange={(e) => setUniversitas(e.target.value)}
        />
        <InputDropdown
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <InputFile
          labelFor={"bukti-pembayaran"}
          labelText="Bukti Pembayaran"
          value={proofOfPayment}
          setProof={setProofOfPayment}
        />
      </div>
    </div>
  );
}
