import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  message,
  messageHeader = "Berhasil",
}) {
  return (
    <>
      <label htmlFor="my_modal_6" className="hidden" />
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={showModal}
      />
      <div className="modal ">
        <div className="modal-box text-[#494B7C] dark:text-[#E5EEFF] bg-[#FCF2FF] dark:bg-[#141754] ">
          <h3 className="text-lg font-bold">{messageHeader}</h3>
          <p className="py-4">{message}!</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="text-white btn bg-[#2E7BEF] dark:bg-[#E924E8] outline-none border-none w-1/5 "
              onClick={() => setShowModal(false)}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
