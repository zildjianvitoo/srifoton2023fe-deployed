import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";

const InputDropdown = forwardRef(function InputDropDown(
  { onChange, onBlur, name, errors, seminarPage },
  ref
) {
  const aaa = "asasa";

  return (
    <div className="flex flex-col">
      <label htmlFor="pembayaran" className="text-lg font-medium lg:text-xl ">
        Metode Pembayaran
      </label>
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        id="pembayaran"
        className="w-[60%] mt-1 lg:w-[35%] p-[6px] bg-transparent border border-black dark:border-[#E0E0E0] rounded-lg "
      >
        <option value="" selected disabled hidden>
          Pilih Opsi
        </option>
        {!seminarPage && (
          <option
            value="ovo"
            className="dark:bg-[#2B2D55] dark:text-[#EDEDED] "
          >
            OVO
          </option>
        )}
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
          value="shopeepay"
          className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
        >
          SHOPEEPAY
        </option>
        {!seminarPage && (
          <>
            <option
              value="bsi"
              className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              TRANSFER BANK BSI
            </option>
            <option
              value="bni"
              className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
            >
              TRANSFER BANK BNI
            </option>
          </>
        )}
        <option
          value="mandiri"
          className="bg-transparent dark:bg-[#2B2D55] dark:text-[#EDEDED] "
        >
          TRANSFER BANK MANDIRI
        </option>
      </select>
      {errors && <ErrorMessage message={errors.message} />}
    </div>
  );
});

export default InputDropdown;
