import { useUserStore } from "@/store/userStore";
import React from "react";
import { MdVerified } from "react-icons/md";
import { PiSealWarningFill } from "react-icons/pi";

export default function VerifiedEmail() {
  const { user } = useUserStore();

  if (!user.email_verified_at) {
    return (
      <div className="tooltip" data-tip="Belum Verifikasi">
        <PiSealWarningFill className="text-sm text-[#F45424] " />
        {/* <p className="leading-none text-[10px]">Sudah Verifikasi</p> */}
      </div>
    );
  }
  return (
    <div className="tooltip" data-tip="Sudah Verifikasi">
      <MdVerified className="text-sm text-[#13BA74] " />
      {/* <p className="leading-none text-[10px]">Sudah Verifikasi</p> */}
    </div>
  );

  //className="flex px-1   gap-1 items-center rounded-2xl border border-[#13BA74] text-[#13BA74]"
}
