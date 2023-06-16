import InputDropdown from "@/components/Atom/InputDropdown";
import InputFile from "@/components/Atom/InputFile";
import InputForm from "@/components/Atom/InputForm";
import { useFieldNumber } from "@/store/useFieldNumber";
import { shallow } from "zustand/shallow";
import { useTeamDataStore } from "@/store/useTeamData";

//todo ganti state management pake zustand biar lebih gampang
export default function FormFirstField() {
  const { setFieldNumber } = useFieldNumber();
  const {
    teamName,
    email,
    universitas,
    setTeamName,
    setEmail,
    setUniversitas,
  } = useTeamDataStore(
    (state) => ({
      teamName: state.teamName,
      email: state.email,
      universitas: state.universitas,
      setTeamName: state.setTeamName,
      setEmail: state.setEmail,
      setUniversitas: state.setUniversitas,
    }),
    shallow
  );

  return (
    <form className="-mt-5 lg:-mt-2">
      <div className="flex flex-col w-full gap-6 dark:text-[#EDEDED]">
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
