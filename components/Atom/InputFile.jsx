import { BsImage } from "react-icons/bs";

export default function InputFile({ labelText, labelFor }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="dropzone-file"
        className="text-lg font-medium dark:text-[#EDEDED] "
      >
        {labelText}
      </label>
      <div className="flex items-center w-full mt-1 font-sans ">
        <label
          htmlFor={labelFor}
          className="flex flex-col items-center w-full p-6 mx-auto text-center bg-transparent border border-black dark:border-[#E0E0E0] cursor-pointer rounded-xl"
        >
          <div className=" h-[7.5rem] flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 rounded-md border border-[#D0D0D0] py-1 px-4 bg-[#E2E2E2] dark:bg-transparent dark:border-none">
              <BsImage className="dark:text-white" />
              <p className="text-sm font-medium dark:text-white">Unggah</p>
            </div>
          </div>
          <input id={labelFor} type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}
