import { BsImage } from "react-icons/bs";

export default function FormFirstField() {
  return (
    <form className="mt-12">
      <div className="flex flex-col w-full gap-6 dark:text-[#EDEDED]">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium ">
            Nama Tim
          </label>
          <input
            type="text"
            id="name"
            placeholder="Contoh: Tim PakeNanya"
            className="w-full p-2 pl-3 bg-transparent border border-black dark:border-[#E0E0E0] rounded-lg placeholder:text-[#969696]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Contoh: srifoton2023@gmail.com"
            className="w-full p-2 pl-3 bg-transparent border border-black dark:border-[#E0E0E0] rounded-lg placeholder:text-[#969696]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium ">
            Universitas
          </label>
          <input
            type="text"
            id="universitas"
            placeholder="Contoh: Universitas Sriwijaya"
            className="w-full p-2 pl-3 bg-transparent border border-black dark:border-[#E0E0E0] rounded-lg placeholder:text-[#969696]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium ">
            Metode Pembayaran
          </label>
          <select className="w-[60%] lg:w-[35%] p-[6px] bg-transparent border border-black dark:border-[#E0E0E0] rounded-lg ">
            <option value="" disabled selected hidden>
              Pilih Opsi
            </option>
            <option
              value="ovo"
              className="dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              OVO
            </option>
            <option
              value="dana"
              className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              DANA
            </option>
            <option
              value="gopay"
              className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              GOPAY
            </option>
            <option
              value="linkaja"
              className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              LINKAJA
            </option>
          </select>
        </div>

        <div className="flex items-center w-full font-sans ">
          <label
            for="dropzone-file"
            className="flex flex-col items-center w-full p-6 mx-auto text-center bg-transparent border border-black dark:border-[#E0E0E0] cursor-pointer rounded-xl"
          >
            <div className=" h-[8rem] flex items-center justify-center">
              <div className="flex items-center justify-center gap-2 rounded-md border border-[#D0D0D0] py-1 px-4 bg-[#E2E2E2] dark:bg-[#BDBDBD]">
                <BsImage className="dark:text-black" />
                <p className="text-sm font-medium dark:text-black">Unggah</p>
              </div>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#2E7BEF] opacity-90 hover:opacity-100 text-[#FCFCFC] py-3 mt-6 rounded-lg font-semibold text-lg"
        >
          Lanjut
        </button>
      </div>
    </form>
  );
}
