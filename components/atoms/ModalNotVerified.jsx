import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/router";
import React from "react";

export default function ModalNotVerified() {
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  return (
    <>
      <label htmlFor="my_modal_6" />
      <input type="checkbox" id="my_modal_6" className="modal-toggle" checked />
      <div className="modal ">
        <div className="modal-box text-[#494B7C] dark:text-[#E5EEFF] bg-[#FCF2FF] dark:bg-[#141754] ">
          <h3 className={`text-lg font-bold `}>Header</h3>
          <p className={`py-4 `}>Pesan</p>
          <div className="modal-action">
            <button
              htmlFor="my_modal_6"
              className="text-white btn bg-[#2E7BEF] dark:bg-[#E924E8] outline-none border-none w-3/4  sm:w-1/2"
              onClick={() => router.push(`/verify-email?email=${user.email}`)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
