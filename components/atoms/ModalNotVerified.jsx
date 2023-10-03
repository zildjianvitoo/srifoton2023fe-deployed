import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/router";
import React from "react";

export default function ModalNotVerified() {
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  return (
    <>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box text-[#494B7C] border-[3.5px] border-dashed border-pink-srifoton dark:text-[#E5EEFF] bg-[#eaedfd] dark:bg-[#525580]">
          <img
            src="/assets/Dashboard/email-warning.svg"
            alt="icon email warning"
            className="mx-auto"
          />
          <p className={`py-4 lg:px-6`}>
            Ups... <br />
            Silahkan lakukan verifikasi e-mail anda terlebih dahulu.
          </p>
          <div className="modal-action">
            <button
              htmlFor="my_modal_8"
              className=" bg-transparent border-pink-srifoton hover:bg-[#E924E8] outline-none border-[2px] w-1/2  sm:w-[30%] py-1 rounded-[20px] text-pink-srifoton hover:text-white"
              onClick={() => router.push(`/verify-email?email=${user.email}`)}
            >
              Verfikasi Email
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
