import React from "react";

export default function Modal({ showModal, setShowModal, message }) {
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
        <div className="modal-box text-[#797979] dark:text-[#CFCFCF] bg-[#FCF2FF] dark:bg-[#141754] ">
          <h3 className="text-lg font-bold">Berhasil</h3>
          <p className="py-4">{message}!</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="text-white btn dark:btn-active btn-primary"
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
