import React from "react";

export default function PaymentNote() {
  return (
    <div className="text-sm lg:text-lg  border-[3px] border-dashed border-[#2E7BEF] dark:border-[#E924E8] px-4 py-2 mt-2 text-[#464646] dark:text-[#EDEDED] rounded-lg leading-snug ">
      <p>Pembayaran dapat dikirimkan melalui :</p>
      <div className="px-2 lg:px-4">
        <p> Dana : 08123456789</p>
        <p> Gopay : 08122354886</p>
        <p>Transfer Bank</p>
        <div className="px-3 lg:px-6">
          <p> BRI : 12345678945632</p>
          <p> BCA : 12345678912568</p>
          <p> Mandiri : 2255789462495</p>
        </div>
      </div>
      <p className="mt-5">
        <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>Simpan dan
        unggah pada kolom bukti pembayaran sebelum anda melakukan pendaftaran.
      </p>
    </div>
  );
}
