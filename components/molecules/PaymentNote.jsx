import React from "react";

export default function PaymentNote({ seminarPage }) {
  return (
    <div
      className={`text-sm lg:text-lg  px-4 py-2 mt-2 ${
        seminarPage
          ? "text-[#000000] dark:text-[#EDEDED]"
          : "text-[#464646] border-[3px] border-dashed border-[#2E7BEF] dark:border-[#E924E8]"
      } lg:text-[#464646] dark:text-[#EDEDED]  rounded-lg leading-snug`}
    >
      <p>Pembayaran dapat dikirimkan melalui :</p>
      <ul className="px-2 lg:px-4">
        <li> Dana : 08123456789</li>
        <li> Gopay : 08122354886</li>
        <li>Transfer Bank</li>
        <ul className="px-3 lg:px-6">
          <li> BRI : 12345678945632</li>
          <li> BCA : 12345678912568</li>
          <li> Mandiri : 2255789462495</li>
        </ul>
      </ul>
      <p className="mt-5">
        <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>Simpan dan
        unggah pada kolom bukti pembayaran sebelum anda melakukan pendaftaran.
      </p>
    </div>
  );
}
