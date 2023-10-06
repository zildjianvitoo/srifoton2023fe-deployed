import { LuCopy } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

export default function PaymentNote({ seminarPage }) {
  return (
    <div
      className={`text-sm   z-[40] lg:text-lg  px-4 py-2 pb-3 mt-2 !rounded-[25px] md:!rounded-[27px] lg:!rounded-[30px]  ${
        seminarPage
          ? "text-[#000000] dark:text-[#EDEDED]"
          : "text-[#464646] border-[3px] gradient-border-registerkompetisi-pn dark:gradient-border-registerkompetisi-pn-dark"
      } lg:text-[#464646] dark:text-[#EDEDED] rounded-lg leading-snug`}
    >
      <p>Pembayaran dapat dikirimkan melalui :</p>
      {seminarPage ? (
        <ul className="relative flex flex-col gap-1 px-2 lg:px-4 lg:gap-0">
          <li className="pr-4">
            {" "}
            <div>
              Dana <span> : 085378309768 </span>
              <span className="font-medium">
                (a.n M. Fairuz Abadi){" "}
                <CopyToClipboard
                  text={"085378309768"}
                  className="inline-block ml-1 cursor-pointer"
                  onCopy={() => toast.info("Berhasil copy")}
                >
                  <LuCopy />
                </CopyToClipboard>
              </span>
            </div>
          </li>
          <li className="pr-4">
            {" "}
            Gopay <span> : 085378309768 </span>
            <span className="font-medium">
              (a.n M. Fairuz Abadi){" "}
              <CopyToClipboard
                text={"085378309768"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </span>
          </li>
          <li className="pr-4">
            {" "}
            Shopeepay <span> : 085378309768 </span>
            <span className="font-medium">
              (a.n M. Fairuz Abadi){" "}
              <CopyToClipboard
                text={"085378309768"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </span>
          </li>
          <li className="pr-4">
            {" "}
            Mandiri <span> : 1120020209255 </span>
            <span className="font-medium">
              (a.n Annisa Reida Raheima){" "}
              <CopyToClipboard
                text={"1120020209255"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </span>
          </li>
        </ul>
      ) : (
        <ul className="relative flex flex-col gap-1 px-2 lg:px-4 lg:gap-0">
          <li className="pr-4">
            {" "}
            Dana <span className="lg:ml-[46px]"> : 081273123655 </span>
            <span className="font-medium">
              (a.n Hafiz Kurniawan){" "}
              <CopyToClipboard
                text={"081273123655"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </span>
            <li className="pr-4 ">
              {" "}
              Gopay <span className="lg:ml-9 "> : 081273123655 </span>
              <span className="font-medium">
                (a.n Hafiz Kurniawan){" "}
                <CopyToClipboard
                  text={"081273123655"}
                  className="inline-block ml-1 cursor-pointer"
                  onCopy={() => toast.info("Berhasil copy")}
                >
                  <LuCopy />
                </CopyToClipboard>
              </span>
            </li>
            <li>
              OVO
              <span className="lg:ml-[50px]"> : 081273123655 </span>
              <span className="font-medium">(a.n Hafiz Kurniawan)</span>
              <CopyToClipboard
                text={"081273123655"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </li>
          </li>
          <li>
            {" "}
            Shopeepay : 081273123655{" "}
            <span className="font-medium">
              (a.n Hafiz Kurniawan){" "}
              <CopyToClipboard
                text={"081273123655"}
                className="inline-block ml-1 cursor-pointer"
                onCopy={() => toast.info("Berhasil copy")}
              >
                <LuCopy />
              </CopyToClipboard>
            </span>
          </li>
          <p className="mt-5 font-medium"> Transfer Bank</p>
          <ul className="flex flex-col gap-1 px-3 lg:px-6 lg:gap-0">
            <li>
              {" "}
              BSI <span className="ml-9">: 7233744705 </span>
              <span className="font-medium">
                {" "}
                (a.n Alfina Dwi Rahmi){" "}
                <CopyToClipboard
                  text={"7233744705"}
                  className="inline-block ml-1 cursor-pointer "
                  onCopy={() => toast.info("Berhasil copy")}
                >
                  <LuCopy />
                </CopyToClipboard>
              </span>
            </li>
            <li>
              {" "}
              BNI <span className="ml-[33px]">: 1176107810 </span>
              <span className="font-medium">
                {" "}
                (a.n Andini Dwipatricia){" "}
                <CopyToClipboard
                  text={"1176107810"}
                  className="inline-block ml-1 cursor-pointer "
                  onCopy={() => toast.info("Berhasil copy")}
                >
                  <LuCopy />
                </CopyToClipboard>
              </span>
            </li>
            <li>
              {" "}
              Mandiri <span className="">: 1120020209255 </span>
              <span className="font-medium">
                {" "}
                (a.n Annisa Reida){" "}
                <CopyToClipboard
                  text={"1120020209255"}
                  className="inline-block ml-1 cursor-pointer"
                  onCopy={() => toast.info("Berhasil copy")}
                >
                  <LuCopy />
                </CopyToClipboard>
              </span>
            </li>
          </ul>
        </ul>
      )}
      <p className="mt-5 font-medium">
        <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>Jika
        Transfer dari <strong className="font-bold">Bank ke E-Wallet</strong>{" "}
        mohon untuk dilebihkan <strong className="font-bold">1000</strong>{" "}
        karena akan terpotong biaya admin
      </p>
      <p className="mt-2 font-medium">
        <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>Simpan dan
        unggah pada kolom bukti pembayaran sebelum anda melakukan pendaftaran.
      </p>
    </div>
  );
}
