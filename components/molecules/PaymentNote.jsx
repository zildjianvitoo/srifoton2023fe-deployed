export default function PaymentNote({ seminarPage }) {
  return (
    <div
      className={`text-sm lg:text-lg  px-4 py-2 pb-3 mt-2 !rounded-[25px] md:!rounded-[27px] lg:!rounded-[30px]  ${
        seminarPage
          ? "text-[#000000] dark:text-[#EDEDED]"
          : "text-[#464646] border-[3px] gradient-border-registerkompetisi-pn dark:gradient-border-registerkompetisi-pn-dark"
      } lg:text-[#464646] dark:text-[#EDEDED] rounded-lg leading-snug`}
    >
      <p>Pembayaran dapat dikirimkan melalui :</p>
      <ul className="flex flex-col gap-1 px-2 lg:px-4 lg:gap-0">
        <li>
          {" "}
          Dana <span className="lg:ml-[46px]"> : 081273123655 </span>
          <span className="font-medium">(a.n Hafiz Kurniawan)</span>
        </li>
        <li>
          {" "}
          Gopay <span className="lg:ml-9 "> : 081273123655 </span>
          <span className="font-medium">(a.n Hafiz Kurniawan)</span>
        </li>
        <li>
          OVO
          <span className="lg:ml-[50px]"> : 081273123655 </span>
          <span className="font-medium">(a.n Hafiz Kurniawan)</span>
        </li>
        <li>
          {" "}
          Shopeepay : 081273123655{" "}
          <span className="font-medium">(a.n Hafiz Kurniawan)</span>
        </li>
        <p className="mt-5 font-medium"> Transfer Bank</p>
        <ul className="flex flex-col gap-1 px-3 lg:px-6 lg:gap-0">
          <li>
            {" "}
            BSI <span className="ml-9">: 7233744705 </span>
            <span className="font-medium"> (a.n Alfina Dwi Rahmi)</span>
          </li>
          <li>
            {" "}
            BNI <span className="ml-[33px]">: 1176107810 </span>
            <span className="font-medium"> (a.n Andini Dwipatricia)</span>
          </li>
          <li>
            {" "}
            Mandiri <span className="">: 1120020209255 </span>
            <span className="font-medium"> (a.n Annisa Reida)</span>
          </li>
        </ul>
      </ul>
      <p className="mt-5 font-medium">
        <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>Simpan dan
        unggah pada kolom bukti pembayaran sebelum anda melakukan pendaftaran.
      </p>
    </div>
  );
}
